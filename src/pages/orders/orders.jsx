import useKitchen from "../kitchen/useKitchen";
import OrderCard from "../../components/ordercard";
import { useState, useEffect } from "react";
import { updateOrderStatus } from "../../services/auth";
import MenuHamburger from "../../components/menuHamburger";
import cutlery from '../../img/cutlery.png';;

const Orders = () => {
  const { orders, setOrders, getData } = useKitchen();
  const [orderStatus, setOrderStatus] = useState([]);

  const ordersFiltered = () => {
    return orders.filter((item) => item.status === 'finalizado')
  }

  const changeStatus = (elem) => {
    updateOrderStatus('/orders/', elem.id, 'servido')
      .then(() => setOrderStatus([...orderStatus, { id: elem.id, status: 'servido' }]))
  }

  useEffect(() => {
    return orderStatus.map((order) => {
      const foundOrder = orders.map((elem) => elem).findIndex((item) => item.id === order.id)
      if (foundOrder !== -1) {
        console.log('remover')
        const removed = orders
        removed.splice(foundOrder, 1)
        setOrders([...removed])
        console.log(orders)
      }
      return orders
    })
  }, [orderStatus, orders, setOrders])

  // useEffect(() => {
  // return getData();
  // })

  return (
    <div className='main'>
      <nav className='nav-page'>
        <h1 className='page-labels'>Pedidos Finalizados</h1>
        <MenuHamburger />
      </nav>
      <div className='orders-list'>
        {ordersFiltered().map((elem) => {
          const clientProducts = elem.Products;
          const product = clientProducts.map((product) => product)
          return (
            <div key={elem.id}>
              <OrderCard
                src={cutlery}
                id={elem.id}
                name={elem.client_name}
                table={elem.table}
                status={elem.status}
                createdAt={elem.createdAt}
                updatedAt={elem.updatedAt}
                onClick={() => changeStatus(elem)}
                nameButton={'Servir pedido'}
                products={product}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders;
import useKitchen from "../kitchen/useKitchen";
import OrderCard from "../../components/ordercard";
import { useState, useEffect } from "react";
import { updateOrderStatus } from "../../services/auth";

const Orders = () => {
  const { orders, setOrders } = useKitchen();
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

  return (
    <div>
      <h1 className='test'>Pedidos prontos</h1>
      {ordersFiltered().map((elem) => {
        const clientProducts = elem.Products;
        const product = clientProducts.map((product) => product)
        return (
          <div className='order-card' key={elem.id}>
            <OrderCard
              name={elem.client_name}
              table={elem.table}
              status={elem.status}
              createdAt={elem.createdAt}
              onClick={() => changeStatus(elem)}
              nameButton={'Servir pedido'}
              products={product}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Orders;
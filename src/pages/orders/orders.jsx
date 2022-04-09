import useOrders from "../orders/useOrders";
import OrderCard from "../../components/ordercard/ordercard";
import { useEffect } from "react";
import MenuHamburger from "../../components/menuHamburger/menuHamburger";
import Modal from "../../components/modal/modal";

const Orders = () => {
  const { orders, setOrders, orderStatus, getData, ordersFiltered, changeStatus, modalMessage, openModal, setOpenModal } = useOrders();

  useEffect(() => {
    const interval = setInterval(() => {
      return getData();
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    return orderStatus.map((order) => {
      const foundOrder = orders.map((elem) => elem).findIndex((item) => item.id === order.id);
      if (foundOrder !== -1) {
        const removed = orders;
        removed.splice(foundOrder, 1);
        setOrders([...removed]);
      }
      return orders;
    })
  }, [orderStatus, orders, setOrders]);

  return (
    <>
      <Modal modalMessage={modalMessage} openModal={openModal} setOpenModal={setOpenModal} />
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
    </>

  )
}

export default Orders;
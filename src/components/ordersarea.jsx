import React, { useState } from "react";
import OrderCard from "./ordercard";
import useKitchen from "../pages/kitchen/useKitchen";
import { updateOrderStatus } from "../services/auth";
import { useEffect } from "react/cjs/react.development";

const OrdersArea = () => {
  const { orders, setOrders } = useKitchen();
  const [orderStatus, setOrderStatus] = useState([]);

  const changeStatus = (elem) => {
    updateOrderStatus('/orders/', elem.id, 'finalizado')
      .then(() => setOrderStatus([...orderStatus, { id: elem.id, status: 'finalizado' }]))
  }

  const ordersFiltered = () => {
    return orders.filter((item) => item.status === 'pending')
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
  }, [orderStatus, orders])

  return (
    <div className='orders-page'>
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
              nameButton={'Finalizar pedido'}
              products={product}
            />
          </div>
        )
      }
      )}
    </div>
  )
}
export default OrdersArea;

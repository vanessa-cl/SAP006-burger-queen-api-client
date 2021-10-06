import React, { useState } from "react";
import OrderCard from "./ordercard";
import OrderProducts from "./orderproducts";
import { updateOrderStatus } from "../services/auth";
import { useEffect } from "react/cjs/react.development";

const OrdersArea = ({ value }) => {
  const [orderStatus, setOrderStatus] = useState([]);
  let orders = value;

  const changeStatus = (elem) => {
    updateOrderStatus('/orders/', elem.id, 'finalizado')
      .then(() => setOrderStatus([...orderStatus, { id: elem.id, status: 'finalizado' }]))
  }

  useEffect(() => {
    return orderStatus.map((order) => {
      const foundOrder = orders.map((elem) => elem).findIndex((item) => item.id === order.id)
      if (foundOrder !== -1) {
        console.log('remover') 
        const removed = orders
        removed.splice(foundOrder, 1)
        orders = removed;
        console.log(orders)
        return orders
      }
      return orders
    })
  }, [orderStatus, orders])

  return (
    <div className='orders-page'>
      {orders.map((elem) => {
        const clientProducts = elem.Products;
        return (
          <div className='order-card' key={elem.id}>
            <OrderCard
              name={elem.client_name}
              table={elem.table}
              status={elem.status}
              createdAt={elem.createdAt}
              onClick={() => changeStatus(elem)}
            />
            {
              clientProducts.map((product) => {
                return (
                  <OrderProducts
                    key={product.id}
                    name={product.name}
                    flavor={product.flavor}
                    complement={product.complement}
                  />
                )
              })}
          </div>
        )

      }

      )}
    </div>
  )
}
export default OrdersArea;

// data.map((elem) => {
//   const products = elem.Products
//   products.map((item) => {
//     console.log(item)
//   })
// }))
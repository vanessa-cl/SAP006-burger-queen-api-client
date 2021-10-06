import React, { useState } from "react";
import OrderCard from "./ordercard";
import OrderProducts from "./orderproducts";
import { updateOrderStatus } from "../services/auth";

const OrdersArea = ({ value }) => {
  // const [orderStatus, setOrderStatus] = useState('pending');
  

  return (
    <div className='orders-page'>
      {value.map((elem) => {
        const clientProducts = elem.Products;
        return (
          <div className='order-card' key={elem.id}>
            <OrderCard
              name={elem.client_name}
              table={elem.table}
              status={elem.status}
              createdAt={elem.createdAt}
              onClick={updateOrderStatus('/orders/', elem.id, 'pronto').then((data) => console.log(data))}
            />
            {
              clientProducts.map((product) => {
                console.log(product)
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
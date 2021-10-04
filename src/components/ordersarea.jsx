import React from "react";
import OrderCard from "./ordercard";

const OrdersArea = ({ value }) => {
  return (
    <div className='orders-area'>
      {value.map((elem) => {
        console.log(elem)
        return (
          <div key={elem.id}>
            <OrderCard
              name = {elem.client_name}
              table = {elem.table}
              status = {elem.status}
              createdAt = {elem.createdAt}
            />
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
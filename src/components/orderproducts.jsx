import React from "react";

const OrderProducts = ({ id, name, flavor, complement }) => {
  return (
    <div className='order-products' key={id}>
      <p>{name}</p>
      <p>{flavor}</p>
      <p>{complement}</p>
    </div>
  )
}

export default OrderProducts;
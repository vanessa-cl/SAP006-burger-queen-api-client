import React from "react";

const OrderProducts = ({ id, name, flavor, complement }) => {
  return (
    <div key={id}>
      <p>{name}</p>
      <p>{flavor}</p>
      <p>{complement}</p>
    </div>
  )
}

export default OrderProducts;
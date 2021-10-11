import React from "react";

const OrderProducts = ({ id, name, flavor, complement }) => {
  return (
    <div className='order-item' key={id}>
      <p>{name}</p>
      {flavor !== null || complement !== null ? 
      <p>sabor {flavor} com {complement}</p>
      : null
    }    
    </div>
  )
}

export default OrderProducts;
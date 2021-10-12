import React from "react";

const OrderProducts = ({ id, qtd, name, flavor, complement }) => {
  return (
    <div className='order-item' key={id}>
      <p>{qtd}x</p>
      <p>{name}</p>
      {flavor !== null || complement !== null ? 
      <p>sabor {flavor} com {complement}</p>
      : null
    }    
    </div>
  )
}

export default OrderProducts;
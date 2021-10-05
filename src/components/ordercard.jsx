import React from "react";

const OrderCard = ({ name, table, status, createdAt, product }) => {
  return (
    <div className='cards-info'>
       <label className='items-labels'>Data:</label>
      <p>{createdAt}</p>
      <label className='items-labels'>Nome:</label>
      <p>{name}</p>
      <label className='items-labels'>Mesa:</label>
      <p>{table}</p>
      <label className='items-labels'>Status:</label>
      <p>{status}</p>
      <label className='items-labels'>Items:</label>
      <p>{product}</p>
    </div>
  )
}

export default OrderCard;
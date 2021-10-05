import React from "react";

const OrderCard = ({ name, table, status, createdAt, product }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{table}</p>
      <p>{status}</p>
      <p>{createdAt}</p>
      <p>{product}</p>
    </div>
  )
}

export default OrderCard;
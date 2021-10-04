import React from "react";

const OrderCard = ({ name, table, status, createdAt }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{table}</p>
      <p>{status}</p>
      <p>{createdAt}</p>
    </div>
  )
}

export default OrderCard;
import React from "react";

const OrderCard = ({ name, table, status, createdAt, product, onClick }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{table}</p>
      <p>{status}</p>
      <p>{createdAt}</p>
      <p>{product}</p>
      <button onClick={onClick}>Finalizar pedido</button>
    </div>
  )
}

export default OrderCard;
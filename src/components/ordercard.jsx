import React from "react";
import OrderProducts from "./orderproducts";
const convertToMinutes = (date) => {
  console.log(date)
}

const OrderCard = ({ name, table, status, createdAt, onClick, products, nameButton }) => {
  return (
    <div>
      <div className='cards-info'>
        <label className='items-labels'>Horário de chegada:</label>
        <p>{convertToMinutes(createdAt)}</p>
        <label className='items-labels'>Nome:</label>
        <p>{name}</p>
        <label className='items-labels'>Mesa:</label>
        <p>{table}</p>
        <label className='items-labels'>Status:</label>
        <p>{status}</p>
        <label className='items-labels'>Itens:</label>
      </div>
      {products.map((product) => {
        return (
          <OrderProducts
            key={product.id}
            name={product.name}
            flavor={product.flavor}
            complement={product.complement}
          />
        )
      })
      }
      <button onClick={onClick}>{nameButton}</button>
    </div>
  )
}

export default OrderCard;
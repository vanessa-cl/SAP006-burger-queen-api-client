import React from "react";
import OrderProducts from "./orderproducts";
const convertToMinutes = (date) => {
  console.log(date)
}

const OrderCard = ({ src, id, name, table, status, createdAt, onClick, products, nameButton }) => {
  return (
    <div className='order-card'>
      <div className='order-header'>
        <img className='order-icon' src={src} alt={'order icon'}></img>
        <p className='order-label'>Pedido N°{id}</p>
      </div>
      <div className='cards-info'>
        <label className='items-labels'>Chegada:</label>
        <p className='order-info'>{convertToMinutes(createdAt)}</p>
        <label className='items-labels'>Nome:</label>
        <p className='order-info'>{name}</p>
        <label className='items-labels'>Mesa:</label>
        <p className='order-info'>{table}</p>
        <label className='items-labels'>Status:</label>
        <p className='order-info'>{status}</p>
        <label className='items-labels'>Itens:</label>
      </div>
      <div className='order-products'>
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
      </div>
      <button className='order-button' onClick={onClick}>{nameButton}</button>
    </div>
  )
}

export default OrderCard;
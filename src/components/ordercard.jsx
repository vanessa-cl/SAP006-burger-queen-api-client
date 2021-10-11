import React from "react";
import OrderProducts from "./orderproducts";
import { TimeOrInterval } from "./time/time";

const OrderCard = ({ src, id, name, table, status, createdAt, updatedAt, onClick, products, nameButton }) => {
  return (
    <div className='order-card'>
      <div className='order-header'>
        <img className='order-icon' src={src} alt={'order icon'}></img>
        <p className='order-label'>Pedido N°{id}</p>
      </div>
      <div className='cards-info'>
        <TimeOrInterval createdAt={createdAt} updatedAt={updatedAt}/>
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
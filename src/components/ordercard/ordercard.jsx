import React from "react";
import OrderProducts from "../orderProducts/orderproducts";
import { TimeOrInterval } from "../time/time";
import { initialStatus } from "../time/date";
import cutlery from '../../img/cutlery.png';
import fryingPan from '../../img/frying-pan.png';
import pinkFryingPan from '../../img/pink-frying-pan.png';

const imgSrc = (status) => {
  if (status === 'pending') {
    return fryingPan;
  } else if (status === 'preparando') {
    return pinkFryingPan;
  } else {
    return cutlery;
  }
};

const nameButton = (status) => {
  if (status === 'pending') {
    return 'Iniciar preparo';
  } else if (status === 'preparando') {
    return 'Finalizar preparo';
  } else {
    return 'Servir pedido';
  }
};

export const colorClass = (status) => {
  if (status === 'pending') {
    return '';
  } else if (status === 'preparando') {
    return 'prepared-status';
  } else {
    return 'final-status';
  }
};

const OrderCard = ({
  id,
  name,
  table,
  status,
  createdAt,
  updatedAt,
  onClick,
  products
}) => (
  <div className='order-card'>
    <div className='order-header'>
      <img className='order-icon' src={imgSrc(status)} alt={'order icon'}></img>
      <p className={`order-label ${colorClass(status)}`}>
        Pedido N°{id}
      </p>
    </div>
    <div className='cards-info'>
      <TimeOrInterval createdAt={createdAt} updatedAt={updatedAt} status={status} />
      <label className={`items-labels ${colorClass(status)}`}>
        Nome:
      </label>
      <p className='order-info'>{name}</p>
      <label className={`items-labels ${colorClass(status)}`}>
        Mesa:
      </label>
      <p className='order-info'>{table}</p>
      <label className={`items-labels ${colorClass(status)}`}>
        Status:
      </label>
      <p className='order-info'>{initialStatus(status)}</p>
      <label className={`items-labels ${colorClass(status)}`}>
        Itens:
      </label>
    </div>
    <div className='order-products'>
      {products.map((product) => {
        return (
          <OrderProducts
            key={product.id}
            qtd={product.qtd}
            name={product.name}
            flavor={product.flavor}
            complement={product.complement} />
        );
      })}
    </div>
    <button className={`order-button ${colorClass(status)}`} onClick={onClick}>
      {nameButton(status)}
    </button>
  </div>
);

export default OrderCard;
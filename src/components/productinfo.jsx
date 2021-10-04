import React from "react";


const ProductInfo = ({ name, price, flavor, complement, onClick, onClickDelete }) => {
  return (
    <article className='product-item'>
      <p className='product-info'>{name}</p>
      <p className='product-info'>{flavor}</p>
      <p className='product-info'>{complement}</p>
      <p className='product-info'>R${price},00</p>
      <button className='product-button' onClick={onClick}>+</button>
      <button className='product-button' onClick={onClickDelete}>-</button>
    </article>
  )
}

export default ProductInfo;
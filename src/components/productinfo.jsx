import React from "react";
import plus from '../img/plus.png';
import minus from '../img/minus.png';

const ProductInfo = ({ name, price, flavor, complement, qtd, onClick, onClickDelete, classItem, hidePlus, hideMinus, hideInfo }) => {
  return (
    <article className={classItem}>
      <p className='product-info'>{name}</p>
      <p className={`product-info ${hideInfo}`} >{flavor}</p>
      <p className={`product-info ${hideInfo}`}>{complement}</p>
      <button className={`product-button ${hidePlus}`} onClick={onClick}>
        <img className='icon-button' src={plus} alt='plus'></img>
      </button>
      <button className={`product-button ${hideMinus}`} onClick={onClickDelete}>
        <img className='icon-button' src={minus} alt='minus'></img>
      </button>
      <p className={`product-info ${hideInfo}`}>{qtd}</p>
      <p className='product-info'>R${price},00</p>
      <hr className={`down-line ${hideInfo}`}></hr>
    </article>
  )
}

export default ProductInfo;
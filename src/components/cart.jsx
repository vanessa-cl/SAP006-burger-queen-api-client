import React from "react";
import ProductInfo from "./productinfo";

export default function Cart({ data, onClick, onClickDelete }) {
  return (
    <article className='cart-list'>
      {data.map((elem) => {
        return (
          <div key={elem.id}>
            <ProductInfo
              name={elem.name}
              price={elem.price}
              flavor={elem.flavor}
              complement={elem.complement}
              hidePlus={'hide'}
              qtd={elem.qtd}
              onClick={() => onClick(elem)}
              onClickDelete={() => onClickDelete(elem)}
              classItem={'product-cart'}
            />
          </div>)
      })}
    </article>

  )
}
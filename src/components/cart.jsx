import React from "react";
import ProductInfo from "./productinfo";

export default function Cart({ data, onClick, onClickDelete }) {
  return (
    <article className='orders-list'>
      {data.map((elem) => {
        return (
          <div key={elem.id}>
            <ProductInfo
              name={elem.name}
              price={elem.price}
              flavor={elem.flavor}
              complement={elem.complement}
              onClick={() => onClick(elem)}
              onClickDelete={() => onClickDelete(elem)}
            />
            <p className='quantity'>{elem.qtd}</p>

          </div>)
      })}
    </article>

  )
}
import React from "react";

const ResultPrice = (props) => {
  return (
  <div className='total-area'>
    <p>Total:</p>
    <p>R${props.value},00</p>
  </div>
  )
}

export default ResultPrice;
import { getTime, getInterval } from './date.jsx';

export const TimeOrInterval = ({ createdAt, updatedAt }) => {
  return (
    <>
      <p className='order-label'>Chegada:{getTime(createdAt)}</p>
      {updatedAt ? <p className='order-info'>Tempo de Preparo:{getInterval(createdAt, updatedAt)}</p> 
      : null}  
    </>
  )
}
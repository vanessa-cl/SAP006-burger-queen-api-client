import { getTime, getInterval } from './date.jsx';

export const TimeOrInterval = ({ createdAt, updatedAt }) => {
  return (
    <>
      <p className='items-labels'>Chegada:</p>
      <p className='order-info'>{getTime(createdAt)}</p>
      {updatedAt ?
        <>
          <p className='items-labels'>Tempo de Preparo:</p>
          <p className='order-info'>{getInterval(createdAt, updatedAt)}</p>
        </>
        : null}
    </>
  )
}
import { getTime, getInterval } from './date.jsx';

export const TimeOrInterval = ({ createdAt, updatedAt, status }) => {
  return (
    <>
      <p className={`items-labels ${status === 'preparando' ? ' prepared-status' : ''}`}>
        Chegada:
      </p>
      <p className='order-info'>{getTime(createdAt)}</p>
      {updatedAt ?
        <>
          <p className={`items-labels ${status === 'preparando' ? ' prepared-status' : ''}`}>
            Tempo de Preparo:
          </p>
          <p className='order-info'>{getInterval(createdAt, updatedAt)}</p>
        </>
        : null}
    </>
  )
}
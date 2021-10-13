import { getTime, getInterval } from './date.jsx';
import { colorClass } from '../ordercard/ordercard';

export const TimeOrInterval = ({
  createdAt,
  updatedAt,
  status
}) => {
  return (
    <>
      <p className={`items-labels ${colorClass(status)}`}>
        Chegada:
      </p>
      <p className='order-info'>{getTime(createdAt)}</p>
      {updatedAt ?
        <>
          <p className={`items-labels ${colorClass(status)}`}>
            Tempo de Preparo:
          </p>
          <p className='order-info'>{getInterval(createdAt, updatedAt)}</p>
        </>
        : null}
    </>
  );
};
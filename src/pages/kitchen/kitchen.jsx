import { useEffect, useState } from "react";
import { getOrders } from "../../services/auth";
import OrdersArea from "../../components/ordersarea";

const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  const getData = () => {
    getOrders('/orders')
    .then((data) => setOrders(data))
  }

  useEffect(() => {
  return getData();
  }, [])

  return (
    <div className='main'>
      <h1>Cozinha</h1>
      <OrdersArea value={orders}></OrdersArea>
    </div>
  );
}

export default Kitchen;
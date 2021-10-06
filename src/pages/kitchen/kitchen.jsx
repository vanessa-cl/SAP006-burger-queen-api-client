import { useEffect, useState } from "react";
import { getOrders } from "../../services/auth";
import MenuHamburger from "../../components/menuHamburger";
import OrdersArea from "../../components/ordersarea";

const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  const getData = () => {
    getOrders('/orders')
    .then((data) => setOrders(data))
  }

  useEffect(() => {
    return { orders }
  }, [orders])

  useEffect(() => {
  return getData();
  }, [])

  return (
    <div className='main'>
      <nav className='nav-container'>
      <h1 className='kitchen-labels'>Cozinha</h1>
      <MenuHamburger/>
      </nav>
      
      <OrdersArea value={orders}></OrdersArea>
    </div>
  );
}

export default Kitchen;
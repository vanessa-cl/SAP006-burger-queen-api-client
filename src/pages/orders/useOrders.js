import { useState } from "react";
import GetOrdersData from "../../services/ordersData";
import { updateOrderStatus } from "../../services/api";

const useOrders = () => {
  const { orders, setOrders, getData } = GetOrdersData();
  const [orderStatus, setOrderStatus] = useState([]);

  const ordersFiltered = () => {
    return orders.filter((item) => item.status === 'finalizado');
  };

  const changeStatus = (elem) => {
    updateOrderStatus('/orders/', elem.id, 'servido')
      .then(() => setOrderStatus([...orderStatus, { id: elem.id, status: 'servido' }]));
  };

  return {
    orders,
    setOrders,
    orderStatus,
    getData,
    ordersFiltered,
    changeStatus,
  };
};

export default useOrders;
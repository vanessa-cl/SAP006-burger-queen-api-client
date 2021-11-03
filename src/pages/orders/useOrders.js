import { useState } from "react";
import GetOrdersData from "../../services/ordersData";
import { updateOrderStatus } from "../../services/api";
import { getRoleFromStorage } from "../../Utils/LocalStorage/LocalStorage";

const useOrders = () => {
  const { orders, setOrders, getData } = GetOrdersData();
  const [orderStatus, setOrderStatus] = useState([]);

  const ordersFiltered = () => {
    return orders.filter((item) => item.status === 'finalizado');
  };

  const changeStatus = (elem) => {
    if (getRoleFromStorage() === 'attendant') {
      updateOrderStatus('/orders/', elem.id, 'servido')
      .then(() => setOrderStatus([...orderStatus, { id: elem.id, status: 'servido' }]));
    } else {
      console.log('Apenas um atendente pode servir os pedidos')
    }
    
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
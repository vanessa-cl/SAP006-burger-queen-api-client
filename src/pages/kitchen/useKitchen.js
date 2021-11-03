import { useState } from "react";
import GetOrdersData from "../../services/ordersData";
import { updateOrderStatus } from "../../services/api";
import { getRoleFromStorage } from "../../Utils/LocalStorage/LocalStorage";

const useKitchen = () => {
  const { orders, setOrders, getData } = GetOrdersData();
  const [orderStatus, setOrderStatus] = useState([]);

  const ordersFiltered = () => {
    return orders.filter((item) => item.status === 'pending' || item.status === 'preparando');
  };

  const changeStatus = (elem) => {
    if (getRoleFromStorage() === 'chef') {
      if (elem.status === 'pending') {
        updateOrderStatus('/orders/', elem.id, 'preparando')
          .then(() => setOrderStatus(
            [...orderStatus,
            {
              id: elem.id,
              status: 'preparando'
            }]));
      } else if (elem.status === 'preparando') {
        updateOrderStatus('/orders/', elem.id, 'finalizado')
          .then(() => setOrderStatus(
            [...orderStatus,
            {
              id: elem.id,
              status: 'finalizado'
            }]));
      }
    } else {
      console.log('Apenas um(a) chef pode iniciar/finalizar um pedido')
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

export default useKitchen;
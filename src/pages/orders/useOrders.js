import { useState } from "react";
import { getOrders } from "../../services/api";
import { updateOrderStatus } from "../../services/api";
import { getRoleFromStorage } from "../../Utils/LocalStorage/LocalStorage";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);

  const getData = () => {
    getOrders('/orders')
      .then((data) => sortById(data))
      .then((newData) => setOrders(newData));
  };

  const sortById = (data) => {
    return data.sort((a, b) => {
      return b.id - a.id
    });
  };
  
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
import { useState } from "react";
import { getOrders } from "../../services/api";
import { updateOrderStatus } from "../../services/api";
import { getRoleFromStorage } from "../../Utils/LocalStorage/LocalStorage";

const useKitchen = () => {
  const [orders, setOrders] = useState([])
  const [orderStatus, setOrderStatus] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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
      setModalMessage('Apenas um(a) chef pode alterar o status de um pedido')
      setOpenModal(true)
    }
  };

  return {
    orders,
    setOrders,
    orderStatus,
    getData,
    ordersFiltered,
    changeStatus,
    modalMessage,
    openModal,
    setOpenModal
  };
};

export default useKitchen;
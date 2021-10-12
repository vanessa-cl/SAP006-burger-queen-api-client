import React, { useState } from "react";
import OrderCard from "./ordercard";
import useKitchen from "../pages/kitchen/useKitchen";
import { updateOrderStatus } from "../services/auth";
import { useEffect } from "react/cjs/react.development";
import fryingpan from "../img/frying-pan.png";

const KitchenArea = () => {
  const { orders, setOrders, getData } = useKitchen();
  const [orderStatus, setOrderStatus] = useState([]);

  useEffect(() => {
    return { orders }
  }, [orders])

  const changeStatus = (elem) => {
    if (elem.status === 'pending') {
      updateOrderStatus('/orders/', elem.id, 'preparando')
        .then(() => setOrderStatus([...orderStatus, { id: elem.id, status: 'preparando' }]))
    } else {
      updateOrderStatus('/orders/', elem.id, 'finalizado')
        .then(() => setOrderStatus([...orderStatus, { id: elem.id, status: 'finalizado' }]))
    }

  }

  const ordersFiltered = () => {
    return orders.filter((item) => item.status === 'pending' || item.status === 'preparando');
  }

  useEffect(() => {
    if (orderStatus.status === 'finalizado') {
      return orderStatus.map((order) => {
        const foundOrder = orders.map((elem) => elem).findIndex((item) => item.id === order.id)
        if (foundOrder !== -1) {
          const removed = orders
          removed.splice(foundOrder, 1)
          setOrders([...removed])
        }
        return orders
      })
    }
  }, [orderStatus, orders, setOrders])

  useEffect(() => {
    return getData();
  }, [orders])

  return (
    <div className='orders-list'>
      {ordersFiltered().map((elem) => {
        const clientProducts = elem.Products;
        const product = clientProducts.map((product) => product)
        return (
          <div key={elem.id}>
            <OrderCard
              processing={process}
              src={fryingpan}
              id={elem.id}
              name={elem.client_name}
              table={elem.table}
              status={elem.status}
              createdAt={elem.createdAt}
              onClick={() => changeStatus(elem)}
              products={product}
            />
          </div>
        )
      }
      )}
    </div>
  )
}
export default KitchenArea;

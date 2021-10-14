import { getOrders } from "./api";
import { useState } from "react";

const GetOrdersData = () => {
  const [orders, setOrders] = useState([]);

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

  return {
    orders,
    setOrders,
    getData,
  };
};

export default GetOrdersData;
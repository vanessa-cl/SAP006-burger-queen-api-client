import { useState, useEffect } from "react";
import { getOrders } from "../../services/auth";

const useKitchen = () => {
  const [orders, setOrders] = useState([]);

  const getData = () => {
    getOrders('/orders')
      .then((data) => sortById(data))
      .then((newData) => setOrders(newData))
  }

  const sortById = (data) => {
    return data.sort((a, b) => {
      return b.id - a.id
    })
  };

  useEffect(() => getData(), []);

  return {
    orders,
    setOrders,
    getData,
  }
}

export default useKitchen;
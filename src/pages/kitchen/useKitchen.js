import { useState, useEffect } from "react";
import { getOrders } from "../../services/auth";

const useKitchen = () => {
  const [orders, setOrders] = useState([]);

  const getData = () => {
    getOrders('/orders')
      .then((data) => setOrders(data))
  }

  useEffect(() => getData(), []);

  return {
    orders,
    setOrders,
    getData,
  }
}

export default useKitchen;
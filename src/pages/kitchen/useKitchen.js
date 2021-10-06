import { useState, useEffect } from "react";
import { getOrders } from "../../services/auth";

const useKitchen = () => {
  const [orders, setOrders] = useState([]);

  const getData = () => {
    getOrders('/orders')
      .then((data) => setOrders(data))
  }

  useEffect(() => {
    return getData();
  }, [])

  return {
    orders,
    setOrders
  }
}

export default useKitchen;
import MenuHamburger from "../../components/menuHamburger/menuHamburger";
import React, { useEffect } from "react";
import OrderCard from "../../components/ordercard/ordercard";
import useKitchen from "./useKitchen";
import fryingpan from "../../img/frying-pan.png";

const Kitchen = () => {
  const { orders, setOrders, orderStatus, getData, ordersFiltered, changeStatus } = useKitchen();
  
  useEffect(() => {
    return getData();
  }, [getData, orders]);

  useEffect(() => {
    if (orderStatus.status === 'finalizado') {
      return orderStatus.map((order) => {
        const foundOrder = orders.map((elem) => elem).findIndex((item) => item.id === order.id);
        if (foundOrder !== -1) {
          const removed = orders
          removed.splice(foundOrder, 1)
          setOrders([...removed])
        }
        return orders;
      })
    }
  }, [orderStatus, orders, setOrders]);

  return (
    <div className='main'>
      <nav className='nav-page'>
        <h1 className='page-labels'>Cozinha</h1>
        <MenuHamburger />
      </nav>
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
    </div>
  );
};

export default Kitchen;
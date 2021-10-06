import MenuHamburger from "../../components/menuHamburger";
import OrdersArea from "../../components/ordersarea";

const Kitchen = () => {
  
  return (
    <div className='main'>
      <nav className='nav-container'>
      <h1 className='kitchen-labels'>Cozinha</h1>
      <MenuHamburger/>
      </nav>
      <OrdersArea/>
    </div>
  );
}

export default Kitchen;
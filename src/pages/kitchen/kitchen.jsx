import MenuHamburger from "../../components/menuHamburger";
import KitchenArea from "../../components/kitchenArea";

const Kitchen = () => {
  return (
    <div className='main'>
      <nav className='nav-page'>
      <h1 className='page-labels'>Cozinha</h1>
      <MenuHamburger/>
      </nav>
      <KitchenArea/>
    </div>
  );
}

export default Kitchen;
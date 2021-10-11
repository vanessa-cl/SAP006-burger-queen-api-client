import { useHistory } from 'react-router';
import React, { useState } from 'react';
import hamburger from '../img/hamburger.png';
import hamburgerfull from '../img/hamburger-full.png';

const MenuHamburger = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const history = useHistory();

  return (
    <nav className='menu-nav' onClick={() => {
      openNavBar === false ?
        setOpenNavBar(true)
        : setOpenNavBar(false);
    }}>
      <img className='menu-icon' src={openNavBar === true ? hamburgerfull : hamburger} alt='menu-hamburguer'></img>
      <div className='nav-links'>
        <button className={
          `nav-item ${openNavBar === true ? ' show-item' : ''}`}
          onClick={() => {
            history.push('/menu');
          }}
        >Menu
        </button>
        <button className={
          `nav-item ${openNavBar === true ? ' show-item' : ''}`}
          onClick={() => {
            history.push('/kitchen');
          }}
        >Cozinha
        </button>
        <button className={
          `nav-item ${openNavBar === true ? ' show-item' : ''}`}
          onClick={() => {
            history.push('/orders');
          }}
        >Finalizados
        </button>
        <button className={
          `nav-item ${openNavBar === true ? ' show-item' : ''}`}
          onClick={() => {
            localStorage.removeItem('token');
            history.push('/');
          }}
        >Logout
        </button>
      </div>
    </nav>
  );
}

export default MenuHamburger;
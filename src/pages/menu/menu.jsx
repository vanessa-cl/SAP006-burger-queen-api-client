import React from "react";
import MenuHamburger from "../../components/menuHamburger";
import ProductInfo from "../../components/productinfo";
import Cart from "../../components/cart";
import ResultPrice from "../../components/resultprice";
import useProducts from "./useProducts";

const Menu = () => {
  const { handleButtonTypeClick, productsFiltered, setAddItem, addItem, total, sendToKitchen, handleOrderChange } = useProducts();
  const initialQtd = 1;


  const addProducts = (elem) => {

    const foundItem = addItem.findIndex((item) => item.id === elem.id);

    if (foundItem !== -1) {
      const newArray = addItem;
      newArray[foundItem].qtd++;
      setAddItem([...newArray])

    } else {
      setAddItem([...addItem, { id: elem.id, qtd: initialQtd, name: elem.name, price: elem.price, flavor: elem.flavor }])

    }



  }

  const deleteProducts = (elem) => {
    const foundItem = addItem.findIndex((item) => item.id === elem.id);
    console.log(addItem[foundItem].qtd)
    if (foundItem !== -1) {
      const qtd = addItem[foundItem].qtd
      if (qtd === 1) {
        const removed = addItem
        removed.splice(foundItem, 1)
        setAddItem([...removed])

      } else {
        const newArray = addItem;
        newArray[foundItem].qtd--;
        setAddItem([...newArray])
      }

    } else {

      setAddItem([...addItem, { id: elem.id, qtd: initialQtd, name: elem.name, price: elem.price, flavor: elem.flavor }])

    }



  }


  return (
    <div className='main'>
      <section className='big-container'>
        <nav className='nav-container'>
          <div className='menu-types'>
            <button className='menu-button' onClick={handleButtonTypeClick} value={'breakfast'}>Café da manhã</button>
            <button className='menu-button' onClick={handleButtonTypeClick} value={'hamburguer'}>Hambúrgueres</button>
            <button className='menu-button' onClick={handleButtonTypeClick} value={'side'}>Acompanhamentos</button>
            <button className='menu-button' onClick={handleButtonTypeClick} value={'drinks'}>Bebidas</button>
          </div>
          <h1 className='menu-title'>Comanda</h1>
          <MenuHamburger />
        </nav>
        <main className='menu-container'>
          <section className='products-list'>
            <div className='list-labels'>
              <label className='list-label'>Produto</label>
              <label className='list-label'>Valor</label>
            </div>
            <section className='list-area' {...productsFiltered}>
              {productsFiltered().map((elem) => {
                return (
                  <ProductInfo
                    key={elem.id}
                    name={elem.name}
                    price={elem.price}
                    qtd={elem.qtd}
                    onClick={() => {
                      addProducts(elem);

                    }}
                    onClickDelete={() => {
                      deleteProducts(elem);
                    }}

                  />
                )
              })}
            </section>
          </section>
          <section className='orders-card'>
            <label className='menu-labels'>Cliente</label>
            <input className='menu-input' type='text' placeholder='Nome' name='name' autoComplete='off' onChange={handleOrderChange} />
            <label className='menu-labels'>Mesa</label>
            <select className='menu-select' autoComplete='off' name='table' onChange={handleOrderChange}>
              <option value=''>Selecione uma mesa</option>
              <option value='1'>Mesa 1</option>
              <option value='2'>Mesa 2</option>
              <option value='3'>Mesa 3</option>
              <option value='4'>Mesa 4</option>
              <option value='5'>Mesa 5</option>
              <option value='6'>Mesa 6</option>
              <option value='7'>Mesa 7</option>
              <option value='8'>Mesa 8</option>
              <option value='9'>Mesa 9</option>
              <option value='10'>Mesa 10</option>
            </select>
            <div className='orders-area'>
              <Cart data={addItem} onClick={addProducts} onClickDelete={deleteProducts} />
              <ResultPrice value={total} />
            </div>
            <button className='menu-button draw' onClick={sendToKitchen}>Finalizar pedido</button>
          </section>
        </main>
      </section>
    </div>
  );
}

export default Menu;
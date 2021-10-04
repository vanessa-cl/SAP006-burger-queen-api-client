import React from "react";
import MenuHamburger from "../../components/menuHamburger";
import ProductInfo from "../../components/productinfo";
import Cart from "../../components/cart";
import ResultPrice from "../../components/resultprice";
import useProducts from "./useProducts";

const Menu = () => {
  const { handleButtonTypeClick, productsFiltered, addItem, total, sendToKitchen, handleOrderChange, addProducts, deleteProducts, selectComplement, selectFlavor, flavor, complement, productsType } = useProducts();

  return (
    <div className='main'>
      <section className='big-container'>
        <nav className='nav-container'>
          <div className='menu-types'>
            <button className='menu-button' onClick={handleButtonTypeClick} value={'breakfast'}>Café da manhã</button>
            <button className='menu-button' onClick={handleButtonTypeClick} value={'hamburguer'}>Hambúrgueres</button>
            <button className='menu-button' onClick={handleButtonTypeClick} value={'side'}>Side</button>
            <button className='menu-button' onClick={handleButtonTypeClick} value={'drinks'}>Bebidas</button>
          </div>
          <MenuHamburger />
        </nav>
        <main className='menu-container'>
          <section className='products-list'>
            <div className='list-labels'>
              <label className='list-label'>Produto</label>
              <label className='list-label'>Sabor</label>
              <label className='list-label'>Acréscimo</label>
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

            {productsType === 'hamburguer' ? (
              <section className='complement-area'>
                <select autoComplete='off' className='select-options' onChange={selectComplement} value={complement}>
                  <option value=''>Adicionar complemento</option>
                  <option value='queijo'>Queijo</option>
                  <option value='ovo'>Ovo</option>
                </select>
                <select autoComplete='off' className='select-options' onChange={selectFlavor} value={flavor}>
                  <option value=''>Selecionar sabor</option>
                  <option value='carne'>Carne</option>
                  <option value='frango'>Frango</option>
                  <option value='vegetariano'>Vegetariano</option>
                </select>
              </section>
            ) : null
            }
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
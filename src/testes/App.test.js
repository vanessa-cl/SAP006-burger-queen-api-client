import MenuHamburger from '../components/menuHamburger/menuHamburger.jsx';
import ShowErrors from '../components/errors/errors.jsx';
import ProductInfo from '../components/productInfo/productinfo.jsx';
import Cart from '../components/cart/cart.jsx';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('Menu Hamburger Component', () => {
  it('deve ter a classe nav-item inicialmente', async () => {
    render(<MenuHamburger />);
    const menuHamburgerItem = await screen.findAllByRole('button');
    menuHamburgerItem.map((button) => {
      return expect(button).toHaveClass('nav-item');
    })
  })

  it('deve adicionar a classe show-item aos botões após clique', async () => {
    render(<MenuHamburger />);
    const menuHamburgerTrigger = screen.getByRole('navigation');
    const menuHamburgerItem = await screen.findAllByRole('button');
    userEvent.click(menuHamburgerTrigger);

    menuHamburgerItem.map((button) => {
      return expect(button).toHaveClass('show-item');
    })
  })

})

const mockErrorMessage = 'error message test'

describe('Error Messages Component', () => {
  it('deve ter a classe errors', () => {
    render(<ShowErrors value={mockErrorMessage} />);

    const errorsText = screen.getByText(mockErrorMessage);
    expect(errorsText).toHaveClass('errors');
  })
})

describe('Product Info Component', () => {
  it('deve receber uma classe via prop', () => {
    const productClass = 'product-class';
    render(<ProductInfo classItem={productClass}/>);

    const articleInfo = screen.getByRole('article');
    expect(articleInfo).toHaveClass(productClass);
  })

  it('deve chamar uma função de click recebida via prop', () => {
    const onClick = jest.fn();
    render(<ProductInfo data={mockData} onClickDelete={onClick}/>);

    userEvent.click(screen.getByAltText('minus'))
    expect(onClick).toHaveBeenCalledTimes(1);    
  })
})

const mockData = [
  {
    id: '51',
    name: 'Batata frita',
    price: '5',
    flavor: null,
    complement: null,
  },
  {
    id: '48',
    name: 'Hambúrguer duplo',
    price: '16',
    flavor: 'frango',
    complement: 'ovo',
  }
]

describe('Cart Component', () => {
  it('as informações dos produtos devem estar visíveis', () => {
    render(<Cart data={mockData}/>);

    const cartArticle = screen.getAllByRole('article');
    cartArticle.map((article) => {
      return expect(article).toBeVisible();
    })
  });
})


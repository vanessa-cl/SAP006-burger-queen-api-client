import Login from '../pages/login/login';
import MenuHamburger from '../components/menuHamburger';
import ShowErrors from '../components/errors';
import ProductInfo from '../components/productinfo';
import Cart from '../components/cart';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('testando classe', () => {
  it('deve ter a classe loginTitle no título', () => {
    render(<Login />);
    const loginTitle = screen.getByText('Login');
    expect(loginTitle).toHaveClass('login-title');
  });
})

describe('Testando botão', () => {
  it('deve ter um botão logar', () => {
    render(<Login />);
    const buttonLogin = screen.getByRole('button');
    expect(buttonLogin).toBeInTheDocument();
  });
})

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

  it('deve retirar a classe show-item', async () => {
    render(<MenuHamburger />);
    const menuHamburgerTrigger = screen.getByRole('navigation');
    const menuHamburgerItem = await screen.findAllByRole('button');
    userEvent.click(menuHamburgerTrigger);

    menuHamburgerItem.map((button) => {
      userEvent.click(button);
      return expect(button).toHaveClass('nav-item');
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
  it('deve ter a classe product-item', () => {
    render(<ProductInfo />);

    const articleInfo = screen.getByRole('article');
    expect(articleInfo).toHaveClass('product-item');
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
  })
})
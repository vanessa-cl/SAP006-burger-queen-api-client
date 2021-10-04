

import Login from '../pages/login/login';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';


describe('testando classe', () => {
  it('deve ter a classe form-title no documento', () => {
    render(<Login/>);
    const loginTitle = screen.getByText('Login');
    expect(loginTitle).toHaveClass('form-title');
   
  });
})


it('deve renderizar um botão com o texto indicado', () => {
  const text = 'Logar'
  render(<button>{text}</button>);
  const btn = screen.getByText(text)
  expect(btn).toBeInTheDocument()
});


it('deve disparar uma função de click recebida via prop', () => {
  const text = 'Logar'
  const onClick = jest.fn();
  render(<button onClick={onClick}>{text}</button>);

  expect(onClick).toHaveBeenCalledTimes(0);
  user.click(screen.getByText(text))
  expect(onClick).toHaveBeenCalledTimes(1);
});


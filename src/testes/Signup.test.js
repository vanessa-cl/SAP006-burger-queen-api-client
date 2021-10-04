

import SignUp from '../pages/signup/signup';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';


describe('testando classe', () => {
  it('deve ter a classe form-title no documento', () => {
    render(<SignUp/>);
    const signupTitle = screen.getByText('Seu nome');
    expect(signupTitle).toHaveClass('form-labels');
   
  });
})


it('deve renderizar um botão com o texto indicado', () => {
  const text = 'Cadastrar'
  render(<button>{text}</button>);
  const btn = screen.getByText(text)
  expect(btn).toBeInTheDocument()
});


it('deve disparar uma função de click recebida via prop', () => {
  const text = 'Cadastrar'
  const onClick = jest.fn();
  render(<button onClick={onClick}>{text}</button>);

  expect(onClick).toHaveBeenCalledTimes(0);
  user.click(screen.getByText(text))
  expect(onClick).toHaveBeenCalledTimes(1);
});

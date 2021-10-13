import React from 'react';
import { useHistory } from 'react-router-dom'
import useFormLogin from './useFormLogin';
import ShowErrors from '../../components/errors/errors';

const Login = () => {
  const { handleChange, handleSubmit, errors } = useFormLogin();
  const history = useHistory();

  return (
    <div className='main'>
      <form className='login-page' onSubmit={handleSubmit}>
        <h2 className='form-title'>Login</h2>
        <label className='form-labels'>Email</label>
        <input className='form-input' type='email' name='email' placeholder='username@example.com' autoComplete='off' onChange={handleChange} />
        <label className='form-labels'>Senha</label>
        <input className='form-input' type='password' name='password' placeholder='Senha' onChange={handleChange} />
        <span className='errors-message'>
          <ShowErrors value={errors} />
        </span>
        <button className='form-button draw' type='submit'>Logar</button>
        <p className='new-user'>Não possui cadastro?</p>
        <button className='form-button draw' onClick={() => { history.push('/signup') }}>Cadastre-se</button>
      </form>
    </div>
  );
};

export default Login;
import { useHistory } from 'react-router-dom';
import jack from '../../img/jack.png';
import fcb from '../../img/fcb.png';
import tyler from '../../img/tyler.png';
import duo from '../../img/duo.png';

const Home = () => {
  const history = useHistory();
  return (
    <main className='main'>
      <header className='logo-field'>
        <img src={fcb} className='logo' alt='fight-club' />
      </header>
      <section className='card-container'>
        <button className='cards' onClick={() => { history.push('/login') }}>
          <img src={jack} className='card-photo' alt='jack' />
          <p className='card-name'>Menu</p>
        </button>
        <button className='cards' onClick={() => { history.push('/login') }}>
          <img src={tyler} className='card-photo' alt='tyler' />
          <p className='card-name'>Cozinha</p>
        </button>
        <button className='cards' onClick={() => { history.push('/signup') }}>
          <img src={duo} className='card-photo' alt='tyler and jack' />
          <p className='card-name'>Cadastro</p>
        </button>
      </section>
    </main>
  );
}

export default Home;
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css';
import Logo from '../../assets/BreakingCode.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className='menu-toggle' onClick={toggleMenu}>
        {isOpen ? (
          // Ícono de "X"
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <line
              x1='6'
              y1='6'
              x2='22'
              y2='22'
              stroke='#fff'
              strokeWidth='3'
              strokeLinecap='round'
            />
            <line
              x1='22'
              y1='6'
              x2='6'
              y2='22'
              stroke='#fff'
              strokeWidth='3'
              strokeLinecap='round'
            />
          </svg>
        ) : (
          // Ícono de menú
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect y='5' width='28' height='3' rx='1.5' fill='#fff' />
            <rect y='12.5' width='28' height='3' rx='1.5' fill='#fff' />
            <rect y='20' width='28' height='3' rx='1.5' fill='#fff' />
          </svg>
        )}
      </button>
      <div className='logo-container'>
        <img src={Logo} alt='Logo del grupo' className='logo' />
      </div>
      <nav className='nav-menu'>
        <ul>
          {/* <li>
            <Link to='/'>Presentación</Link>
          </li> */}
          <li>
            <Link to='/team'>Equipo</Link>
          </li>
          <li>
            <Link to='/data'>Datos JSON</Link>
          </li>
          <li>
            <Link to='/api'>API</Link>
          </li>
          <li>
            <Link to='/bitacora'>Bitácora</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

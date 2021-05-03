import React from 'react';
import { Link } from 'react-router-dom';
import logoMarvel from './marvel-logo.png';

import './Header.css';

function Header() {
  return (
    <header className='m-header'>
      <nav className='m-nav'>
        <div>
          <Link to='/'>
            <img src={logoMarvel} alt='logo marvel' />
          </Link>
        </div>
        <span>
          <Link to='/caracters'>Characters</Link>
        </span>
        <span>
          <Link to='/comics'>| Comics |</Link>
        </span>
        <span>
          <Link to='/favorites'>Favoritos</Link>
        </span>
      </nav>
    </header>
  );
}

export default Header;

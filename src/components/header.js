import React from 'react';
import './header.css';
//import logo from './logo.jpg';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="logo" />
      </div>
      <h1 className="header__title">DCC Movie Reviews</h1>
    </header>
  );
}

export default Header;
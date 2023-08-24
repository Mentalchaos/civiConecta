import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        CIVI <span className="blinkingAnimation">Admin</span>
      </h1>
    </header>
  );
};

export default Header;

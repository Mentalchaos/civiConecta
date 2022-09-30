import React from 'react';
import './Header.css';
import Notification from './Notification/Notification';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        CIVI <span>admin</span>
      </h1>
      <Notification />
    </header>
  );
};

export default Header;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import burgerMenu from 'src/assets/Icons/burger-menu.svg';
import burgerMenuLogo from 'src/assets/Icons/burger-menu-logo.svg';
import civiIcon from 'src/assets/images/civiconecta-logo.svg';
import questionIcon from 'src/assets/Icons/question-icon.svg';
import notificationIcon from 'src/assets/Icons/notification.svg';
import docente from 'src/assets/Icons/menu-docente.svg';
import arrowRight from 'src/assets/Icons/arrow-right.svg';
import { getUserData } from 'src/utils/user';

import './PublicHeader.css';

const MobileHeader = ({handleLogout}) => {
  const navigate = useNavigate();
  const currentUser = getUserData();

  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuContainerStyle = {
    height: menuOpen ? '100vh' : '70px',
    overflow: 'hidden',
    transition: 'height 0.3s ease-in-out',
    backgroundColor: 'rgb(250 250 250 / 90%)'
  };

  return (
    <div>
      <div className='mobile-menu-container' style={menuContainerStyle}>
        <div className='mobile-menu-header'>
          <img
            className={`mobile-menu-burger ${menuOpen ? 'burger-menu-active' : ''}`}
            src={burgerMenu}
            alt="burger-menu"
            onClick={toggleMenu}
          />
          {menuOpen ? (
            <img
              className='mobile-menu-logo'
              src={burgerMenuLogo}
              alt='mobile-menu-logo'
              onClick={() => navigate('/public/')}
            />
          ) : (
            <img
              className='civi'
              src={civiIcon}
              alt='civi-icon'
              onClick={() => navigate('/public/')}
            />
          )}
          {menuOpen ? (
            <button
              className='close-menu'
              onClick={toggleMenu}
            >
              X
            </button>
          ) : (
            <div className='mobile-session-info'>
              <p className='session-info' onClick={handleLogout}>
                Cerrar Sesión
              </p>
              <img className='arrow-right' src={arrowRight} alt='arrow-right-icon' />
            </div>
          )}
        </div>
        {menuOpen && (
          <div className='mobile-menu-options'>
            <div className='option'>
              <img onClick={() => { navigate('/public/professor-profile'); closeMenu(); }} className="menu-docente" src={docente} alt="docente-icon" />
              <p onClick={() => { navigate('/public/professor-profile'); closeMenu(); }} className="teacher-name">{currentUser.name}</p>
            </div>
            <div className='option'>
              <img className="notification-icon" src={notificationIcon} alt="notification-icon" />
              <p>Notificaciones</p>
            </div>
            <div className='option'>
              <img className="question-icon" src={questionIcon} alt="question-icon" />
              <p>Ayuda</p>
            </div>
            <div className='option'>
              <p className='session-info' onClick={handleLogout}>
                Cerrar Sesión
              </p>
              <img className='arrow-right' src={arrowRight} alt='arrow-right-icon' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


export default MobileHeader;
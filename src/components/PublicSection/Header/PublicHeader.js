import { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Visible from 'src/components/UI/Visible';
import civiIcon from 'src/assets/images/civiconecta-logo.svg';
import questionIcon from 'src/assets/Icons/question-icon.svg';
import notificationIcon from 'src/assets/Icons/notification.svg';
import docente from 'src/assets/Icons/menu-docente.svg';
import arrowRight from 'src/assets/Icons/arrow-right.svg';
import MobileHeader from './MobileHeader';
import { getUserData, clearUserData } from 'src/utils/user';

import './PublicHeader.css';

const PublicHeader = () => {
  const navigate = useNavigate();
  const currentUser = getUserData();
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const handleLogout = () => {
    clearUserData();
    navigate('/auth/login');
  };

  const updateMobileMenuVisibility = () => {
    setIsMobileMenuVisible(window.innerWidth >= 320 && window.innerWidth <= 1024);
  };

  useEffect(() => {
    updateMobileMenuVisibility();
    window.addEventListener('resize', updateMobileMenuVisibility);
    return () => window.removeEventListener('resize', updateMobileMenuVisibility);
  }, []);

  return (
    <div className='public-container'>
      {isMobileMenuVisible && <MobileHeader handleLogout={handleLogout} />}
      <div className="container">
        <div className="public-header-container">
          <div className="logo-container">
            <img onClick={() => navigate('/public/')} className="civi" src={civiIcon} alt="civi-icon" />
          </div>
          <div className="public-header-container-two">
            <div className="logos-container">
              <img className="question-icon" src={questionIcon} alt="question-icon" onClick={() => navigate('/public/faq')} />
              <img className="notification-icon" src={notificationIcon} alt="notification-icon" />
            </div>
            <div className="docente-info-container">
              <Visible condition={currentUser}>
                <Fragment>
                  <p onClick={() => navigate('/public/professor-profile')} className="teacher-name">{currentUser.name}</p>
                  <img onClick={() => navigate('/public/professor-profile')} className="menu-docente" src={docente} alt="docente-icon" />
                </Fragment>
              </Visible>
            </div>
            <div className="sesion-container">
              <Visible condition={currentUser}>
                <Fragment>
                  <p className="session-info" onClick={handleLogout}>
                    Cerrar Sesión
                  </p>
                  <img className="arrow-right" src={arrowRight} alt="arrow-right-icon" />
                </Fragment>
              </Visible>
              <Visible condition={!currentUser}>
                <p onClick={() => navigate('/auth/login')} className="session-info">
                  Iniciar sesion
                </p>
              </Visible>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublicHeader;

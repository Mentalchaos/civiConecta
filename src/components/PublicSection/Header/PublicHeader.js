import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Visible from 'src/components/UI/Visible';
import civiIcon from 'src/assets/Icons/CiviConecta.svg';
import questionIcon from 'src/assets/Icons/question-icon.svg';
import notificationIcon from 'src/assets/Icons/notification.svg';
import docente from 'src/assets/Icons/menu-docente.svg';
import arrowRight from 'src/assets/Icons/arrow-right.svg';
import { getUserData, clearUserData } from 'src/utils/user';

import './PublicHeader.css';

const PublicHeader = () => {
  const navigate = useNavigate();
  const currentUser = getUserData();

  const handleLogout = () => {
    clearUserData();
    navigate('/auth/login');
  };

  return (
    <div className="container">
      <div className="public-header-container">
        <div className="logo-container">
          <img onClick={() => navigate('/public/')} className="civi" src={civiIcon} alt="civi-icon" />
        </div>
        <div className="public-header-container-two">
          <div className="logos-container">
            <img className="question-icon" src={questionIcon} alt="question-icon" />
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
                <p
                  onClick={handleLogout}
                  className="session-info"
                >
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
  );
};
export default PublicHeader;

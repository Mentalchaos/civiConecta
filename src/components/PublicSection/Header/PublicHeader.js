import { useNavigate } from 'react-router-dom';
import civiIcon from 'src/assets/Icons/CiviConecta.svg';
import questionIcon from 'src/assets/Icons/question-icon.svg';
import notificationIcon from 'src/assets/Icons/notification.svg';
import docente from 'src/assets/Icons/menu-docente.svg';
import arrowRight from 'src/assets/Icons/arrow-right.svg';
import cookie from 'src/utils/cookie';

import './PublicHeader.css';

const PublicHeader = () => {
  const navigate = useNavigate();
  const dataCookies = cookie.getCookie('token');
  const currentUser = dataCookies !== undefined && JSON.parse(dataCookies);

  return (
    <div className="container">
      <div className="public-header-container">
        <div className="logo-container">
          <img className="civi" src={civiIcon} alt="civi-icon" />
        </div>
        <div className="logos-container">
          <img className="question-icon" src={questionIcon} alt="question-icon" />
          <img className="notification-icon" src={notificationIcon} alt="notification-icon" />
        </div>
        <div className="docente-info-container">
          {currentUser && (
            <>
              <p className="teacher-name">{currentUser.name}</p>
              <img onClick={() => navigate('/public/professor-survey')} className="menu-docente" src={docente} alt="docente-icon" />
            </>
          )}
        </div>
        <div className="sesion-container">
          {currentUser.name ? (
            <>
              <p
                onClick={() => {
                  cookie.removeCookie('token');
                  navigate('/auth/login');
                }}
                className="session-info"
              >
                Cerrar Sesión
              </p>
              <img className="arrow-right" src={arrowRight} alt="arrow-right-icon" />
            </>
          ) : (
            <p onClick={() => navigate('/auth/login')} className="session-info">
              Iniciar sesion
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default PublicHeader;

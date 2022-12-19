import civiIcon from 'src/assets/Icons/CiviConecta.svg';
import questionIcon from 'src/assets/Icons/question-icon.svg';
import notificationIcon from 'src/assets/Icons/notification.svg';
import docente from 'src/assets/Icons/menu-docente.svg';
import arrowRight from 'src/assets/Icons/arrow-right.svg';

import './PublicHeader.css';

const PublicHeader = () => {
    return (
        <div className='container'>
            <div className='public-header-container'>
                <div className='logo-container'>
                    <img className='civi' src={civiIcon} alt="civi-icon" />
                </div>
                <div className='logos-container'>
                    <img className='question-icon' src={questionIcon} alt="question-icon" />
                    <img className='notification-icon' src={notificationIcon} alt="notification-icon" />
                </div>
                <div className='docente-info-container'>
                    <p className='teacher-name'>Catalina Acevedo Setz</p>
                    <img className='menu-docente' src={docente} alt="docente-icon" />
                </div>
                <div className='sesion-container'>
                    <p className='session-info'>Cerrar Sesión</p>
                    <img className='arrow-right' src={arrowRight} alt="arrow-right-icon" />
                </div>
            </div>
        </div>
    )
}
export default PublicHeader;
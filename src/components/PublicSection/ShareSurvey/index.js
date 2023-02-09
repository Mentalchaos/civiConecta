import { useNavigate } from 'react-router-dom';
import PublicFooter from '../Footer/PublicFooter';
import back from 'src/assets/Icons/back.svg';
import unitLogo from 'src/assets/Icons/unit-section-red.svg';
import link from 'src/assets/Icons/button-enlace.svg';
import './ShareSurvey.css';

const ShareSurvey = () => {
  const navigate = useNavigate();
  return (
    <div className="share-survey-container">
      <div className="back-container">
        <p onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img src={back} alt="back-arrow-icon" />
          Volver
        </p>
      </div>
      <div className="share-container">
        <div className="share-container-title">
          <img src={unitLogo} alt="unit-logo" />
          <p>Compartir encuesta con estudiantes</p>
        </div>
        <div className="share-container-description">
          <p>
            Recuerda compartir el enlace de la encuesta con tus estudiantes, sus respuestas son esenciales para
            completar el proceso de personalización de las planificaciones
          </p>
          <p>
            Puedes revisar el avance de tus estudiantes haciendo click en el botón “Estado de encuesta” en tu página de
            inicio o en tu perfil de usuario.
          </p>
        </div>
        <div className="share-container-alert">
          <div className="alert-icon">
            <p>!</p>
          </div>
          <p>Solo estudiantes en la nómina del curso podrán acceder a la encuesta.</p>
        </div>
        <div className="share-container-link">
          <p>Enlace generado</p>
          <input></input>
        </div>
        <div className="share-container-button">
          <button className="link-icon-button">
            <img className="link-icon-img" src={link} alt="link-icon" />
            Copiar enlace
          </button>
        </div>
      </div>
      <PublicFooter />
    </div>
  );
};

export default ShareSurvey;

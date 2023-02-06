import icon from 'src/assets/Icons/survey-link-icon.svg';
import './SurveyLink.css';

const SurveyLink = () => {
  return (
    <div className="link-container">
      <div className="survey-link-container">
        <div className="first-container-link">
          <img src={icon} alt="link-icon" />
          <p>¿Necesitas el enlace de la encuesta de tus estudiantes nuevamente?</p>
        </div>
        <div className="second-container-link">
          <button>
            <a href="public/share-survey">Ver enlace encuesta</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyLink;

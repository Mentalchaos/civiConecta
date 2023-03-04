import civiIcon from 'src/assets/Icons/CiviConecta.svg';
import tooltip from 'src/assets/Icons/survey-tooltip-icon.svg';
import './StudentsHeader.css';

const StudentsHeader = () => {
  return (
    <div className="container">
      <div className="public-header-container">
        <div className="logo-container">
          <img className="civi" src={civiIcon} alt="civi-icon" />
        </div>
        <div className='tooltip-container'>
          <p>¿Por qué veo esto?</p>
          <img src={tooltip} alt="tooltip" />
          <span className='tooltip-text'>
            Tu profesor o profesora jefe requiere conocer más del
            curso, para ello contesta la siguiente encuesta acerca
            de tus intereses y necesidades.
          </span>
        </div>
      </div>
    </div>
  );
};
export default StudentsHeader;

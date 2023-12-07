import React from 'react';
import planificationSurvey from 'src/assets/images/planification-survey.png';
import arrowRight from 'src/assets/Icons/arrow-right.svg';
import './PlanificationType.css';

const PlanificationTypeMobile = () => {
  const divStyle = {
    backgroundImage: `url(${planificationSurvey})`,
    backgroundSize: '150%',
    backgroundPosition: '67%',
    width: '90vw',
    height: '120px',
    borderRadius: '10px',
    margin: 'auto',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  };

  return (
    <div className='planification-mobile' style={divStyle}>
      <div>
        <p>Contesta la encuesta docente</p>
      </div>
      <div>
        <button>
          Ir a la encuesta
          <img src={arrowRight} className='button-arrow' />
        </button>
      </div>
    </div>
  );
}

export default PlanificationTypeMobile;

import React from 'react';
import planificationSurvey from 'src/assets/images/planification-survey.png';
import arrowRight from 'src/assets/Icons/arrow-right.svg';
import './PlanificationType.css';

const PlanificationTypeMobile = ({ planificationProps }) => {
  const {title, textButton, onClick, img} = planificationProps;

  const divStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: '150%',
    backgroundPosition: '67%',
    width: '90vw',
    height: '120px',
    borderRadius: '10px',
    margin: 'auto',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: '2em'
  };

  return (
    <div className='planification-mobile' style={divStyle}>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <button onClick={onClick}>
          {textButton}
          <img src={arrowRight} className='button-arrow' />
        </button>
      </div>
    </div>
  );
}

export default PlanificationTypeMobile;

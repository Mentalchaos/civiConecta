import React from 'react';
import planificationSurvey from 'src/assets/images/planification-survey.png';
import arrowRight from 'src/assets/Icons/arrow-right.svg';
import './PlanificationType.css';

const PlanificationTypeMobile = ({ planificationProps }) => {
  const {title, textButton, onClick, img, colorTextBtn, colorTitle, imageFilter } = planificationProps;

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
    marginBottom: '2em',
    color: `${colorTextBtn}`,
    fontSize: '12px'
  };

  const titleStyle = {
    color: `${colorTitle}`,
    fontSize: '16px',
    width: '70%'
  };

  const iconFilter = {
    filter: `${imageFilter}`
  }

  return (
    <div className='planification-mobile' style={divStyle}>
      <div>
        <p style={titleStyle}>{title}</p>
      </div>
      <div>
        <button onClick={onClick} style={{borderRadius:'5px'}}>
          {textButton}
          <img style={iconFilter} src={arrowRight} className='button-arrow' />
        </button>
      </div>
    </div>
  );
}

export default PlanificationTypeMobile;

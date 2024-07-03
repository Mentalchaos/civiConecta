import React, { useEffect, useState } from 'react';
import customIcon from 'src/assets/Icons/custom-icon.svg';
import standarIcon from 'src/assets/Icons/standar-icon.svg';
import right from 'src/assets/images/right-red.svg';
import './ChangePlanificationButton.css';

const ChangePlanificationButton = ({ actions, setters, planificationType }) => {
  const planningText = {
    estandar: "Revisar planificación estandarizada",
    custom: "Revisar planificación personalizada"
  };

  const planningIcon = planificationType === 'custom' ? customIcon : standarIcon;
  const mainText = planificationType === 'custom' ? planningText['custom'] : planningText['estandar'];
  const mainTextColor = planificationType === 'custom' ? 'color-custom' : 'color-black';
  const arrowColor = planificationType === 'custom' ? 'color-icon-custom' : 'color-icon-standar';
  const buttonColor = planificationType === 'custom' ? 'custom-button-background' : 'standar-button-background';
  const descriptionText = planificationType === 'custom' ? 'custom-description' : 'standar-description';

  const [background, setBackground] = useState(planificationType === 'custom' ? 'background-custom-desktop' : 'background-standar-desktop');

  const changePlanningAndReorder = () => {
    if (planificationType === 'custom') {
      setters.setPlanificationType('estandar');
    } else {
      setters.setPlanificationType('custom');
    }
    actions.reorderUnits();
  };

  useEffect(() => {
    const updateBackground = () => {
      if (window.matchMedia('(min-width: 320px) and (max-width: 620px)').matches) {
        setBackground(planificationType === 'custom' ? 'background-custom-mobile' : 'background-standar-mobile');
      } else {
        setBackground(planificationType === 'custom' ? 'background-custom-desktop' : 'background-standar-desktop');
      }
    };

    updateBackground();

    window.addEventListener('resize', updateBackground);
    return () => window.removeEventListener('resize', updateBackground);
  }, [planificationType]);

  return (
    <div className='link-container'>
      <div className={`survey-link-container ${background}`}>
        <div className="first-container-link container-width">
          <img src={planningIcon} alt="link-icon" />
          <p className={descriptionText} style={{ display: 'flex', alignItems: 'center' }}>{mainText}</p>
        </div>
        <div onClick={changePlanningAndReorder} className='second-container-link'>
          <button className={`survey-button ${buttonColor}`}>
            <a className={mainTextColor}>Ver planificación</a>
            <img className={arrowColor} src={right} alt="right-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

ChangePlanificationButton.displayName = 'ChangePlanificationButton';

export default ChangePlanificationButton;


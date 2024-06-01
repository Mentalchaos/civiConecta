import icon from 'src/assets/Icons/survey-link-orange-icon.svg';
import iconBlack from 'src/assets/Icons/survey-link-black.svg';
import right from 'src/assets/images/right-red.svg';
import './ChangePlanificationButton.css';

const ChangePlanificationButton = ({ actions, setters, planificationType }) => {
  const planningText = {
    estandar: "Revisar planificación estandarizada",
    custom: "Revisar planificación personalizada"
  }

  const planningIcon = planificationType == 'custom' ? icon : iconBlack;
  const mainText = planificationType == 'custom' ? planningText['estandar'] : planningText['custom'];
  const background = planificationType == 'custom' ? 'background-red' : 'background-gray';
  const mainTextColor = planificationType == 'custom' ? 'color-red' : 'color-black';
  const arrowColor = planificationType == 'custom' ? 'color-icon-pink' : 'text-black';

  const changePlanningAndReorder = () => {
    if(planificationType == 'custom'){
      setters.setPlanificationType('estandar');
    } else {
      setters.setPlanificationType('custom');
    }
    actions.reorderUnits();
  }

  return (
    <div className='link-container'>
      <div className={`survey-link-container ${background}`}>
        <div className="first-container-link container-width">
          <img src={planningIcon} alt="link-icon" />
          <p style={{display: 'flex', alignItems: 'center'}}>{mainText}</p>
        </div>
        <div onClick={changePlanningAndReorder} className='second-container-link'>
          <button className='survey-button'>
            <a className={mainTextColor}>Ver planificación</a>
            <img className={arrowColor} src={right} alt="right-arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

ChangePlanificationButton.displayName = 'ChangePlanificationButton';

export default ChangePlanificationButton;

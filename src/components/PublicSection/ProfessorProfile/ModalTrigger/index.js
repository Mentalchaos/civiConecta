import right from 'src/assets/Icons/thin-right.svg';
import finishImage from 'src/assets/images/finish-survey.png';
import icon from 'src/assets/Icons/survey-link-icon-mobile.svg'

import './ModalTrigger.css';

const ModalTrigger = ({ onClick, img, text1, text2, buttonText, colorButton, colorIcon }) => {
  return (
    <div className='modal-trigger-container'>
      <div className='mobile-modal-title'>
        <img src={icon}/>
        <p>Encuesta estudiantes</p>
      </div>
      <div className='modal-trigger'>
        <img className='modal-trigger-image' src={img} alt='finish-image' />
        <p>{text1}</p>
        <p>{text2}</p>
        <button className={colorButton} onClick={onClick}>
          {buttonText}
          <img className={colorIcon} src={right} alt='right-icon' />
        </button>
      </div>
    </div>
  )
}

export default ModalTrigger;
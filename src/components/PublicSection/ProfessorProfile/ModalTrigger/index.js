import right from 'src/assets/Icons/thin-right.svg';
import finishImage from 'src/assets/images/finish-survey.png';

import './ModalTrigger.css';

const ModalTrigger = ({onClick, img, title, buttonText }) => {
  return (
    <div className='modal-trigger-container'>
      <div className='modal-trigger'>
        <img className='modal-trigger-image' src={img} alt='finish-image'/>
        <p>{title}</p>
        <button onClick={onClick}>
          {buttonText}
          <img src={right} alt='right-icon'/>
        </button>
      </div>
    </div>
  )
}

export default ModalTrigger;
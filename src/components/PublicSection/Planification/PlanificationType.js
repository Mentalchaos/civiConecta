import right from 'src/assets/images/right-red.svg';
import './PlanificationType.css';

const PlanificationType = ({ title, textButton, img, colorTextBtn, colorIconRight, onClick }) => {
  return (
    <div className='planification-type-container' >
      <div className='planification-image'>
        <img className='teacher-image' src={img} alt='planification' />
      </div>
      <div className='button-and-text'>
        <div className='planification-text'>
          <p>
            {title}
          </p>
        </div>
        <button onClick={onClick} className={`planification-button ${colorTextBtn}`} >
          {textButton}
          <img className={colorIconRight} src={right} alt='right' />
        </button>
      </div>
    </div>
  )
};

PlanificationType.defaultProps = {
  colorIconRight: 'color-icon-pink',
  colorTextBtn: 'pink'
}

export default PlanificationType;

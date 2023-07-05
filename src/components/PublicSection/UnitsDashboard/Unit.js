import './Unit.css';
import brain from '../../../assets/Icons/white-brain.svg';
import unitGreen from '../../../assets/Icons/unit-green.svg';

const Unit = ({ number, title, description, objective }) => {
  let newNumber;

  switch (number) {
    case 1:
      newNumber = 'I';
      break;
    case 2:
      newNumber = 'II';
      break;
    case 3:
      newNumber = 'III';
      break;
    case 4:
      newNumber = 'IV';
      break;
    case 5:
      newNumber = 'V';
      break;
    default:
      break;
  }

  const unitNumber = newNumber ? `Unidad ${newNumber}:` : '-';

  return (
    <div className="unit">
      <div className='unit-content'>
        <div className='unit-header'>
          <img className='unit-img' src={brain} alt='logo-brain'></img>
          <div className='unit-header-text'>
            <p className='text'>{unitNumber}</p>
            <p className='text'>{ title || '-' }</p>
          </div>
        </div>
        <div className='unit-info'>
          <div className='unit-desc'>
            <img src={unitGreen} className='unit-desc-svg' alt='' />
            <div className='info'>
              <div className='info-title'>Descripción de la unidad:</div>
              <div className='info-text'>{ description || '-' }</div>
            </div>
          </div>
          <div className='unit-desc'>
            <img src={unitGreen} className='unit-desc-svg' alt='logo-unit-green' />
            <div className='info'>
              <div className='info-title'>Objetivo de la unidad</div>
              <div className='info-text'>{objective || '-'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Unit;

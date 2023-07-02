import './Unit.css';
import brain from '../../../assets/Icons/white-brain.svg';
import unitGreen from '../../../assets/Icons/unit-green.svg';

const Unit = ({ number, title, description }) => {
  let newNumber;

  switch (number) {
    case 1:
      console.log('pasando por aca');
      newNumber = 'I';
    case 2:
      newNumber = 'II';
    case 3:
      newNumber = 'III';
    case 4:
      newNumber = 'IV';
    case 5:
      newNumber = 'V';
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
              <div className='info-text'>Distinguir y describir emociones y reconocer y practicar formas apropiadas de expresarlas, considerando el posible impacto en sí mismo y en otros</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Unit;

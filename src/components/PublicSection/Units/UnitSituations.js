import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import emergent from 'src/assets/images/emergent.jpg';
import ephemeries from 'src/assets/images/calendar-emergent.png';
import goTo from 'src/assets/Icons/open-arrow.svg';
import './UnitSituations.css';

const UnitSituations = ({ title, to }) => {
  const navigate = useNavigate();
  const img = title === "Situaciones emergentes" ? emergent : ephemeries;

  return (
    <div className='unit-situations-container'>
      <div className='unit-situations-one'>
        <div className='unit-title'>
          <p>{title}</p>
        </div>
        <div className='unit-subtitle' onClick={() => navigate(to)}>
          <p>Ir a los contenidos</p>
          <img src={goTo} alt="arrow-icon" />
        </div>
      </div>
      <div className='unit-situations-two'>
        <img className='unit-img-emergent' src={img} alt="emergent-situation" />
      </div>
    </div>
  )
};

UnitSituations.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string
}

UnitSituations.displayName = 'UnitSituations';

export default UnitSituations;

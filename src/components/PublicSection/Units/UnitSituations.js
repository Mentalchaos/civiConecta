import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import emergentStandard from 'src/assets/images/gray-situations-banner.png';
import emergentCustom from 'src/assets/images/green-situations-banner.png';
import ephemerisStandard from 'src/assets/images/gray-ephemeris-banner.png';
import ephemerisCustom from 'src/assets/images/ephemeris-custom-banner.png';
import goTo from 'src/assets/Icons/open-arrow.svg';
import './UnitSituations.css';

const UnitSituations = ({ title, to, planificationType }) => {
  const navigate = useNavigate();

  let img;
  if (title === "Situaciones emergentes") {
    img = planificationType === "estandar" ? emergentStandard : emergentCustom;
  } else if (title === "Efemerides") {
    img = planificationType === "estandar" ? ephemerisStandard : ephemerisCustom;
  }

  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const borderClass = planificationType === "estandar" ? 'border-standard' : 'border-custom';

  const additionalStyle = {};
  if (planificationType === "custom") {
    if (title === "Situaciones emergentes") {
      additionalStyle.borderColor = '#2dba9f';
      additionalStyle.color = '#2dba9f';
      additionalStyle.imageFilter = 'invert(54%) sepia(92%) saturate(326%) hue-rotate(119deg) brightness(94%) contrast(89%)';
    } else if (title === "Efemerides") {
      additionalStyle.borderColor = '#5ac1ed';
      additionalStyle.color = '#5ac1ed';
      additionalStyle.imageFilter = 'invert(68%) sepia(77%) saturate(612%) hue-rotate(168deg) brightness(96%) contrast(93%)';
    }
  }

  return (
    <div className={`unit-situations-container ${borderClass}`} style={{ ...backgroundStyle, borderColor: additionalStyle.borderColor }}>
      <div className='unit-situations-one'>
        <div className='unit-title'>
          <p style={{ color: additionalStyle.color }}>{title}</p>
        </div>
        <div className='unit-subtitle' onClick={() => navigate(to)}>
          <p style={{ color: additionalStyle.color }}>Ir a los contenidos</p>
          <img style={{filter: additionalStyle.imageFilter}} src={goTo} alt="arrow-icon" />
        </div>
      </div>
    </div>
  );
};

UnitSituations.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  planificationType: PropTypes.string
};

UnitSituations.displayName = 'UnitSituations';

export default UnitSituations;

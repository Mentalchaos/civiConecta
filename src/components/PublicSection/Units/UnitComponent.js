import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import unitLogo from 'src/assets/Icons/unit-purple.svg';
import unitLogoGreen from 'src/assets/Icons/unit-green.svg';
import unitLogoPink from 'src/assets/Icons/unit-pink.svg';
import brain from 'src/assets/Icons/heart-brain.svg';
import brainPink from 'src/assets/Icons/heart-brain-pink.svg';
import brainGreen from 'src/assets/Icons/heart-brain-green.svg';
import goTo from 'src/assets/Icons/open-arrow.svg';
import './UnitComponent.css';

const STATUS_TYPES = ['Pendiente', 'En desarrollo', 'Completada'];

const UnitComponent = ({ id, status, title, description, color, borderColor, number, handleTextUnits, updateStatus, uuid, planificationType }) => {
  const navigate = useNavigate();
  const setStatusText = () => STATUS_TYPES[status] || '-';
  const [statusType, setStatusType] = useState(setStatusText());

  const toggleStatus = () => {
    const currentIndex = STATUS_TYPES.indexOf(statusType);
    const nextIndex = (currentIndex + 1) % STATUS_TYPES.length;
    setStatusType(STATUS_TYPES[nextIndex]);
  }

  const onClickStatus = async () => {
    toggleStatus();
    await updateStatus(id, uuid);
  }

  const colors = {
    'Completada': {
      color: '#93c776',
      imageBrain: brainGreen,
      imageHat: unitLogoGreen
    },
    'En desarrollo': {
      color: '#7468e2',
      imageBrain: brain,
      imageHat: unitLogo
    },
    'Pendiente': {
      color: '#ea5f7b',
      imageBrain: brainPink,
      imageHat: unitLogoPink
    },
    'Estandar': {
      color: 'black',
      imageBrain: brain,
      imageHat: unitLogo,
      subColor: '#7468e5'
    }
  }

  const borderColor2 = planificationType == 'estandar' ? colors['Estandar'].color : colors[statusType].color;
  const borderColor3 = planificationType == 'estandar' ? colors['Estandar'].subColor : colors[statusType].color;

  const truncateDescription = (description, maxLength = 70) =>
    description.length > maxLength
      ? `${description.substring(0, maxLength)}...`
      : description;

  return (
    <div className={`unit-component-container ${color}`} style={{ border: `1.4px solid ${borderColor2}` }}>
      <div className='unit-component-title'>
        <div className='unit-number-cont'>
          <img src={planificationType == 'estandar' ?  colors['Estandar'].imageHat : colors[statusType].imageHat} alt='unit-logo' />
          <p className='mobile-unit'>Unidad {number} </p>
        </div>
        <div className='unit-second-container' onClick={onClickStatus}>
          <p onClick={handleTextUnits}>{statusType}</p>
          <img src={ planificationType == 'estandar' ? colors['Estandar'].imageBrain : colors[statusType].imageBrain} alt='brain-logo' className='unit-brain' />
        </div>
      </div>
      <div className='component-info'>
        <p className='component-title'>Unidad {number} </p>
        <p className={`component-subtitle ${borderColor2}`} style={{ color: borderColor3 }}>{title}</p>
        <p className='component-description'>{truncateDescription(description)}</p>
      </div>
      <div onClick={() => navigate(`/public/units-dashboard/${id}`)} className='go-to-unit'>
        <p onClick={() => handleTextUnits()} className='goto'>Ir a la unidad</p>
        <img src={goTo} alt="arrow-icon" className='unit-arrow' />
      </div>
    </div>
  )
}

UnitComponent.defaultProps = {
  color: "unit-gray",
  borderColor: "border-purple"
};

UnitComponent.displayName = 'UnitComponent';

export default UnitComponent;

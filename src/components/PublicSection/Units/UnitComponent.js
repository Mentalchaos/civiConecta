import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import unitLogo from 'src/assets/Icons/unit-purple.svg';
import brain from 'src/assets/Icons/heart-brain.svg';
import goTo from 'src/assets/Icons/open-arrow.svg';
import './UnitComponent.css';

const UnitComponent = ({ id, status, title, description, color, borderColor, number }) => {
  const navigate = useNavigate();

  return (
    <div className={`unit-component-container ${color}`}>
      <div className='unit-component-title'>
        <div>
          <img src={unitLogo} alt='unit-logo' />
        </div>
        <div className='unit-second-container'>
          <p>{status} En desarollo</p>
          <img src={brain} alt='brain-logo' className='unit-brain' />
        </div>
      </div>
      <div className='component-info'>
        <p className='component-title'>Unidad {number} </p>
        <p className={`component-subtitle ${borderColor}`}>{title}</p>
        <p className='component-description'>{description}</p>
      </div>
      <div className='go-to-unit'>
        <p className='goto' onClick={() => navigate(`/public/units-dashboard/${id}`)}>Ir a la unidad</p>
        <img src={goTo} alt="arrow-icon" className='unit-arrow' />
      </div>
    </div>
  )
}

UnitComponent.defaultProps = {
  color: "unit-gray",
  borderColor: "border-purple"
};

export default UnitComponent;

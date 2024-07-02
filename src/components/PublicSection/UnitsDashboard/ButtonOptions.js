import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './buttonOptions.css';

const ButtonOptions = ({ fontColor }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const gradeId = sessionStorage.getItem('gradeId');

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="options">
      <div className='options-buttons'>
        <a
          className={`options-button ${isActive('/public/') && !isActive('/public/situations-dashboard/') && !isActive('/public/ephemeris-dashboard/') ? 'active' : ''}`}
          onClick={() => navigate('/public/')}
        >
          Planificación Personalizada
        </a>
        <a
          className={`options-button ${isActive('/public/') && !isActive('/public/situations-dashboard/') && !isActive('/public/ephemeris-dashboard/') ? 'active' : ''}`}
          onClick={() => navigate('/public/')}
        >
          Planificación Estandarizada
        </a>
        <a
          className={`options-button options-button-left ${isActive(`/public/situations-dashboard/${gradeId}`) ? 'active' : ''}`}
          onClick={() => navigate(`/public/situations-dashboard/${gradeId}`)}
          style={{ color: isActive(`/public/situations-dashboard/${gradeId}`) ? fontColor : 'inherit' }}
        >
          Situaciones emergentes
        </a>
        <a
          className={`options-button options-button-right ${isActive(`/public/ephemeris-dashboard/${gradeId}`) ? 'active' : ''}`}
          onClick={() => navigate(`/public/ephemeris-dashboard/${gradeId}`)}
          style={{ color: isActive(`/public/ephemeris-dashboard/${gradeId}`) ? fontColor : 'inherit' }}
        >
          Efemérides
        </a>
      </div>
    </div>
  )
}

export default ButtonOptions;

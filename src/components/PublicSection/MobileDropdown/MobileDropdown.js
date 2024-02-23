import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import planification1 from 'src/assets/Icons/heart-brain.svg';
import ephemeris1 from 'src/assets/Icons/heart-brain-lightblue.svg';
import situations1 from 'src/assets/Icons/heart-brain-situation.svg';
import arrow from 'src/assets/Icons/dropdown-arrow.svg';
import './MobileDropdown.css';

function MobileDropdown({ section }) {

  const iconsConfig = () => {
    switch (section) {
      case 'Situaciones Emergentes':
        return [
          <img key="s1" style={{ width: '40px' }} src={situations1} alt="Icon 1" />,
          <img key="a1" style={{ width: '40px' }} src={arrow} alt="Icon 2" />
        ]
      case 'Efemérides':
        return [
          <img key="e1" style={{ width: '40px' }} src={ephemeris1} alt="Icon 1" />,
          <img key="a2" style={{ width: '40px' }} src={arrow} alt="Icon 2" />
        ]
      case 'Planificación Personalizada':
        return [
          <img key="p1" style={{ width: '40px' }} src={planification1} alt="Icon 1" />,
          <img key="a3" style={{ width: '40px' }} src={arrow} alt="Icon 2" />
        ]
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selected, _] = useState({ text: section, icons: iconsConfig() });
  const navigate = useNavigate();
  const gradeId = sessionStorage.getItem('gradeId');

  const optionsToPaths = {
    'Situaciones Emergentes': {
      path: `/public/situations-dashboard/${gradeId}`,
      icons: [
        <img key="s1" style={{ width: '40px' }} src={situations1} alt="Icon 1" />,
        <img key="a1" style={{ width: '40px' }} src={arrow} alt="Icon 2" />
      ]
    },
    'Efemérides': {
      path: `/public/ephemeris-dashboard/${gradeId}`,
      icons: [
        <img key="e1" style={{ width: '40px' }} src={ephemeris1} alt="Icon 1" />,
        <img key="a2" style={{ width: '40px' }} src={arrow} alt="Icon 2" />
      ]
    },
    'Planificación Personalizada': {
      path: '/planificacion-personalizada',
      icons: [
        <img key="p1" style={{ width: '40px' }} src={planification1} alt="Icon 1" />,
        <img key="a3" style={{ width: '40px' }} src={arrow} alt="Icon 2" />
      ]
    }
  };

  const handleSelect = (option) => {
    const path = optionsToPaths[option].path;
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
        {selected.icons && <span className='dropdown-span'>{selected.icons[0]}{selected.text}{selected.icons[1]}</span>}
        {!selected.icons && selected.text}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {Object.keys(optionsToPaths).map((option) => (
            <div key={option} onClick={() => handleSelect(option)} className="dropdown-item">
              {optionsToPaths[option].icons[0]}
              {option}
              {optionsToPaths[option].icons[1]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileDropdown;

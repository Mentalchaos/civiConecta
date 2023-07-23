import React from 'react';
import { useNavigate } from 'react-router-dom';
import BoxIcon from 'src/components/UI/BoxIcon/BoxIcon';
import blackboard from 'src/assets/Icons/blackboard.svg';
import classImg from 'src/assets/images/clases-presenciales.jpeg';

import './Units.css';

const Units = () => {
  const navigate = useNavigate();
  return (
    <section
      onClick={() => navigate('/admin/units')}
      className="units-container"
    >
      <div className="units__header">
        <div className="header__left-content">
          <BoxIcon svg={blackboard} background="color-green" />
          <div className="header__text">
            <p>Unidades</p>
            <small>Seleccionar curso para cargar unidades</small>
          </div>
        </div>
        <div className="header__right-content">
          {/* <Select /> */}
        </div>
      </div>
      <div className="img-container">
        <img className="img-units" alt="class-img" src={classImg} />
      </div>

    </section>
  );
};

export default Units;

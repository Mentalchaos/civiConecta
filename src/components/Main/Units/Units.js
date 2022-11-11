import React from 'react';
import BoxIcon from 'src/components/UI/BoxIcon/BoxIcon';
import blackboard from 'src/assets/Icons/blackboard.svg';
import infoIcon from 'src/assets/Icons/info.svg';

import './Units.css';

const Units = () => {
  return (
    <section className="units-container">
      <div className="units__header">
        <div className="header__left-content">
          <BoxIcon svg={blackboard} background="color-green" />
          <div className="header__text">
            <p>Unidades</p>
            <small>Incompleto</small>
          </div>
        </div>

        <img src={infoIcon} alt="info" />
      </div>
    </section>
  );
};

export default Units;

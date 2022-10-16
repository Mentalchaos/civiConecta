import React from 'react';
import BoxIcon from 'src/components/UI/BoxIcon/BoxIcon';
import blackboard from 'src/components/UI/Icons/blackboard.svg';
import infoIcon from 'src/components/UI/Icons/info.svg';

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
        <span className="header__info-tooltip">
          El orden en que se muestran las <br /> unidades para intranet
          depender&aacute; <br /> de la informaci&oacute;n de las encuestas.
        </span>
        <img src={infoIcon} alt="info" />
      </div>
    </section>
  );
};

export default Units;

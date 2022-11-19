import React from 'react';
import BoxIcon from 'src/components/UI/BoxIcon/BoxIcon';
import blackboard from 'src/assets/Icons/blackboard.svg';
/* import infoIcon from 'src/assets/Icons/info.svg'; */
import Select from './Select/Select';
import UnitDocs from './UnitDocs/UnitDocs';

import './Units.css';

const Units = () => {
  return (
    <section className="units-container">
      <div className="units__header">
        <div className="header__left-content">
          <BoxIcon svg={blackboard} background="color-green" />
          <div className="header__text">
            <p>Unidades</p>
            <small>Seleccionar curso para cargar unidades</small>
          </div>
        </div>
        <div className="header__right-content">
          <Select />
        </div>
      </div>
      <UnitDocs title={'Unidad 1'} />
      <UnitDocs title={'Unidad 2'} />
      <UnitDocs title={'Unidad 3'} />
    </section>
  );
};

export default Units;

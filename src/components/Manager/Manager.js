import { useEffect, useState } from 'react';
import StageManager from './StageManager/StageManager';
import StageAssignment from './StageAssignment/StageAssignment';
import StageDetail from './StageDetail/StageDetail';

import background from 'src/assets/images/manager-header.png';
import './Manager.css';
import SectionsHeader from '../SectionsHeader/SectionsHeader';

const Manager = () => {
  const [stage, setStage] = useState('manager');
  const [institutionSelected, setInstitutionSelected] = useState({});

  const changeStage = stage => {
    setStage(stage);
  };

  const handleInstitutionSelected = institution => {
    setInstitutionSelected(institution);
  };

  return (
    <>
      <SectionsHeader
        image={background}
        subtitle={
          stage === 'manager'
            ? 'Manager de establecimientos'
            : institutionSelected.name
        }
      />
      <main className="manager-content">
        <div className="current-path">
          {/*Aqui debe ir el path para controlar flujo actual*/}
          <p className="path__text">{stage}</p>
        </div>
        {stage === 'manager' && (
          <StageManager
            changeStage={changeStage}
            title="A&ntilde;adir Instituci&oacute;n"
            handleInstitutionSelected={handleInstitutionSelected}
          />
        )}
        {stage === 'assignment' && (
          <StageAssignment
            changeStage={changeStage}
            institutionSelected={institutionSelected}
            title="Creaci&oacute;n de cursos"
          />
        )}
        {stage === 'detail' && (
          <StageDetail changeStage={changeStage} title="Detalle de letra" />
        )}
      </main>
    </>
  );
};

export default Manager;

import { useEffect, useState } from 'react';
import StageManager from './StageManager/StageManager';
import StageAssignment from './StageAssignment/StageAssignment';
import StageDetail from './StageDetail/StageDetail';

import background from 'src/assets/images/manager-header.png';
import './Manager.css';
import SectionsHeader from '../SectionsHeader/SectionsHeader';

const Manager = () => {
  const [stage, setStage] = useState('Manager');
  const [institutionSelected, setInstitutionSelected] = useState({});
  const [courseSelected, setCourseSelected] = useState({});

  const changeStage = stage => {
    setStage(stage);
  };

  const handleInstitutionSelected = institution => {
    setInstitutionSelected(institution);
  };

  const handleCourseSelected = course => {
    setCourseSelected(course);
  };

  return (
    <>
      <SectionsHeader
        image={background}
        subtitle={
          stage === 'Manager'
            ? 'Manager de establecimientos'
            : institutionSelected.name
        }
      />
      <main className="manager-content">
        <div className="current-path">
          {/*Aqui debe ir el path para controlar flujo actual*/}
          <p className="path__text">{stage}</p>
        </div>
        {stage === 'Manager' && (
          <StageManager
            changeStage={changeStage}
            title="A&ntilde;adir Instituci&oacute;n"
            handleInstitutionSelected={handleInstitutionSelected}
          />
        )}
        {stage === 'Asignación' && (
          <StageAssignment
            changeStage={changeStage}
            institutionSelected={institutionSelected}
            onHandleCourseSelected={handleCourseSelected}
            title="Creaci&oacute;n de cursos"
          />
        )}
        {stage === 'Detalle' && (
          <StageDetail
            institutionSelected={institutionSelected}
            courseSelected={courseSelected}
            changeStage={changeStage}
            title="Detalle de letra"
          />
        )}
      </main>
    </>
  );
};

export default Manager;

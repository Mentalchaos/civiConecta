import { useState } from 'react';
import StageManager from './StageManager/StageManager';
import StageAssignment from './StageAssignment/StageAssignment';
import StageDetail from './StageDetail/StageDetail';

import background from 'src/assets/images/manager-header.png';
import './Manager.css';

const Manager = () => {
  const [stage, setStage] = useState('detail');
  return (
    <>
      <header className="manager-header">
        <img src={background} alt="background" />
        <div className="header__manager-text">
          <h1>
            CIVI <span>admin</span>
          </h1>
          {stage === 'manager' && <p>Manager de establecimientos</p>}
          {stage === 'assignment' && <p>Nombre del establecimiento</p>}
          {stage === 'detail' && <p>Nombre del establecimiento</p>}
        </div>
      </header>
      <main className="manager-content">
        <div className="current-path">
          {/*Aqui debe ir el path para controlar ruta actual*/}
          <p className="path__text">Manager</p>
        </div>
        {stage === 'manager' && (
          <StageManager title="A&ntilde;adir Instituci&oacute;n" />
        )}
        {stage === 'assignment' && (
          <StageAssignment title="Creaci&oacute;n de cursos" />
        )}
        {stage === 'detail' && <StageDetail title="Detalle de letra" />}
      </main>
    </>
  );
};

export default Manager;

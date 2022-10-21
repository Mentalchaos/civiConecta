import { useState } from 'react';
import StageManager from './StageManager/StageManager';
import StageAssignment from './StageAssignment/StageAssignment';
import StageDetail from './StageDetail/StageDetail';

import background from 'src/assets/images/manager-header.png';
import './Manager.css';

const Manager = () => {
  const [stage, setStage] = useState('manager');
  return (
    <>
      <header className="manager-header">
        <img src={background} alt="background" />
        <div className="header__manager-text">
          <h1>
            CIVI <span>admin</span>
          </h1>
          <p>Manager de establecimientos</p>
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
          <StageAssignment title="Asignaci&oacute;n de m&oacute;dulos" />
        )}
        {stage === 'detail' && <StageDetail title="Detalle de m&oacute;dulo" />}
      </main>
    </>
  );
};

export default Manager;

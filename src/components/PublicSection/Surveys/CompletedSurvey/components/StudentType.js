import React from 'react';
import successIconStudent from 'src/assets/Icons/student-survey-completed.svg';

import '../../index.css';

const StudentType = () => {
  return (
    <article className="completed-survey-container student">
      <div className="completed-survey__text-content">
        <div className="text-content__success-message student">
          <img src={successIconStudent} alt="Check icon" width={60} />
          <span>{'{nombre estudiante}'}, gracias por compartir tu opinión.</span>
        </div>
        <p className="text-content__paragraph">Ya puedes cerrar esta ventana</p>
      </div>
    </article>
  );
};

export default StudentType;

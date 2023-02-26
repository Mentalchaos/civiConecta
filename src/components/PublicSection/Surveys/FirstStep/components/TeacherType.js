import React from 'react';
import surveyIcon from 'src/assets/images/professor-survey-icon.svg';
import clockIcon from 'src/assets/images/clock-icon.svg';

const TeacherType = ({ setIsStartSurvey }) => {
  return (
    <>
      <div className="content-start__left">
        <div className="image-container"></div>
      </div>
      <article className="content-start__suggestions">
        <header className="content-start__header-text">
          <img src={surveyIcon} alt="icono encuesta" width={30} />
          <span>Planificaci&oacute;n adecuada</span>
        </header>
        <p className="content-start__text">
          Te sugerimos que, si no conoces la realidad del curso, completes esta encuesta considerando la opini&oacute;n
          del profesor o profesora jefe anterior, u otros colegas que tengan experiencia con el grupo de estudiantes.
        </p>
        <div className="content-start__important-section">
          <div className="important">
            <img src={clockIcon} alt="Icono tiempo" width={45} />
            <span> La encuesta consta de 16 preguntas.</span>
          </div>

          <p className="important-text">
            Es importante que contestes con calma y sinceridad respecto a tu percepción del curso, ya que te permitirá
            obtener una planiﬁcación acorde con sus necesidades.
          </p>
        </div>
        <div className="firststep-actions">
          <button onClick={() => setIsStartSurvey(true)} className="survey-start-button" type="button">
            Iniciar la encuesta
          </button>
        </div>
      </article>
    </>
  );
};

export default TeacherType;

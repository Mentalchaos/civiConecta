import React, { useEffect } from 'react';
import surveyIcon from 'src/assets/images/professor-survey-icon.svg';
import clockIcon from 'src/assets/images/clock-icon.svg';
import clockIconStudent from 'src/assets/images/student-survey-clock.svg';
import smileIcon from 'src/assets/images/smile-student-survey.svg';
import cookie from 'src/utils/cookie';

const FirstStep = ({ type, setIsStartSurvey }) => {
  const cookies = cookie.getDataParser();
  const { name } = cookies;

  return (
    <section className="survey-content__start">
      <div className="content-start__left">
        <div className={`image-container ${type}`}></div>
      </div>
      <article className="content-start__suggestions">
        <header className="content-start__header-text">
          {type === 'teacher' ? (
            <>
              <img src={surveyIcon} alt="icono encuesta" width={30} />
              <span>Planificaci&oacute;n adecuada</span>
            </>
          ) : (
            <>
              <img src={smileIcon} alt="icono encuesta" width={30} />
              <span>
                ¡Hola <span style={{ color: 'var(--color-primary' }}>Armando{name}</span>!
              </span>
            </>
          )}
        </header>
        <p className="content-start__text">
          {type === 'teacher' ? (
            <>
              Te sugerimos que, si no conoces la realidad del curso, completes esta encuesta considerando la
              opini&oacute;n del profesor o profesora jefe anterior, u otros colegas que tengan experiencia con el grupo
              de estudiantes.
            </>
          ) : (
            <>Responde las siguientes preguntas a partir de tus intereses y los de tus compañeros/as.</>
          )}
        </p>
        <div className="content-start__important-section">
          <div className={`important ${type}`}>
            {type === 'teacher' ? (
              <img src={clockIcon} alt="Icono tiempo" width={45} />
            ) : (
              <img src={clockIconStudent} alt="Icono tiempo" width={45} />
            )}
            <span> La encuesta consta de 16 preguntas.</span>
          </div>
          <p className={`important-text ${type}`}>
            {type === 'teacher' ? (
              <>
                Es importante que contestes con calma y sinceridad respecto a tu percepción del curso, ya que te
                permitirá obtener una planiﬁcación acorde con sus necesidades.
              </>
            ) : (
              <>
                Si al momento de responder, ninguna de las opciones te representa, escoge la que más se acerque a tu
                respuesta ideal
              </>
            )}
          </p>
        </div>
        <div className="firststep-actions">
          <button onClick={() => setIsStartSurvey(true)} className={`survey-start-button ${type}`} type="button">
            Iniciar la encuesta
          </button>
        </div>
      </article>
    </section>
  );
};

export default FirstStep;

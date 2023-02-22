import React, { useEffect } from 'react';
import planificationImage from 'src/assets/images/professorSurvey.jpg';
import studentSurveyImage from 'src/assets/images/student-survey-img.jpeg';
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
      <img
        className="content-start__image"
        alt="planification image"
        src={type === 'teacher' ? planificationImage : studentSurveyImage}
      />
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
        <div style={{ textAlign: 'right', marginTop: 40 }}>
          <button onClick={() => setIsStartSurvey(true)} className={`survey-start-button ${type}`} type="button">
            Iniciar la encuesta
          </button>
        </div>
      </article>
    </section>
  );
};

export default FirstStep;

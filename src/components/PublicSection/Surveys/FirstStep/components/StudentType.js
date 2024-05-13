import React from 'react';
import smileIcon from 'src/assets/images/smile-student-survey.svg';
import clockIconStudent from 'src/assets/images/student-survey-clock.svg';
import arrow from 'src/assets/Icons/thin-right.svg';
import { getUserData } from 'src/utils/user.js'

const StudentType = ({ setIsStartSurvey }) => {

  const user = getUserData();
  const { grade } = user;

  const setQuantityOfQuestions = () => {
    let questions;
    if (grade >= 1 && grade <= 4) {
      questions = 8;
    } else if (grade >= 5 && grade <= 6) {
      questions = 16
    } else {
      questions = 20
    }
    return questions;
  }

  return (
    <>
      <div className="content-start__left">
        <div className="image-container student"></div>
      </div>
      <article className="content-start__suggestions">
        <header className="content-start__header-text">
          <img src={smileIcon} alt="icono encuesta" width={30} />
          <span>
            ¡Hola <span style={{ color: 'var(--color-primary' }}>{user.name}</span>!
          </span>
        </header>
        <p className="content-start__text">
          Responde las siguientes preguntas a partir de tus intereses y los de tus compañeros/as.
        </p>
        <div className="content-start__important-section">
          <div className="important student">
            <img src={clockIconStudent} alt="Icono tiempo" width={45} />
            <span> {`La encuesta consta de ${setQuantityOfQuestions()} preguntas.`}</span>
          </div>

          <p className="important-text student">
            Si al momento de responder, ninguna de las opciones te representa, escoge la que más se acerque a tu
            respuesta ideal
          </p>
        </div>
        <div className="firststep-actions">
          <button onClick={() => setIsStartSurvey(true)} className="survey-start-button student" type="button">
            Iniciar la encuesta
            <img alt="first-step-actions" className='firststep-actions-img' src={arrow} />
          </button>

        </div>
      </article>
    </>
  );
};

export default StudentType;

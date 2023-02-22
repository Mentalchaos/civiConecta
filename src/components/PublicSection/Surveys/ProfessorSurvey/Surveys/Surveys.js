import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalToFinish from '../ModalToFinish/ModalToFinish';

const questions = [
  {
    preguntaNum: 1,
    pregunta: 'Que le parece a ud como programa el color1?',
    alternativas: { a: 'asdasd1', b: 'asdas1', c: 'asdasd1', d: 'asdasd1' },
  },
  {
    preguntaNum: 2,
    pregunta: 'Que le parece a ud como programa el color2?',
    alternativas: { a: 'asdasd2', b: 'asdas2', c: 'asdasd2', d: 'asdasd2' },
  },
  {
    preguntaNum: 3,
    pregunta: 'Que le parece a ud como programa el color3?',
    alternativas: { a: 'asdasd3', b: 'asdas3', c: 'asdasd3', d: 'asdasd3' },
  },
  {
    preguntaNum: 4,
    pregunta: 'Que le parece a ud como programa el color4?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 5,
    pregunta: 'Que le parece a ud como programa el color5?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 6,
    pregunta: 'Que le parece a ud como programa el color6?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 7,
    pregunta: 'Que le parece a ud como programa el color7?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 8,
    pregunta: 'Que le parece a ud como programa el color8?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 9,
    pregunta: 'Que le parece a ud como programa el color9?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 10,
    pregunta: 'Que le parece a ud como programa el color10?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 11,
    pregunta: 'Que le parece a ud como programa el color11?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 12,
    pregunta: 'Que le parece a ud como programa el color12?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 13,
    pregunta: 'Que le parece a ud como programa el color13?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 14,
    pregunta: 'Que le parece a ud como programa el color14?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 15,
    pregunta: 'Que le parece a ud como programa el color15?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
  {
    preguntaNum: 16,
    pregunta: 'Que le parece a ud como programa el color16?',
    alternativas: { a: 'asdasd', b: 'asdas', c: 'asdasd', d: 'asdasd' },
  },
];

const Surveys = ({ userType = 'student' }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { alternativas, pregunta, preguntaNum } = questions[currentQuestion];

  const navigate = useNavigate();
  const typeUser = userType === 'student' ? 'estudiante' : 'docente';

  useEffect(() => {
    // get survey depending type
    console.log(userType);
  }, []);

  const handleSendAnswer = () => {
    if (currentQuestion === questions.length - 1) {
      setShowModal(true);
      return;
    }
    currentQuestion < questions.length && setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishSurvey = () => {
    console.log('finish survey');
    navigate('/completed-survey');
  };

  const handlePreviousQuestion = () => {
    currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="surveys">
      {showModal && <ModalToFinish closeModal={handleCloseModal} finishSurvey={handleFinishSurvey} />}
      <article className="surveys__questions-list">
        {questions.map(question => {
          const { preguntaNum } = question;
          const currentQuestionNumber = currentQuestion === preguntaNum - 1 && 'active';
          return (
            <span className={`question-number ${currentQuestionNumber}`} key={preguntaNum}>
              Pregunta {preguntaNum}
            </span>
          );
        })}
      </article>

      <article className="surveys__question-alternatives">
        <div className="surveys__alternatives-container">
          <span className="surveys__header-title">Encuesta {typeUser}</span>
          <p className="surveys__question">{pregunta}</p>
          <form className="alternatives__form">
            <div className="form__input">
              <input className={userType} id="option1" type="radio" name="option" value={alternativas.a} />
              <label htmlFor="option1">{alternativas.a}</label>
            </div>
            <div className="form__input">
              <input className={userType} id="option2" type="radio" name="option" value={alternativas.b} />
              <label htmlFor="option2">{alternativas.b}</label>
            </div>
            <div className="form__input">
              <input className={userType} id="option3" type="radio" name="option" value={alternativas.c} />
              <label htmlFor="option3">{alternativas.c}</label>
            </div>
            <div className="form__input">
              <input className={userType} id="option4" type="radio" name="option" value={alternativas.d} />
              <label htmlFor="option4">{alternativas.d}</label>
            </div>
          </form>
          <div className="form__actions">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion < 1}
              className={`form__previous-question ${userType}`}
            >
              Pregunta anterior
            </button>
            <button onClick={handleSendAnswer} className={`form__next-question ${userType}`}>
              {currentQuestion === questions.length - 1 ? 'Finalizar encuesta' : 'Continuar'}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Surveys;

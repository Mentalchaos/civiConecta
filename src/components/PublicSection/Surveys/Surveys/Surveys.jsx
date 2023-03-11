import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from 'src/components/UI/Loading';
import SurveyHeader from './components/SurveyHeader';
import Question from './components/Question';
import SurveyActions from './components/SurveyActions';
import { SurveyContext } from './context';
import useSurvey from './useSurvey';
import CompletedSurvey from '../CompletedSurvey/CompletedSurvey';
import ModalToFinish from '../ProfessorSurvey/ModalToFinish/ModalToFinish';
import '../index.css';

const SurveyTypes = {
  student: 'Estudiante',
  teacher: 'Docente'
};

const Surveys = ({ userType }) => {
  const { states, actions } = useSurvey(userType);

  console.log('states',states);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [showModal, setShowModal] = useState(false);
  // const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);
  // const { alternativas, pregunta, preguntaNum } = questions[currentQuestion];

  // const navigate = useNavigate();

  // const handleSendAnswer = () => {
  //   if (currentQuestion === questions.length - 1 && userType !== 'student') {
  //     setShowModal(true);
  //     return;
  //   } else if (currentQuestion === questions.length - 1 && userType === 'student') {
  //     //send answer
  //     console.log('survey is completed from student');
  //     setIsSurveyCompleted(true);
  //     return;
  //   }
  //   currentQuestion < questions.length && setCurrentQuestion(currentQuestion + 1);
  // };

  // const handleFinishSurvey = () => {
  //   // navigate('/completed-survey');
  //   setIsSurveyCompleted(true);
  // };

  // const handlePreviousQuestion = () => {
  //   currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  // if (isSurveyCompleted) return <CompletedSurvey type={userType} />;
  return (
    <section className="surveys">
      <SurveyContext.Provider value={{ userType, states, actions }}>
        {/* {showModal && <ModalToFinish closeModal={handleCloseModal} finishSurvey={handleFinishSurvey} />} */}
        <Loading isLoading={!states.hasQuestions}>
          {() => (
            <Fragment>
              <SurveyHeader
                userType={userType}
                questions={states.questions}
                currentQuestion={states.currentQuestion}
              />
              <article className="surveys__question-alternatives">
                <div className="surveys__alternatives-container">
                  <span className="surveys__header-title">
                    Encuesta {SurveyTypes[userType]}
                  </span>
                  <Question question={states.questionToShow} />
                  <SurveyActions />
                </div>
              </article>
            </Fragment>
          )}
        </Loading>
      </SurveyContext.Provider>

      {/* <article className="surveys__question-alternatives">
        <div className="surveys__alternatives-container">
          <span className="surveys__header-title">Encuesta {typeUser}</span>
          <p className="surveys__question">{pregunta}</p>
          <div className="alternatives__form" onChange={() => {}}>
              <input className={userType} checked={questions[currentQuestion].alternativas.a.selected} id="option1" type="radio" name="option" value={questions[currentQuestion].alternativas.a.value} />
              <input className={userType} checked={questions[currentQuestion].alternativas.b.selected} id="option2" type="radio" name="option" value={questions[currentQuestion].alternativas.b.value} />
              <input className={userType} checked={questions[currentQuestion].alternativas.c.selected} id="option3" type="radio" name="option" value={questions[currentQuestion].alternativas.c.value} />
              <input className={userType} checked={questions[currentQuestion].alternativas.d.selected} id="option4" type="radio" name="option" value={questions[currentQuestion].alternativas.d.value} />
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
    */}
    </section>
  );
};

export default Surveys;

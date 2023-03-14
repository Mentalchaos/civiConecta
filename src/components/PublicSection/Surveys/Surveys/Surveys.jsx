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
    </section>
  );
};

export default Surveys;

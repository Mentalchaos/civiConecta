import { Fragment } from 'react';
import Loading from 'src/components/UI/Loading';
import brain from 'src/assets/Icons/brain-red-encuesta.svg';
import greyBrain from 'src/assets/Icons/brain-encuesta-off.svg';
import greyHeart from 'src/assets/Icons/heart-encuesta-off.svg';
import heart from 'src/assets/Icons/heart-encuesta-on.svg';
import student from 'src/assets/Icons/student-purple.svg';
import teacher from 'src/assets/Icons/encuesta-docente.svg';
import SurveyHeader from './components/SurveyHeader';
import SurveyDropDown from './components/SurveyDropDown';
import Question from './components/Question';
import SurveyActions from './components/SurveyActions';
import { SurveyContext } from './context';
import useSurvey from './useSurvey';
import CompletedSurvey from '../CompletedSurvey/CompletedSurvey';
import ModalToFinish from '../ProfessorSurvey/ModalToFinish/ModalToFinish';
import '../index.css';
import { getUserData } from 'src/utils/user';
import config from 'src/config';
import Visible from 'src/components/UI/Visible';
import { Progress } from 'rsuite';
import "rsuite/dist/rsuite.css";

const SurveyTypes = {
  student: 'Estudiante',
  teacher: 'Docente'
};

const Surveys = ({ userType }) => {
  const { states, actions } = useSurvey(userType);
  const userData = getUserData();
  const uuid = userData.uuid;

  const finishUser = () => {
    const totalQuestions = states.questions.length;
    const totalAlternatives = Object.keys(states.savedAlternatives).length;

    if(totalQuestions === totalAlternatives){
      fetch(`${config.baseURL}/feedback/${userType}/${uuid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: userData.token
        },
      })
    } else {
      return alert('Debes completar todas tus preguntas antes de poder cerrar la encuesta');
    }

    actions.completedSurvey();
  }

  const lineHeight = userData.grade >= 7 ? 620 : 500;
  const surveyIcon = userType === 'student' ? student : teacher;
  const progressIcon = states.percent > 0 ? brain : greyBrain;
  const progressIcon2 = states.percent === 100 ? heart : greyHeart;

  return (
    <section className="surveys">
      <Visible condition={states.completedSurvey}>
        <CompletedSurvey type={userType} />
      </Visible>
      <Visible condition={!states.completedSurvey}>
        <SurveyContext.Provider value={{ userType, states, actions }}>
          {states.showModal && <ModalToFinish userType={userType} closeModal={actions.closeModal} finishSurvey={() => finishUser()} />}
          <Loading isLoading={!states.hasQuestions}>
            {() => (
              <Fragment>
                <div className="progress-bar" style={{position: 'absolute'}}>
                  <div className="line-vertical-wrapper" style={{ height: lineHeight, transform: 'rotate(-180deg)'}}>
                    <Progress.Line
                      status={states.percent > 98 ? "success" : "fail"}
                      style={{ height: `${lineHeight}px` }}
                      vertical
                      percent={states.percent}
                      showInfo={false}
                      strokeColor={userType === 'student' ? '#7268db' : '#ec5f7b'}
                    />
                  </div>
                </div>
                <SurveyHeader
                  userType={userType}
                  questions={states.questions}
                  currentQuestion={states.currentQuestion}
                />
                <article className="surveys__question-alternatives">
                  <div className="surveys__alternatives-container">
                    <div className='survey-mobile-container'>
                    <div className="surveys__header-title">
                      <div className='progress-icon header'>
                        <img className='' src={surveyIcon} alt='back'/>
                      </div>
                      Encuesta {SurveyTypes[userType]}
                    </div>
                    <div className="mobile-progress-bar">
                      <div>
                        <img className='progress-bar-icon' src={progressIcon} alt='back'/>
                      </div>
                      <Progress.Line
                        status={states.percent > 98 ? "success" : "fail"}
                        percent={states.percent}
                        showInfo={false}
                        strokeColor={userType === 'student' ? '#7268db' : '#ec5f7b'}
                      />
                      <div >
                        <img className='progress-bar-icon' src={progressIcon2} alt='back'/>
                      </div>
                    </div>
                    <Question
                      question={states.questionToShow}
                      questionIndex={states.currentQuestion}
                      userType={userType}
                    />
                    </div>
                    <SurveyActions />
                    <div className='select-question'>
                      ¿Desea volver a otra pregunta?
                      <div className='survey-dropdown-wrapper'>
                        <SurveyDropDown questions={states.questions} action={actions.goToQuestion} />
                      </div>
                    </div>
                  </div>
                </article>
              </Fragment>
            )}
          </Loading>
        </SurveyContext.Provider>
      </Visible>
    </section>
  );
};

export default Surveys;

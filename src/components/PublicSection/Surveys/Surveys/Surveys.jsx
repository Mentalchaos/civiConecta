import { Fragment } from 'react';
import Loading from 'src/components/UI/Loading';
import SurveyHeader from './components/SurveyHeader';
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
    fetch(`${config.baseURL}/feedback/${userType}/${uuid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: userData.token
      },
    })
    actions.completedSurvey();
  }

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
                  <div className="line-vertical-wrapper" style={{ height: 500, transform: 'rotate(-180deg)'}}>
                    <Progress.Line
                      status={states.percent > 98 ? "success" : "fail"}
                      style={{ height: '500px' }}
                      vertical
                      percent={states.percent}
                      showInfo={false}
                      strokeColor={'#7268db'}
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
      </Visible>
    </section>
  );
};

export default Surveys;

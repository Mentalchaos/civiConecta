import { Fragment, useState, useEffect } from 'react';
import Visible from 'src/components/UI/Visible';
import Loading from 'src/components/UI/Loading';
import Welcome from './Welcome';
import LinkGenerator from './LinkGenerator/LinkGenerator';
import UnitsHeader from './Units/UnitsHeader';
import UnitComponent from './Units/UnitComponent';
import UnitSituations from './Units/UnitSituations';
import SurveyModal from './Surveys/SurveyModal';
import Footer from './Footer';
import config from 'src/config';
import usePublicSection from './hooks/usePublicSection';
import './PublicSection.css';
import { PublicContext } from './context';
import Plan from './Plan';
import { getUserData } from 'src/utils/user';
import ChangePlanificationButton from './LinkGenerator/ChangePlanificationButton';

const { links, planningPrograms } = config.contents;

const PublicSection = () => {
  const { states, actions, setters } = usePublicSection();
  const [changeTextUnits, setChangeTextUnits] = useState({});
  const stateUnit = ['En Desarrollo', 'Pendiente', 'Completado'];
  const userData = getUserData();
  const uuid = userData.uuid;

  const { status } = states;

  const handleTextUnits = (unitId) => {
    setChangeTextUnits((prevState) => {
      const currentState = prevState[unitId] || 0;
      const nextState = (currentState + 1) % stateUnit.length;
      return {
        ...prevState,
        [unitId]: nextState,
      };
    });
  };

  useEffect(() => {
    const id = states.userData.gradeId;
    sessionStorage.setItem('gradeId', id);
  }, [states.userData]);

  const textToShown = (status?.teacher?.completed && status?.student?.completed) ? links.needLinkAgain : links.needLink;

  return (
    <PublicContext.Provider value={{ states, actions, setters }}>
      <div className="public-section-container">
        <Loading isLoading={states.isLoading}>
          {() => (
            <Fragment>
              <Visible condition={states.shouldModalBeShown}>
                <SurveyModal
                  closeModal={actions.closeModal}
                  teacherSurveyOnclick={actions.teacherSurvey}
                  gradeId={states.userData.gradeId}
                />
              </Visible>
              <Welcome
                userData={states.userData}
                unitsPonderation={states.unitsPonderation}
              />
              <Visible condition={states.isPlanificationEnabled}>
                <Plan gradeId={states.userData.gradeId} />
              </Visible>
              <Visible condition={(states.status.student.completed === true || states.status.teacher.completed === true) || (states.showUnits === true)}>
                <div className="units-cont">
                  <UnitsHeader program={planningPrograms[1].program} />
                  <div className="units-components">
                    {states.units && states.unitStatus.length && states.units.map((data, i) => (
                      <UnitComponent
                        planificationType={states.planificationType}
                        key={data.id}
                        id={data.id}
                        number={data.number}
                        title={data.title}
                        subtitle={data.subtitle}
                        description={data.description}
                        color={data.color}
                        borderColor={data.borderColor}
                        handleTextUnits={() => handleTextUnits(data.id)}
                        textUnits={stateUnit[changeTextUnits[data.id] || 0]}
                        unitStatus={data.status}
                        status={states.unitStatus[i].status}
                        updateStatus={actions.setNewStatus}
                        uuid={uuid}
                        isCustomPlanning={states.isCustomPlanning}
                      />
                    ))}
                    <div className="units-components-two">
                      <UnitSituations title={'Situaciones emergentes'} to={`/public/situations-dashboard/${states.userData.gradeId}`} />
                      <UnitSituations title={'Efemerides'} to={`/public/ephemeris-dashboard/${states.userData.gradeId}`} />
                    </div>
                  </div>
                </div>
              </Visible>
              <LinkGenerator data={textToShown} />
              <Visible condition={status.student.completed && status.teacher.completed && status.survey.completed}>
                <ChangePlanificationButton
                  planificationType={states.planificationType}
                  actions={actions}
                  setters={setters}
                />
              </Visible>
            </Fragment>
          )}
        </Loading>
        <Footer />
      </div>
    </PublicContext.Provider>
  );
};

PublicSection.displayName = 'PublicSection';

export default PublicSection;

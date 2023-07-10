import { Fragment, useState } from 'react';
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

const { links, planningPrograms } = config.contents;

const PublicSection = () => {
  const { states, actions, setters } = usePublicSection();
  const [changeTextUnits, setChangeTextUnits] = useState({});
  const stateUnit = ['En Desarrollo', 'Pendiente', 'Completado'];

  const ponderationsObj = [{
    title: 'Categoria 1',
    unitId: 1,
    ponderation: 0.9
  },
  {
    title: 'Categoria 1',
    unitId: 2,
    ponderation: 0.6
  },
  {
    title: 'Categoria 1',
    unitId: 3,
    ponderation: 1.5
  },
  {
    title: 'Categoria 1',
    unitId: 4,
    ponderation: 1.1
  }];

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
                />
              </Visible>
              <Welcome
                userData={states.userData}
                unitsPonderation={states.unitsPonderation}
              />
              <Visible condition={states.isPlanificationEnabled}>
                <Plan />
              </Visible>

              <Visible condition={(states.status.student.completed === true && states.status.teacher.completed === true) || (states.showUnits === true)}>
              <div className="units-cont">
                <UnitsHeader program={planningPrograms[1].program} />
                <div className='button-units-cont'>
                  {/* <button onClick={(handleOrder)}>
                      {changeOrder ? 'Ordenar por Ponderation' : 'Volver al Orden Original'}
                    </button> */}
                </div>
                
                <div className="units-components">
                  {/* Esto es la forma original del codigo ya que "ponderations" ESTA HARDCOREADO */}
                  {states.units && states.units.map((data) => (
                    <UnitComponent
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
                    />
                  ))}
                  <div className="units-components-two">
                    <UnitSituations title={'Situaciones emergentes'} to={'/public/situations-dashboard'} />
                    <UnitSituations title={'Efemerides'} to={'/public/ephemeries-dashboard'} />
                  </div>
                </div>
              </div>
              </Visible>
              <LinkGenerator data={links.needLink} />
              {/*
              // TODO: Reactivar si corresponde mas adelante
              <Visible condition={states.isCustomPlanification}>
                <LinkGenerator
                  data={links.standardPlanification}
                  onClick={actions.setStandardPlanification}
                /> */
              }
              <Visible condition={states.isStandardPlanification}>
                <LinkGenerator
                  data={links.customPlanification}
                  onClick={actions.setCustomPlanification}
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

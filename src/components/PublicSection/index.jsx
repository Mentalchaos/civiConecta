import { Fragment } from 'react';
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

const { links, emergentSituations, planningPrograms } = config.contents;

const PublicSection = () => {
  const { states, actions } = usePublicSection();

  return (
    <PublicContext.Provider value={{ states, actions }}>
      <div className="public-section-container">
        <Loading isLoading={states.isLoading}>
          {() => (
            <Fragment>
              <Visible condition={states.shouldModalBeShown}>
                <SurveyModal
                  statusData={states.status}
                  closeModal={actions.closeModal}
                  teacherSurveyOnclick={actions.teacherSurvey}
                />
              </Visible>
              <Welcome userData={states.userData} />
              <Visible condition={states.isPlanificationEnabled}>
                <Plan />
              </Visible>
              <div className="units-cont">
                <UnitsHeader program={planningPrograms[1].program} />
                <div className="units-components">
                  {states.unitsContent.map((data, key) => (
                    <UnitComponent
                      key={key}
                      status={data.status}
                      title={data.title}
                      subtitle={data.subtitle}
                      description={data.description}
                      color={data.color}
                      borderColor={data.borderColor}
                    />
                  ))}
                  <div className="units-components-two">
                    {emergentSituations.map((data, key) => (
                      <UnitSituations key={key} title={data.title} />
                    ))}
                  </div>
                </div>
              </div>

              <LinkGenerator data={links.needLink} />

              <Visible condition={states.isCustomPlanification}>
                <LinkGenerator
                  data={links.standardPlanification}
                  onClick={actions.setStandardPlanification}
                />
              </Visible>

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
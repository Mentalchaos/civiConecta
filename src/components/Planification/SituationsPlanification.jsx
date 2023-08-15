
import { PlanificationContext } from './context';
import useSituationPlanification from './hooks/useSituationPlanification';
import Visible from 'src/components/UI/Visible';
import UnitLayout from 'src/Layouts/UnitLayout';
import Loading from '../UI/Loading';
import FileUploader from './components/FileUploader';
import Header from './components/Header';
import PlanningFiles from './PlanningFiles';
import SituationsPlanificationForm from './components/SituationsPlanificationForm.jsx';

const SituationsPlanification = ({ lessonId }) => {
  const { states, setters, actions } = useSituationPlanification(lessonId);

  return (
    <PlanificationContext.Provider value={{ states, setters, actions }}>
    <div>
      <UnitLayout eventType="situations">
        <div className="planification-container">
          <Header />
          <div className="planification__files">
            <Visible condition={!states.documentQuantity}>
              <h1>No se registran archivos.</h1>
            </Visible>
            <Loading isLoading={states.loading}>
              <Visible condition={states.documentQuantity}>
                <PlanningFiles />
              </Visible>
              <FileUploader />
            </Loading>
          </div>
          <div className="planification__form">
            <h1 className="planification-title">Planificación</h1>
            <Visible condition={states.planning}>
              <SituationsPlanificationForm />
            </Visible>
         </div>
        </div>
      </UnitLayout>
    </div>
    </PlanificationContext.Provider>
  );
};

SituationsPlanification.displayName = 'SituationsPlanification';

export default SituationsPlanification;

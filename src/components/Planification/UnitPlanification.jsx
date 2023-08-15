
import { PlanificationContext } from './context';
import useUnitPlanification from './hooks/useUnitPlanification';
import ObjectiveDescription from './components/ObjectiveDescription';
import Visible from 'src/components/UI/Visible';
import UnitLayout from 'src/Layouts/UnitLayout';
import Loading from '../UI/Loading';
import FileUploader from './components/FileUploader';
import Header from './components/Header';
import PlanningFiles from './PlanningFiles';
import UnitPlanificationForm from './components/UnitPlanificationForm.jsx';

const UnitPlanification = ({ lessonId }) => {
  const { states, setters, actions } = useUnitPlanification(lessonId);

  return (
    <PlanificationContext.Provider value={{ states, setters, actions }}>
    <div>
      <UnitLayout eventType="unit">
        <div className="planification-container">
          <Header />
          <ObjectiveDescription />
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
              <UnitPlanificationForm />
            </Visible>
         </div>
        </div>
      </UnitLayout>
    </div>
    </PlanificationContext.Provider>
  );
};

export default UnitPlanification;

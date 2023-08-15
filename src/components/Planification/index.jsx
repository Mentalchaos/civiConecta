import { useParams } from 'react-router-dom';
import Visible from 'src/components/UI/Visible';
import UnitLayout from 'src/Layouts/UnitLayout';
import { identity } from 'src/utils/functional';
import Loading from '../UI/Loading';
import FileUploader from './components/FileUploader';
import Header from './components/Header';
import ObjectiveDescription from './components/ObjectiveDescription';
import UnitPlanificationForm from './components/UnitPlanificationForm';
import PlanificationForm from './components/PlanificationForm';
import { PlanificationContext } from './context';
import usePlanification from './hooks/usePlanification';
import useUnitPlanification from './hooks/useUnitPlanification';
import './Planification.v2.css';
import PlanningFiles from './PlanningFiles';

const PlanificationTypes = {
  unit: UnitPlanificationForm,
  situations: PlanificationForm,
  ephemeris: PlanificationForm
};

// la idea aqui sera quitar toda la logica de estados y solo dejar los componentes
// sin estado, no importa si se dibuja todo, despues yo ire incorporando la logica
// de los hooks en este componente

const Planification = () => {
  const { lessonId, parentType } = useParams();
  const { states, setters, actions } = useUnitPlanification(lessonId);

  // const typeEvent = ParentTypes[parentType];

  const handleCheckboxSelected = file => {
    // actions.selectFile(file);
  };

  const handleDownload = evt => {
    // actions.downloadFile();
  };

  const handleDelete = () => {
    if (
      !window.confirm(
        'Al confirmar, se eliminara el archivo almacenado, desea continuar ?',
      )
    ) {
      return;
    }

    // actions.deleteFile();
  };

  return (
    <PlanificationContext.Provider value={{ states, setters, actions }}>
    <div>
      <UnitLayout eventType={parentType}>
        <div className="planification-container">
          <Header />
          <ObjectiveDescription />
          <div className="planification__files">
            <Visible condition={!states.documentQuantity}>
              <h1>No se registran archivos.</h1>
            </Visible>
            <Loading isLoading={states.loading}>
              <Visible condition={states.documentQuantity}>
              <PlanningFiles states={states} />
              </Visible>
              {/*<FileUploader />*/}
            </Loading>
          </div>
          <div className="planification__form">
             <h1 className="planification-title">Planificación</h1>
             <Visible condition={true}>
               {() => {
                 // const Component = PlanificationTypes[parentType];
                 // return (<Component />);
                  return null;
               }}
             </Visible>
         </div>
        </div>
      </UnitLayout>
    </div>
    </PlanificationContext.Provider>
  );
};

export default Planification;

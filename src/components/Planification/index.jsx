import { useParams } from 'react-router-dom';
import UnitLayout from 'src/Layouts/UnitLayout';
import Visible from 'src/components/UI/Visible';
import Header from './components/Header';
import ObjectiveDescription from './components/ObjectiveDescription';
import FileUploader from './components/FileUploader';
import { PlanificationContext } from './context';
import usePlanification from './hooks/usePlanification';
import './Planification.v2.css';

const Planification = () => {
  const { lessonId } = useParams();
  const { states, setters, actions } = usePlanification(lessonId);

  return (
    <PlanificationContext.Provider value={{ states, setters, actions }}>
      <UnitLayout>
        <div className="planification-container">
          <Header />
          <ObjectiveDescription />
          <Visible condition={!states.files.length}>
            <h1>No se registran archivos.</h1>
          </Visible>
          <Visible condition={states.files.length}>
            <p>pendiente de incorporar</p>
          </Visible>
          <FileUploader />
        </div>
      </UnitLayout>
    </PlanificationContext.Provider>
  );
};

export default Planification;

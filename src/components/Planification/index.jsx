import { useParams } from 'react-router-dom';
import UnitPlanification from './UnitPlanification.jsx';
import './Planification.v2.css';

const PlanificationTypes = {
  unit: UnitPlanification,
  // situations: PlanificationForm,
  // ephemeris: PlanificationForm
};

const Planification = () => {
  const { lessonId, parentType } = useParams();
  const Component = PlanificationTypes[parentType];

  return <Component lessonId={lessonId} parentType={parentType} />;
};

export default Planification;

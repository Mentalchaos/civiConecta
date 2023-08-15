import { useParams } from 'react-router-dom';
import UnitPlanification from './UnitPlanification.jsx';
import EphemerisPlanification from './EphemerisPlanification.jsx';
import SituationsPlanification from './SituationsPlanification.jsx';
import './Planification.v2.css';

const PlanificationTypes = {
  unit: UnitPlanification,
  ephemeris: EphemerisPlanification,
  situations: SituationsPlanification,
};

const Planification = () => {
  const { lessonId, parentType } = useParams();
  const Component = PlanificationTypes[parentType];

  return <Component lessonId={lessonId} parentType={parentType} />;
};

export default Planification;

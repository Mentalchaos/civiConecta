import { useContext } from 'react';
import PropTypes from 'prop-types';
import Visible from 'src/components/UI/Visible';
import useForm from 'src/hooks/useForm';
import { PlanificationContext } from '../context';
import PlanningFormInputs from './PlanningFormInputs';

const PlanificationForm = ({ type }) => {
  const { actions, states } = useContext(PlanificationContext);
  const planning = states.lesson.planning;


  const { values, handleInputChange } = useForm({
    topic: planning.topic,
    keywords: planning.keywords,
    studentMaterials: planning.materials.student.join(','),
    teacherMaterials: planning.materials.teacher.join(','),
    startActivity: planning.startActivity,
    mainActivity: planning.mainActivity,
    endActivity: planning.endActivity,
    description: planning.description,
    date: states.lesson.date,
    objective: states.lesson.description
  });

  const handleSubmit = evt => {
    evt.preventDefault();

    const payload = {
      topic: values.topic,
      keywords: values.keywords,
      studentMaterials: values.studentMaterials,
      teacherMaterials: values.teacherMaterials,
      startActivity: values.startActivity,
      mainActivity: values.mainActivity,
      endActivity: values.endActivity,
      description: values.description,
      date: values.date,
      objective: values.objective
    };

    actions.updatePlanification(payload);
    alert('Se han guardado sus cambios!');
  };

  return (
    <PlanningFormInputs />
  );
};

// Proptypes here were giving some troubles
PlanificationForm.propTypes = {
  type: PropTypes.oneOf(['lesson', 'situations', 'ephemeris']),
};

PlanificationForm.defaultProps = {
  type: 'lesson',
};

export default PlanificationForm;

import { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from 'src/components/UI/Button';
import Visible from 'src/components/UI/Visible';
import useForm from 'src/hooks/useForm';
import { PlanificationContext } from '../context';

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
    date: planning.date,
  });

  const handleSubmit = evt => {
    evt.preventDefault();

    const payload = {
      topic: values.topic,
      keywords: values.keywords.split(','),
      studentMaterials: values.studentMaterials,
      teacherMaterials: values.teacherMaterials,
      startActivity: values.startActivity,
      mainActivity: values.mainActivity,
      endActivity: values.endActivity,
      description: values.description,
      date: values.date,
    };

    actions.updatePlanification(payload);
  };

  return (
    <form className="planning-form" onSubmit={handleSubmit}>
      <div className="form-group planning">
        <label>Tema clase:</label>
        <input type="text" name="topic" value={values.topic} onChange={handleInputChange} />
      </div>
      <div className="form-group planning">
        <label>Conceptos a tratar:</label>
        <input type="text" name="keywords" value={values.keywords} onChange={handleInputChange} />
      </div>
      <div className="form-group planning">
        <label>Materiales:</label>
        <div className="group__container-materials">
          <label>Docente:</label>
          <input
            type="text"
            name="teacherMaterials"
            value={values.teacherMaterials}
            onChange={handleInputChange}
            placeholder="Materiales Docente"
          />
          <label>Estudiante:</label>
          <input
            type="text"
            name="studentMaterials"
            value={values.studentMaterials}
            onChange={handleInputChange}
            placeholder="Materiales Estudiante"
          />
        </div>
      </div>
      <div className="form-group planning">
        <label>Actividad de inicio:</label>
        <input type="text" name="startActivity" value={values.startActivity} onChange={handleInputChange} />
      </div>
      <div className="form-group planning">
        <label>Actividad central:</label>
        <input type="text" name="mainActivity" value={values.mainActivity} onChange={handleInputChange} />
      </div>
      <div className="form-group planning">
        <label>Actividad de cierre:</label>
        <input type="text" name="endActivity" value={values.endActivity} onChange={handleInputChange} />
      </div>
      <Visible condition={type === 'ephemeris'}>
        <div className="form-group planning">
          <label>Fecha:</label>
          <input placeholder="AÑO-MES-DIA" type="text" name="date" value={values.date} onChange={handleInputChange} />
        </div>
      </Visible>
      <div className="form-group button">
        <Button
          onClick={handleSubmit}
          type="submit"
          disabled={states.isLoading}
          customClasses="planification-form__button"
          text={states.isLoading ? 'Guardando...' : 'Guardar'}
        />
      </div>
    </form>
  );
};

PlanificationForm.propTypes = {
  type: PropTypes.oneOf(['lesson', 'situation', 'ephemeris']),
};

PlanificationForm.defaultProps = {
  type: 'lesson',
};

export default PlanificationForm;

import PropTypes from 'prop-types';
import Button from '../Button';
import Visible from '../Visible';
import useForm from 'src/hooks/useForm';
import './PlanningForm.css';
import Situations from 'src/components/Events/Situations';

const initialState = {
  title: '',
  description: 'null',
  objective: 'null',
  teacherMaterials: '',
  studentMaterials: '',
  startActivity: '',
  mainActivity: '',
  endActivity: '',
  topic: '',
  date: 'null',
  keywords: ' ',
};

const toArray = x => x.trim().split(',');

const PlanningForm = ({
  unit,
  eventGradeSelected,
  fetching,
  handleHiddeModal,
  onHandleSubmit,
  needObjectives,
  needDescription,
  type,
}) => {
  const { values, handleInputChange, reset, self } = useForm(initialState);
  const isEphemeris = type === 'ephemeris';
  const isSituations = type === 'situations';

  const handleSubmit = evt => {
    evt.preventDefault();
    const planning = {
      topic: values.topic,
      materials: {
        teacher: toArray(values.teacherMaterials),
        student: toArray(values.studentMaterials),
      },
      startActivity: values.startActivity,
      mainActivity: values.mainActivity,
      endActivity: values.endActivity,
      keywords: toArray(values.keywords),
    };
    const payload = {
      title: values.title,
      description: needDescription ? values.description : 'Sin descripcion',
      objective: needObjectives ? values.objective : 'Sin objetivos',
      date: values.date,
      grade: eventGradeSelected || null,
      number: type === 'class' ? values.number : null,
      planning,
      unit,
    };
    onHandleSubmit(payload).then(reset);
  };

  return (
    <form className="planning-form" onSubmit={handleSubmit}>
      <div className="row">
        <Visible condition={type === 'class'}>
          <div className="form-group">
            <label>Clase Nº:</label>
            <input onChange={handleInputChange} name="number" type="text" required />
          </div>
        </Visible>
        <div className="form-group w80">
          <label>Título de la clase:</label>
          <input onChange={handleInputChange} name="title" type="text" required />
        </div>
      </div>
      <Visible condition={needObjectives}>
        <div className="row">

          <div className="form-group w50">
            <label>Conceptos a tratar:</label>
            <input onChange={handleInputChange} type="text" name="keywords" />
          </div>
          <div className="form-group w50">
            <label>Objetivo:</label>
            <input onChange={handleInputChange} name="objective" type="text" required />
          </div>
        </div>
      </Visible>
      <Visible condition={!isEphemeris}>
        <div>
          <div className="form-group">
            <label>Conceptos a tratar:</label>
            <input onChange={handleInputChange} type="text" name="keywords" />
          </div>
        </div>
      </Visible>
      <div className="row">
        <Visible condition={needDescription}>
          <div className="form-group w50">
            <label>Objetivo:</label>
            <input onChange={handleInputChange} name="description" type="text" required />
          </div>
        </Visible>
        <div className="form-group w50">
          <label>Tema clase:</label>
          <input onChange={handleInputChange} name="topic" type="text" required />
        </div>
      </div>

      <div className="row">
        <div className="form-group w50">
          <label>Actividad de inicio:</label>
          <input onChange={handleInputChange} name="startActivity" type="text" required />
        </div>
        <div className="form-group w50">
          <label>Actividad central:</label>
          <input onChange={handleInputChange} name="mainActivity" type="text" required />
        </div>
      </div>
      <div className="form-group">
        <label>Actividad de cierre:</label>
        <input onChange={handleInputChange} name="endActivity" type="text" required />
      </div>

      <Visible condition={isEphemeris}>
        <div className="form-group">
          <label>Fecha:</label>
          <input
            placeholder="DIA-MES"
            onChange={handleInputChange}
            name="date"
            type="text"
            required
          />
        </div>
      </Visible>
      <div>
        <div className="material-inputs">
          <p>Materiales:</p>
          <div className="row">
            <div className="form-group w50">
              <label>Docente</label>
              <input
                onChange={handleInputChange}
                name="teacherMaterials"
                type="text"
                placeholder="materiales del docente"
                required
              />
            </div>
            <div className="form-group w50">
              <label>Estudiante</label>
              <input
                onChange={handleInputChange}
                name="studentMaterials"
                type="text"
                placeholder="materiales del estudiante"
                required
              />
            </div>
          </div>
        </div>
        <div className="planning-form__button-section">
          <Button
            type="submit"
            customClasses="planning-form__button"
            disabled={fetching || !self.states.isCompletedForm}
          >
            Continuar
          </Button>
          <Button
            onClick={() => handleHiddeModal(false)}
            customClasses="planning-form__button"
            disabled={fetching}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </form>
  );
};

PlanningForm.propTypes = {
  fetching: PropTypes.bool,
  handleHiddeModal: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  needObjetives: PropTypes.bool,
  needDescription: PropTypes.bool,
  type: PropTypes.string.isRequired,
  eventGradeSelected: PropTypes.any,
};

PlanningForm.defaultProps = {
  needObjectives: false,
  needDescription: false,
  unit: null,
  eventGradeSelected: null,
};

export default PlanningForm;

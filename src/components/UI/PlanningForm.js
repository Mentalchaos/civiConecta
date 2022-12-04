import useForm from 'src/hooks/useForm';
import { createClass } from 'src/services/admin/classes.request';
import Button from './Button';

const PlanningForm = ({ unit, grade, handleHiddeModal, needObjetives }) => {
  const { values, handleInputChange, reset } = useForm({
    number: 0,
    title: '',
    description: '',
    objetives: '',
    teacherMaterials: '',
    studentMaterials: '',
    startActivity: '',
    mainActivity: '',
    endActivity: '',
    topic: '',
  });

  const defaultButtonStyles = {
    backgroundColor: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 20px',
    borderRadius: '20px',
  };

  const cancelButtonStyles = {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    padding: '5px 20px',
    borderRadius: '20px',
    border: '1px solid var(--color-secondary)',
  };

  const {
    number,
    title,
    description,
    objetives,
    topic,
    teacherMaterials,
    studentMaterials,
    startActivity,
    mainActivity,
    endActivity,
  } = values;

  const handleSubmit = e => {
    e.preventDefault();
    const planning = {
      topic,
      materials: {
        teacher: [],
        student: [],
      },
      startActivity,
      mainActivity,
      endActivity,
    };
    planning.materials.teacher.push(teacherMaterials);
    planning.materials.student.push(studentMaterials);
    const payload = {
      number,
      title,
      description,
      objetives,
      planning,
      unit,
      grade,
    };
    createClass(payload).then(resp => console.log(resp));
  };

  return (
    <form style={{ width: '100%' }}>
      <div className="row">
        <div style={{ width: '20%' }} className="form-group">
          <label>Número clase:</label>
          <input
            style={{ width: 'auto', padding: 'auto' }}
            onChange={handleInputChange}
            name="number"
            type="number"
          />
        </div>
        <div style={{ width: '80%' }} className="form-group">
          <label>Título de la clase:</label>
          <input onChange={handleInputChange} name="title" type="text" />
        </div>
      </div>
      {needObjetives && (
        <div className="form-group">
          <label>Objetivos:</label>
          <input onChange={handleInputChange} name="objetives" type="text" />
        </div>
      )}
      <div className="row">
        <div style={{ width: '50%' }} className="form-group">
          <label>Descripción:</label>
          <input onChange={handleInputChange} name="description" type="text" />
        </div>
        <div style={{ width: '50%' }} className="form-group">
          <label>Tema clase:</label>
          <input onChange={handleInputChange} name="topic" type="text" />
        </div>
      </div>

      <div className="row">
        <div style={{ width: '50%' }} className="form-group">
          <label>Actividad de inicio:</label>
          <input
            onChange={handleInputChange}
            name="startActivity"
            type="text"
          />
        </div>
        <div style={{ width: '50%' }} className="form-group">
          <label>Actividad central:</label>
          <input onChange={handleInputChange} name="mainActivity" type="text" />
        </div>
      </div>
      <div className="form-group">
        <label>Actividad de cierre:</label>
        <input onChange={handleInputChange} name="endActivity" type="text" />
      </div>
      <div>
        <div className="material-inputs">
          <p style={{ margin: 0 }}>Materiales:</p>
          <div className="row">
            <div style={{ width: '50%' }} className="form-group">
              <label>Docente</label>
              <input
                onChange={handleInputChange}
                name="teacherMaterials"
                type="text"
                placeholder="materiales del docente"
              />
            </div>
            <div style={{ width: '50%' }} className="form-group">
              <label>Estudiante</label>
              <input
                onChange={handleInputChange}
                name="studentMaterials"
                type="text"
                placeholder="materiales del estudiante"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 50,
            marginTop: 20,
          }}
        >
          <Button
            onClick={() => handleHiddeModal(false)}
            customStyles={cancelButtonStyles}
            text="Cancelar"
          />
          <Button
            onClick={handleSubmit}
            customStyles={defaultButtonStyles}
            text="Continuar"
          />
        </div>
      </div>
    </form>
  );
};

export default PlanningForm;

import Button from './Button';
import useForm from 'src/hooks/useForm';

const PlanningForm = ({ unit, grade, fetching, handleHiddeModal, onHandleSubmit, needObjetives, needDescription, type }) => {
  const { values, handleInputChange } = useForm({
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
    date: ''
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
    date
  } = values;

  console.log('type', type);

  const handleSubmit = e => {
    e.preventDefault();
    const planning = {
      topic,
      materials: {
        teacher: teacherMaterials.trim().split(','),
        student: studentMaterials.trim().split(','),
      },
      startActivity,
      mainActivity,
      endActivity,
    };
    const payload = {
      number,
      title,
      description: needDescription ? description : 'No description',
      objetives: needObjetives ? objetives : 'No objetives',
      planning,
      unit,
      grade,
      date
    };
    onHandleSubmit(payload);
  };

  return (
    <form style={{ width: '100%' }}>
      <div className="row">
        <div style={{ width: '20%' }} className="form-group">
          <label>Número:</label>
          <input
            style={{ width: 'auto', padding: 'auto' }}
            onChange={handleInputChange}
            name="number"
            type="number"
            autoFocus={true}
            required
          />
        </div>
        <div style={{ width: '80%' }} className="form-group">
          <label>Título de la clase:</label>
          <input onChange={handleInputChange} name="title" type="text" required />
        </div>
      </div>
      {needObjetives && (
        <div className="form-group">
          <label>Objetivo:</label>
          <input onChange={handleInputChange} name="objetives" type="text" required />
        </div>
      )}
      <div className="row">
        {needDescription && (
          <div style={{ width: '50%' }} className="form-group">
            <label>Objetivo:</label>
            <input onChange={handleInputChange} name="description" type="text" required />
          </div>
        )}
        <div style={{ width: '50%' }} className="form-group">
          <label>Tema clase:</label>
          <input onChange={handleInputChange} name="topic" type="text" required />
        </div>
      </div>

      <div className="row">
        <div style={{ width: '50%' }} className="form-group">
          <label>Actividad de inicio:</label>
          <input onChange={handleInputChange} name="startActivity" type="text" required />
        </div>
        <div style={{ width: '50%' }} className="form-group">
          <label>Actividad central:</label>
          <input onChange={handleInputChange} name="mainActivity" type="text" required />
        </div>
      </div>
      <div className="form-group">
        <label>Actividad de cierre:</label>
        <input onChange={handleInputChange} name="endActivity" type="text" required />
      </div>
      { type == "ephemeris" &&
        <div className="form-group">
          <label>Fecha:</label>
          <input placeholder="AÑO-MES-DIA" onChange={handleInputChange} name="date" type="text" required />
        </div>
        }
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
                required
              />
            </div>
            <div style={{ width: '50%' }} className="form-group">
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
            disabled={fetching}
          />
          <Button onClick={handleSubmit} customStyles={defaultButtonStyles} text="Continuar" disabled={fetching} />
        </div>
      </div>
    </form>
  );
};

export default PlanningForm;

import { useEffect } from 'react';
import useForm from 'src/hooks/useForm';
import Button from './Button';

const PlanningForm = ({ unit, handleHiddeModal }) => {
  const { values, handleInputChange, reset } = useForm({
    topic: '',
    title: '',
    description: '',
    objetives: '',
    teacherMaterials: '',
    studentMaterials: '',
    startActivity: '',
    mainActivity: '',
    endActivity: '',
  });

  useEffect(() => {
    console.log(unit);
  }, []);

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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Tema clase:</label>
          <input onChange={handleInputChange} name="topic" type="text" />
        </div>

        <div className="form-group">
          <label>Actividad de inicio:</label>
          <input
            onChange={handleInputChange}
            name="startActivity"
            type="text"
          />
        </div>
        <div className="form-group">
          <label>Actividad central:</label>
          <input onChange={handleInputChange} name="mainActivity" type="text" />
        </div>
        <div className="form-group">
          <label>Actividad de cierre:</label>
          <input onChange={handleInputChange} name="endActivity" type="text" />
        </div>
        <div>
          <div className="material-inputs">
            <p>Materiales:</p>
            <div className="form-group">
              <label>Docente</label>
              <input
                onChange={handleInputChange}
                name="teacherMaterials"
                type="text"
                placeholder="materiales del docente"
              />
            </div>
            <div className="form-group">
              <label>Estudiante</label>
              <input
                onChange={handleInputChange}
                name="studentMaterials"
                type="text"
                placeholder="materiales del estudiante"
              />
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
    </div>
  );
};

export default PlanningForm;

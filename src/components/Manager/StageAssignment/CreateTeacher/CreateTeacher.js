import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import './CreateTeacher.css';

const CreateTeacher = ({ setAddTeacher }) => {
  const buttonStyles = {
    backgroundColor: 'var(--color-secondary)',
    fontSize: '14px',
    borderRadius: '20px',
    color: '#fff',
    padding: '3px 30px',
  };
  const buttonCancelStyles = {
    backgroundColor: '#fff',
    fontSize: '14px',
    borderRadius: '20px',
    color: 'var(--color-secondary)',
    border: '1px solid var(--color-secondary)',
    padding: '3px 30px',
  };

  const handleAddTeacher = e => {
    e.preventDefault();
    console.log('Accion para agregar docente');
  };

  return (
    <Modal
      style={{ padding: '40px 100px', marginTop: 120 }}
      title={'Creación docente'}
      subtitle="Llenar el formulario."
    >
      <form className="form-container">
        <div className="form-group-container">
          <label>Datos personales</label>
          <div className="input-group">
            <input type="text" placeholder="Nombres" />
            <input type="text" placeholder="Apellidos" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Rut" />
            <input type="text" placeholder="Profesión y Especialidad" />
          </div>
        </div>
        <div className="form-group-container">
          <label>Datos de contacto</label>
          <div className="input-group">
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Fono personal" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Región" />
            <input type="text" placeholder="Comuna" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Calle" />
            <input type="text" placeholder="Número" />
          </div>
          <div className="form-actions">
            <Button
              onClick={() => setAddTeacher(false)}
              customStyles={buttonCancelStyles}
              text="Cancelar"
            />
            <Button
              onClick={handleAddTeacher}
              customStyles={buttonStyles}
              text="Continuar"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default CreateTeacher;

import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import useForm from 'src/hooks/useForm';
import './CreateTeacher.css';

const CreateTeacher = ({ setAddTeacher, onHandleAddTeacher, ...props }) => {
  const { values, handleInputChange } = useForm({
    name: '',
    rut: '',
    profession: '',
    email: '',
    phone: '',
    region: '',
    commune: '',
    street: '',
    houseNumber: '',
  });

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
    const anyValueEmpty = Object.values(values).some(
      item => item.trim() === '',
    );
    if (anyValueEmpty) return;
    onHandleAddTeacher(values);
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
            <input
              name="name"
              autoFocus={true}
              value={values.name}
              type="text"
              placeholder="Nombre completo"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <input
              name="rut"
              onChange={handleInputChange}
              value={values.rut}
              type="text"
              placeholder="Rut"
            />
            <input
              name="profession"
              onChange={handleInputChange}
              value={values.profession}
              type="text"
              placeholder="Profesión y Especialidad"
            />
          </div>
        </div>
        <div className="form-group-container">
          <label>Datos de contacto</label>
          <div className="input-group">
            <input
              name="email"
              onChange={handleInputChange}
              value={values.email}
              type="text"
              placeholder="E-mail"
            />
            <input
              name="phone"
              onChange={handleInputChange}
              value={values.phone}
              type="text"
              placeholder="Fono personal"
            />
          </div>
          <div className="input-group">
            <input
              name="region"
              onChange={handleInputChange}
              value={values.region}
              type="text"
              placeholder="Región"
            />
            <input
              name="commune"
              onChange={handleInputChange}
              value={values.commune}
              type="text"
              placeholder="Comuna"
            />
          </div>
          <div className="input-group">
            <input
              name="street"
              onChange={handleInputChange}
              value={values.street}
              type="text"
              placeholder="Calle"
            />
            <input
              name="houseNumber"
              onChange={handleInputChange}
              value={values.houseNumber}
              type="text"
              placeholder="Número"
            />
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

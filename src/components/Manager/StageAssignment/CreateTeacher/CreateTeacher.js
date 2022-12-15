import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import useForm from 'src/hooks/useForm';
import './CreateTeacher.css';

const CreateTeacher = ({
  setAddTeacher,
  onHandleAddTeacher,
  errorMessage,
  fetching,
  ...props
}) => {
  const { values, handleInputChange } = useForm({
    name: '',
    email: '',
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
    const { name, email } = values;
    if ((!name, !email)) return;
    onHandleAddTeacher(values);
  };

  return (
    <Modal
      style={{ padding: '40px 100px', marginTop: '150px' }}
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
            <input
              name="email"
              onChange={handleInputChange}
              value={values.email}
              type="text"
              placeholder="E-mail"
            />
          </div>
          {errorMessage.length > 0 && (
            <div>
              <h1
                style={{
                  marginLeft: 20,
                  fontWeight: 500,
                  color: 'red',
                  fontSize: '13px',
                }}
              >
                {errorMessage}
              </h1>
            </div>
          )}
          <div className="form-actions">
            <Button
              onClick={() => setAddTeacher(false)}
              customStyles={buttonCancelStyles}
              text="Cancelar"
              disabled={fetching}
            />
            <Button
              onClick={handleAddTeacher}
              customStyles={buttonStyles}
              text="Continuar"
              disabled={fetching}
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default CreateTeacher;

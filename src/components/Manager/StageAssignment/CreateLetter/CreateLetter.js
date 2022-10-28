import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import './CreateLetter.css';

const CreateLetter = ({ setShowAddLetter }) => {
  const buttonStyles = {
    background: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 40px',
    borderRadius: '20px',
    fontSize: '14px',
    marginTop: '20px',
  };

  const buttonStylesCancel = {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    border: '1px solid var(--color-secondary)',
    padding: '5px 40px',
    borderRadius: '20px',
    fontSize: '14px',
    marginTop: '20px',
  };

  return (
    <Modal title="Crear letra" style={{ marginTop: '15rem' }}>
      <span className="custom-subtitle">
        Seleccione una Letra para{' '}
        <strong>5° básico y cantidad de alumnos</strong>.
      </span>
      <div className="select-section">
        <p>Letra</p>
        <p>Numero de estudiantes</p>
      </div>
      <div className="actions">
        <Button
          onClick={() => setShowAddLetter(false)}
          customStyles={buttonStylesCancel}
          text="Cancelar"
        />
        <Button customStyles={buttonStyles} text="Continuar" />
      </div>
    </Modal>
  );
};

export default CreateLetter;

import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import useForm from 'src/hooks/useForm';
import './CreateLetter.css';

const CreateLetter = ({ setShowAddLetter, onHandleAddLetter }) => {
  const { values, handleInputChange } = useForm({
    letter: '',
  });

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  const buttonStyles = {
    background: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 30px',
    borderRadius: '20px',
    marginTop: '50px',
  };

  const buttonStylesCancel = {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    border: '1px solid var(--color-secondary)',
    padding: '5px 30px',
    borderRadius: '20px',
    marginTop: '50px',
  };

  const handleAddLetter = e => {
    e.preventDefault();
    onHandleAddLetter(values);
    setShowAddLetter(false);
  };

  return (
    <Modal
      title="Crear letra"
      style={{ marginTop: '15rem', padding: '40px 120px 40px 120px' }}
    >
      <span className="custom-subtitle">
        Seleccione una Letra para{' '}
        <strong>5° básico y cantidad de alumnos</strong>.
      </span>
      <div className="section__select-actions">
        <div className="select-section">
          <div className="section__select-letter">
            <p>Letra</p>
            <select
              placeholder="Nivel"
              onChange={handleInputChange}
              name="letter"
              className="section__letter-selection"
            >
              {letters.map(letter => {
                return (
                  <option key={letter} value={letter}>
                    {letter}
                  </option>
                );
              })}
            </select>
            <Button
              onClick={() => setShowAddLetter(false)}
              customStyles={buttonStylesCancel}
              text="Cancelar"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateLetter;

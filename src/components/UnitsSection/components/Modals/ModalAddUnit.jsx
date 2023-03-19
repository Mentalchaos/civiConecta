import { useContext, useEffect } from 'react';
import Modal from 'src/components/UI/Modal';
import Visible from 'src/components/UI/Visible';
import Button from 'src/components/UI/Button';
import { UnitContext } from '../../context';
import useForm from 'src/hooks/useForm';

const ModalAddUnit = () => {
  const { states, setters, actions } = useContext(UnitContext);
  const { values, handleInputChange, self } = useForm({
    number: 0,
    title: '',
    description: '',
    topicSelected: '',
  });

  useEffect(() => {}, []);

  const handleSubmit = evt => {
    evt.preventDefault();
    const payload = {
      number: values.number,
      title: values.title,
      description: values.description,
      grade: states.gradeSelected,
      topicId: values.topicSelected,
    };
    actions.createUnit(payload);
  };

  return (
    <Modal
      customClass="custom-modal add"
      title={`Agregar unidad a ${states.gradeToShow.level}`}
    >
      <form className="form_add-units" onSubmit={handleSubmit}>
        <Visible condition={states.error}>
          <div>
            <p>{states.error}</p>
          </div>
        </Visible>

        <div className="form-group">
          <label>Tema:</label>
          <select onChange={handleInputChange} name="topicSelected" required>
            <option value="null">Seleccione</option>
            {states.topics.map(t => (
              <option key={t.id} value={t.id}>
                {t.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Número unidad:</label>
          <input
            onChange={handleInputChange}
            value={values.number}
            name="number"
            type="number"
            autoFocus={true}
          />
        </div>
        <div className="form-group">
          <label>Título:</label>
          <input
            onChange={handleInputChange}
            value={values.title}
            name="title"
            type="text"
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <input
            onChange={handleInputChange}
            value={values.description}
            name="description"
            type="text"
          />
        </div>
        <div className="actions-container">
          <Button
            type="submit"
            customClasses="custom-button"
            disabled={states.isLoading || !self.states.isCompletedForm}
          >
            Continuar
          </Button>
          <Button
            onClick={() => setters.setOpenModalAddUnit(false)}
            customClasses="custom-button"
            disabled={states.isLoading}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalAddUnit;

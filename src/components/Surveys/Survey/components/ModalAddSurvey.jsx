import { useContext } from 'react';
import Modal from 'src/components/UI/Modal';
import Button from 'src/components/UI/Button';
import Visible from 'src/components/UI/Visible';
import { SurveyContext } from '../../context';

const ModalAddSurvey = () => {
  const { states, setters, actions } = useContext(SurveyContext);

  const handleSubmit = evt => {
    evt.preventDefault();
    actions.createCategory();
  };

  return (
    <Modal customClass="custom-modal">
      <form onSubmit={handleSubmit}>
        <p>Ingrese el nombre de la categoría que desea crear</p>
        <input
          autoFocus={true}
          className="modal-input"
          value={states.topic}
          onChange={e => setters.setTopic(e.target.value)}
        />
        <Visible condition={states.errorMessage}>
          <p className="warning-message">{states.errorMessage}</p>
        </Visible>
        <div className="buttons-inputs">
          <Button type="submit" disabled={!states.topic.length}>
            Crear
          </Button>
          <Button onClick={() => setters.setModal(false)}>Cerrar</Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalAddSurvey;

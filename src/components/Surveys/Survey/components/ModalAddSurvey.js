import { useContext } from 'react';
import Modal from 'src/components/UI/Modal';
import Button from 'src/components/UI/Button';
import Visible from 'src/components/UI/Visible';
import { SurveyContext } from '../../context';

const ModalAddSurvey = () => {
  const {states, setters, actions} = useContext(SurveyContext);

  return (
    <Modal customClass="custom-modal">
      <div>
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
          <Button onClick={actions.createCategory}>
            Crear
          </Button>
          <Button onClick={() => setters.setModal(false)}>
            Cerrar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddSurvey;

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
      <div>
          <p>Numero de unidad</p>
          <input
            autoFocus={true}
            className="modal-input"
            value={states.unitNumber}
            onChange={e => setters.setUnitNumber(e.target.value)}
          />
        </div>
        <div>
          <p>Titulo unidad</p>
          <input
            autoFocus={true}
            className="modal-input"
            value={states.topic}
            onChange={e => setters.setTopic(e.target.value)}
          />
        </div>
        <div>
          <p>Descripción de unidad</p>
          <input
            autoFocus={true}
            className="modal-input"
            value={states.description}
            onChange={e => setters.setDescription(e.target.value)}
          />
        </div>
        <div>
          <p>Objetivo de unidad</p>
          <input
            autoFocus={true}
            className="modal-input"
            value={states.objective}
            onChange={e => setters.setObjective(e.target.value)}
          />
        </div>
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

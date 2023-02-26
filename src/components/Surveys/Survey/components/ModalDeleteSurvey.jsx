import { useContext } from 'react';
import Modal from 'src/components/UI/Modal';
import Button from 'src/components/UI/Button';
import Visible from 'src/components/UI/Visible';
import { SurveyContext } from '../../context';

const ModalDeleteSurvey = () => {
  const { states, actions, setters } = useContext(SurveyContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    actions.removeCategory();
  };

  return (
    <Modal customClass="custom-modal">
      <form onSubmit={handleSubmit}>
        <p>Seleccione la categoría que desea eliminar</p>
        <p className="warning-message">
          Para eliminar una categoria, ésta no debe tener preguntas asociadas.
        </p>
        <select
          name="select"
          className="remove-topic-select"
          onChange={e => setters.setSelectValue(e.target.value)}
        >
          <option value="null">Seleccionar</option>
          {states.topics.map(data => (
            <option key={data.id} value={data.id}>
              {data.title}
            </option>
          ))}
        </select>
        <Visible condition={states.errorMessage}>
          <p className="warning-message">{states.errorMessage}</p>
        </Visible>
        <div className="buttons-inputs">
          <Button disabled={!states.selectValue} type="submit">
            Eliminar
          </Button>
          <Button onClick={() => setters.setRemoveTopicModal(false)}>
            Cerrar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalDeleteSurvey;

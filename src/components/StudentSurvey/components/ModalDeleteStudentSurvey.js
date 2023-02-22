import { useContext } from 'react';
import Modal from 'src/components/UI/Modal';
import Button from 'src/components/UI/Button';
import { StudentSurveyContext } from '../context';

const ModalDeleteStudentSurvey = () => {
  const { states, actions, setters } = useContext(StudentSurveyContext);

  return (
    <Modal customClass="student-modal">
      <div>
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
        <div className="buttons-inputs">
          <Button disabled={!states.selectValue} onClick={() => actions.removeCategory()}>
            Eliminar
          </Button>
          <Button onClick={() => setters.setRemoveTopicModal(false)}>
            Cerrar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteStudentSurvey;

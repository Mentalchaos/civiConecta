import { useContext } from 'react';
import Modal from 'src/components/UI/Modal';
import Button from 'src/components/UI/Button';
import { StudentSurveyContext } from '../context';

const ModalAddStudentSurvey = () => {
  const {states, setters, actions} = useContext(StudentSurveyContext);

  return (
    <Modal customClass="student-modal">
      <div>
        <p>Ingrese el nombre de la categoría que desea crear</p>
        <input
          autoFocus={true}
          className="modal-input"
          value={states.topic}
          onChange={e => setters.setTopic(e.target.value)}
        />
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

export default ModalAddStudentSurvey;

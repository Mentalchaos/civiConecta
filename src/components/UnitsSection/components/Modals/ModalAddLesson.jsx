import { useContext } from 'react';
import Modal from 'src/components/UI/Modal';
import PlanningForm from 'src/components/UI/PlanningForm';
import { UnitManagerContext } from '../../context';

const ModalAddLesson = () => {
  const { states, setters, actions } = useContext(UnitManagerContext);

  return (
    <Modal customClass="custom-modal add">
      <PlanningForm
        type="class"
        unit={states.unit.id}
        handleHiddeModal={setters.closeModalAddLesson}
        onHandleSubmit={actions.addLesson}
        needObjectives
        fetching={false}
      />
    </Modal>
  );
};

export default ModalAddLesson;

import { useContext } from 'react';
import Modal from 'src/components/UI/Modal';
import PlanningForm from 'src/components/UI/PlanningForm';
import { UnitManagerContext } from '../../context';

const ModalAddClass = () => {
  const { states, setters, actions } = useContext(UnitManagerContext);

  return (
    <Modal title="Agregar Clase" customClass="custom-modal add">
      <PlanningForm
        type="class"
        unit={states.number}
        handleHiddeModal={setters.closeModalAddClass}
        onHandleSubmit={actions.addClass}
        needObjectives
        fetching={false}
      />
    </Modal>
  );
};

export default ModalAddClass;

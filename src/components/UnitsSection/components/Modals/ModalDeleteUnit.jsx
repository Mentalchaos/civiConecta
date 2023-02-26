import { useContext } from 'react';
import Modal from 'src/components/UI/Modal';
import Button from 'src/components/UI/Button';
import Visible from 'src/components/UI/Visible';
import { UnitContext } from '../../context';

const ModalDeleteUnit = () => {
  const { states, setters, actions } = useContext(UnitContext);

  const handleDeleteUnit = () => {
    actions.deleteUnit();
  };

  const handleCancel = () => {
    setters.setOpenModalDeleteUnit(false);
    setters.setError('');
  };

  return (
    <Modal
      title="Eliminar unidad"
      subtitle="Para eliminar la unidad, ésta no debe tener clases asociadas."
      customClass="custom-modal delete-unit"
    >
      <Visible condition={states.error}>
        <p className="error-message">{states.error}</p>
      </Visible>
      <div className="actions">
        <Button
          className="custom-button"
          onClick={handleDeleteUnit}
          disabled={states.isLoading}
        >
          Continuar
        </Button>
        <Button
          className="custom-button-cancel"
          onClick={handleCancel}
          disabled={states.isLoading}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDeleteUnit;

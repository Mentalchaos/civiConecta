import { useContext, useEffect } from 'react';
import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import Visible from 'src/components/UI/Visible';
import { ManagerContext } from '../context';

import './index.css';

const ModalConfirmAction = () => {
  const { states, setters, actions } = useContext(ManagerContext);

  useEffect(() => {
    setters.setError('');
  }, []);

  const buttonStyles = {
    default: {
      backgroundColor: 'var(--color-secondary)',
      color: '#fff',
      padding: '5px 30px',
      borderRadius: '20px',
    },
  };

  return (
    <Modal
      customClass="modal-content confirm-action"
      title={
        states.establishmentSelected.active
          ? 'Deshabilitar institución'
          : 'Habilitar institución'
      }
      subtitle={
        states.establishmentSelected.active
          ? 'Deseas deshabilitar el elemento seleccionado?'
          : 'Deseas habilitar el elemento seleccionado?'
      }
    >
      <div className="container-actions">
        <Button
          text="Continuar"
          onClick={() => actions.updateActiveEstablishment()}
          customStyles={buttonStyles.default}
          disabled={states.isFetching}
        />
        <Button
          text="Cancelar"
          onClick={() => setters.setShowModalConfirmActive(false)}
          customStyles={buttonStyles.default}
          disabled={states.isFetching}
        />
      </div>
      <Visible condition={states.error && !states.isFetching}>
        <span className="confirm-action-error">{states.error}</span>
      </Visible>
    </Modal>
  );
};

export default ModalConfirmAction;

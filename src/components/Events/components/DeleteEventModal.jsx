import React, { useContext } from 'react';
import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import { EventContext } from 'src/components/Events/context';
import './index.css';

const styles = {
  defaultButton: {
    backgroundColor: 'var(--color-secondary)',
    borderRadius: '20px',
    color: '#fff',
    padding: '5px 30px',
  },
};

const DeleteEventModal = () => {
  const { states, setters, actions } = useContext(EventContext);
  const type = states.eventType === 2 ? 'situación emergente' : 'efeméride';

  return (
    <Modal
      customClass="modal-delete-event"
      title={`Eliminar ${type}`}
      subtitle="Deseas eliminar el evento seleccionado?"
    >
      <div className="container__modal-actions">
        <Button
          onClick={() => actions.deleteEventById(states.eventSelected.id)}
          text="Continuar"
          customStyles={styles.defaultButton}
        />
        <Button
          onClick={() => setters.setOpenModalDeleteEvent(false)}
          text="Cancelar"
          customStyles={styles.defaultButton}
        />
      </div>
    </Modal>
  );
};

export default DeleteEventModal;

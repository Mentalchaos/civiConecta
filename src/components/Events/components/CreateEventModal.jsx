import React, { useContext } from 'react';
import Modal from 'src/components/UI/Modal';
import PlanningForm from 'src/components/UI/PlanningForm';
import { EventContext } from '../context';
import './index.css';

const CreateEventModal = () => {
  const { states, setters, actions } = useContext(EventContext);
  const type = states.eventType === 2 ? 'situations' : 'ephemeris';

  return (
    <Modal customClass="create-event-modal">
      <PlanningForm
        type={type}
        needObjetives={false}
        handleHiddeModal={setters.setOpenModalAddEvent}
        onHandleSubmit={actions.addEvent}
        fetching={states.isFetching}
        needDescription={true}
      />
    </Modal>
  );
};

export default CreateEventModal;

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import './EventItem.css';
import { EventContext } from 'src/components/Events/context';

const EventItem = ({ id, title, description, files, editEvent }) => {
  const { setters } = useContext(EventContext);

  const eventSelected = () => {
    setters.setEventSelected({ id, title, description });
    setters.setOpenModalDeleteEvent(true);
  };

  return (
    <div className="event-container">
      <div className="event-texts">
        <p className="event-number">{id}</p>
        <button onClick={() => eventSelected()} type="button" className="event-delete-button">
          x
        </button>
        <div className="event-title">{title}</div>
        <div className="event-subtitle">{description}</div>
        <div className="event-subtitle"> documentos adjuntados: {files?.length || 0}</div>
      </div>
      <img onClick={editEvent} src={arrow} className="event-go-planning" alt="Go to planning icon" />
    </div>
  );
};

EventItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventItem;

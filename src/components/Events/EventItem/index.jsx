import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import './EventItem.css';
import { EventContext } from 'src/components/Events/context';

const EventItem = ({ id, title, description, files, editEvent, lessonId }) => {
  const { setters } = useContext(EventContext);

  const eventSelected = () => {
    setters.setEventSelected({ id, title, description, lessonId });
    setters.setOpenModalDeleteEvent(true);
  };

  const clippedDescription = description.slice(0, 90);
  const newDescription = clippedDescription + "...";

  return (
    <div className="event-container">
      <div className="event-texts">
        <div className='event-title-container'>
          <button onClick={() => eventSelected()} type="button" className="event-delete-button">
            x
          </button>
          <div className="event-title">{title}</div>
        </div>
        <div className="event-subtitle objective-subtitle">
          <p className="objective-text">Objetivo: </p>
          <p className="objective-description">{newDescription}</p>
        </div>
        <div className="event-documents">
          <p>Documentos adjuntados: </p>
          <p>{files?.length || 0}</p>
        </div>
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

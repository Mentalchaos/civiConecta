import React from 'react';
import { EventContext } from './context';
import Event from './Event';
import useEvents from './useEvents';
import { useNavigate } from 'react-router-dom';

const createEventTypes = (eventType, Layout) => () => {
  const navigate = useNavigate();
  const { states, setters, actions } = useEvents(eventType);

  const handleEditEvents = eventId => () => {
    navigate(`events/${eventType}/${eventId}`);
  };

  return (
    <EventContext.Provider value={{ states, setters, actions }}>
      <Layout>
        <Event eventType={eventType} onEditEvent={handleEditEvents} />
      </Layout>
    </EventContext.Provider>
  );
};

export default createEventTypes;

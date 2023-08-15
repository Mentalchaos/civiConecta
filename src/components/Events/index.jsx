import React from 'react';
import { EventContext } from './context';
import Event from './Event';
import useEvents from './useEvents';
import { useNavigate } from 'react-router-dom';
import * as lessonRequest from 'src/services/admin/lesson.request.js';

const createEventTypes = (eventType, Layout) => () => {
  const navigate = useNavigate();
  const { states, setters, actions } = useEvents(eventType);

  const handleEditEvents = eventId => () => {
    async function fn() {
      const response = await lessonRequest.getLessonByEventId(eventId);
      const { lesson } = response;

      navigate(`lesson/${lesson.id}`);
    }

    fn();
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

import { useState, useEffect } from 'react';
import * as gradeRequest from 'src/services/admin/grades.request';
import createServices from '../../services/admin/event.request';
import { fetchLoading } from 'src/utils/hookUtil';

const useEvents = eventType => {
  const [events, setEvents] = useState([]);
  const [grades, setGrades] = useState([]);
  const [gradeSelected, setGradeSelected] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');
  const [openModalAddEvent, setOpenModalAddEvent] = useState(false);
  const [openModalDeleteEvent, setOpenModalDeleteEvent] = useState(false);
  const [eventSelected, setEventSelected] = useState({});

  const wrapRequest = fetchLoading(setIsFetching);

  useEffect(() => {
    async function fn() {
      const grades = await gradeRequest.getGrades().then(resp => resp.grades);
      setGrades(grades);
    }
    fn();
  }, []);

  return {
    states: {
      events,
      grades,
      gradeSelected,
      isFetching,
      openModalAddEvent,
      openModalDeleteEvent,
      eventSelected,
      eventType,
      error,
      get isReadyToCreateEvent() {
        return !isFetching && gradeSelected;
      },
      get hasNoEventWhitinGrade() {
        return gradeSelected && !isFetching && !events.length;
      },
    },
    setters: {
      setGradeSelected,
      setIsFetching,
      setOpenModalAddEvent,
      setOpenModalDeleteEvent,
      setEventSelected,
    },
    actions: {
      getEvents: wrapRequest(async grade => {
        const response = await createServices(eventType).getEventsByGrade(grade);
        setGradeSelected(grade);
        setEvents(response.events || []);
      }),
      addEvent: wrapRequest(async payload => {
        const response = await createServices(eventType).createEvent(payload);
        if (!response.ok) {
          setError(response.error);
        }
        setOpenModalAddEvent(false);
        setError('');
        setEvents([...events, response.event]);
      }),
      deleteEventById: wrapRequest(async eventId => {
        const response = await createServices(eventType).deleteEvent(eventId);

        if (!response.ok) {
          return setError(response.error);
        }

        const filteredEvents = events.filter(event => event.id !== eventSelected.id);
        setEvents(filteredEvents);
        setOpenModalDeleteEvent(false);
      }),
      sortedEvents: arr => {
        const sort = arr.sort(function (a, b) {
          var c = a.date;
          var d = b.date;
          return c - d;
        });
        return sort;
      },
    },
  };
};

export default useEvents;

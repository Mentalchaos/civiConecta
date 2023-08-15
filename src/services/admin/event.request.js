import config from 'src/config';
import http from '../helpers/http.helper';
import QueryString from '../helpers/QueryString';

const BASE_URL = config.baseURL;

const createServices = eventTypeId => {
  const getEventsByGrade = gradeId => {

    const url = `${BASE_URL}/events/${eventTypeId}/grade/${gradeId}`;
    return http.get(url);
  };

  const createEvent = payload => {
    const url = `${BASE_URL}/events/${eventTypeId}`;
    return http.post(url, payload);
  };

  const deleteEvent = eventId => {
    const url = `${BASE_URL}/events/${eventId}`;
    return http.delete(url);
  };

  const getEventById = eventId => {
    const url = `${BASE_URL}/events/${eventTypeId}/${eventId}`;
    return http.get(url);
  };

  const savePlanning = (lessonId, payload) => {
    const url = `${BASE_URL}/lessons/${lessonId}`;
    return http.put(url, payload)
  }

  return {
    getEventById,
    getEventsByGrade,
    createEvent,
    deleteEvent,
    savePlanning
  };
};

export default createServices;

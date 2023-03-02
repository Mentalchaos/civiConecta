import config from 'src/config';
import http from '../helpers/http.helper';
import QueryString from '../helpers/QueryString';

const BASE_URL = config.baseURL;

const createServices = (eventType) => {
  const getEventsByGrade = grade => {
    const qs = new QueryString()
      .add('grade', grade)
      .add('eventType', eventType);

    const url = `${BASE_URL}/events?${qs.query}`;
    return http.get(url);
  };

  const createEvent = payload => {
    const url = `${BASE_URL}/events?eventType=${eventType}`;
    return http.post(url, payload);
  };

  const deleteEvent = (eventId) => {
    const url = `${BASE_URL}/events/${eventId}`;
    return http.delete(url);
  };

  const getEventById = (eventId) => {
    const url = `${BASE_URL}/events/${eventId}`;
    return http.get(url);
  };

  return {
    getEventById,
    getEventsByGrade,
    createEvent,
    deleteEvent
  };
};


export default createServices;

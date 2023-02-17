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

  const updateEvent = (number, grade, payload) => {
    const qs = new QueryString()
      .add('grade', grade)
      .add('number', number)
      .add('eventType', eventType);

    const url = `${BASE_URL}/events?${qs.query}`;
    return http.put(url, payload);
  };

  const deleteEvent = (number, grade) => {
    const qs = new QueryString()
      .add('number', number)
      .add('grade', grade);

    const url = `${BASE_URL}/events?${qs.query}`;
    return http.delete(url);
  };

  return {
    getEventsByGrade,
    createEvent,
    updateEvent,
    deleteEvent
  };
};


export default createServices;

import config from 'src/config';
import http from '../helpers/http.helper';
import QueryString from '../helpers/QueryString';

const BASE_URL = config.baseURL;
const eventType = config.constants.EventTypes.EPHEMERIS;

export const getExceptionsByGrade = grade => {
  const qs = new QueryString()
    .add('grade', grade)
    .add('eventType', eventType);

  const url = `${BASE_URL}/events?${qs.query}`;
  return http.get(url);
};

export const createException = payload => {
  const url = `${BASE_URL}/createException`;
  return http.post(url, payload);
};

export const updateException = (number, grade, payload) => {
  const qs = new QueryString()
    .add('grade', grade)
    .add('number', number);

  const url = `${BASE_URL}/updateException?${qs.query}`;
  return http.put(url, payload);
};

export const deleteException = (number, grade) => {
  const qs = new QueryString()
    .add('number', number)
    .add('grade', grade);

  const url = `${BASE_URL}/deleteException?${qs.query}`;
  return http.delete(url);
};

import { BASE_URL } from '../constants';
import http from '../helpers/http.helper';
import QueryString from '../helpers/QueryString';

export const getEventsByGrade = grade => {
  const url = `${BASE_URL}/getEventsByGrade?grade=${grade}`;
  return http.get(url);
};

export const createEvent = payload => {
  const url = `${BASE_URL}/createEvent`;
  return http.post(url, payload);
};

export const updateEvent = async (number, grade, payload) => {
  const qs = new QueryString()
    .add('number', number)
    .add('grade', grade);

  const url = `${BASE_URL}/updateEvent?${qs.query}`;
  return http.put(url, payload);
};

export const deleteEvent = async (number, grade) => {
  const qs = new QueryString()
    .add('number', number)
    .add('grade', grade);

  const url = `${BASE_URL}/deleteEvent?${qs.query}`;
  return http.delete(url);
};

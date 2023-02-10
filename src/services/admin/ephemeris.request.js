import { BASE_URL } from '../constants';
import http from '../helpers/http.helper';
import QueryString from '../helpers/QueryString';

export const getExceptionsByGrade = grade => {
  const url = `${BASE_URL}/getExceptionsByGrade?grade=${grade}`;
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

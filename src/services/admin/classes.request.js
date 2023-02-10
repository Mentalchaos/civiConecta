import { BASE_URL } from '../constants';
import http from '../helpers/http.helper';
import QueryString from '../helpers/QueryString';

export const getClassesByUnitAndGrade = (unit, grade) => {
  const qs = new QueryString()
    .add('unit', unit)
    .add('grade', grade);

  const url = `${BASE_URL}/getClassesByUnitAndGrade?${qs.query}`;
  return http.get(url);
};

export const createClass = payload => {
  return http.post(`${BASE_URL}/createClass`, payload);
};

export const updateClass = (number, unit, grade, payload) => {
  const qs = new QueryString()
    .add('number', number)
    .add('unit', unit)
    .add('grade', grade);

  const url = `${BASE_URL}/updateClass?${qs.query}`;
  return http.put(url, payload);
};

export const deleteClass = async (number, unit, grade) => {
  const qs = new QueryString()
    .add('number', number)
    .add('unit', unit)
    .add('grade', grade);

  const url = `${BASE_URL}/deleteClass?${qs.query}`;
  return http.delete(url);
};

import config from 'src/config';
import http from '../helpers/http.helper';
import QueryString from '../helpers/QueryString';

const BASE_URL = config.baseURL;

export const getUnitsByGrade = grade => {
  const url = `${BASE_URL}/getUnitsByGrade?grade=${grade}`;
  return http.get(url);
};

export const createUnit = payload => {
  const url = `${BASE_URL}/units`;
  return http.post(url, payload);
};

export const deleteUnit = (number, grade) => {
  const qs = new QueryString()
    .add('number', number)
    .add('grade', grade);

  const url = `${BASE_URL}/deleteUnit?${qs.query}`;
  return http.delete(url);
};

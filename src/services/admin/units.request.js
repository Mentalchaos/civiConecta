import { BASE_URL } from '../constants';
import http from '../helpers/http.helper';

export const getUnitsByGrade = grade => {
  const url = `${BASE_URL}/getUnitsByGrade?grade=${grade}`;
  return http.get(url);
};

export const createUnit = payload => {
  const url = `${BASE_URL}/units`;
  return http.post(url, payload);
};

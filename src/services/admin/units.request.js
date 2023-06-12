import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

export const getUnitsByGrade = gradeId => {
  const url = `${BASE_URL}/units/grade/${gradeId}`;
  return http.get(url);
};

export const createUnit = payload => {
  const url = `${BASE_URL}/units`;
  return http.post(url, payload);
};

export const deleteUnit = (unitId) => {
  const url = `${BASE_URL}/units/${unitId}`;
  return http.delete(url);
};

export const getUnit = (unitId) => {
  const url = `${BASE_URL}/units/${unitId}`;
  return http.get(url);
};

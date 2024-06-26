import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

export const getGrades = () => {
  const url = `${BASE_URL}/grades`;
  return http.get(url);
};

export const getLetters = () => {
  const url = `${BASE_URL}/grades/letters`;
  return http.get(url);
};

export const getTableTeachers = ( establishmentId ) => {
  const url = `${BASE_URL}/establishments/${establishmentId}/teachers`;
  return http.get(url);
}

import { BASE_URL } from '../constants';
import http from '../helpers/http.helper';

export const getGrades = () => {
  const url = `${BASE_URL}/getGrades`;
  return http.get(url);
};

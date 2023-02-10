import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

export const getGrades = () => {
  const url = `${BASE_URL}/getGrades`;
  return http.get(url);
};

import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

export const getSurveys = (type) => {
  const url = `${BASE_URL}/surveys/${type.toLowerCase()}`;
  return http.get(url);
};

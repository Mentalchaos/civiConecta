import { BASE_URL } from '../constants';
import http from '../helpers/http.helper';

export const getSurveys = () => {
  const url = `${BASE_URL}/getSurveysByType?type=Student`;
  return http.get(url);
};

import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

export const getSurveys = (type) => {
  const url = `${BASE_URL}/surveys/type/${type.toLowerCase()}`;
  return http.get(url);
};

export const getSurvey = (surveyId) => {
  const url = `${BASE_URL}/surveys/${surveyId}`;
  return http.get(url);
};

export const saveSurvey = (type, topicId, title, alternatives) => {
  const url = `${BASE_URL}/surveys/${type.toLowerCase()}/${topicId}`;
  return http.post(url, { topicId, title, alternatives });
};

export const deleteQuestion = (questionId) => {
  const url = `${BASE_URL}/surveys/question/${questionId}`;
  return http.delete(url);
};

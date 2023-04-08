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

export const saveSurvey = (topicId, title, alternatives) => {
  const url = `${BASE_URL}/topics/${topicId}`;
  return http.put(url, { topicId, title, alternatives });
};

export const deleteQuestion = (questionId) => {
  const url = `${BASE_URL}/surveys/question/${questionId}`;
  return http.delete(url);
};

export const getSurveyToAnswer = (userType, uuid) => {
  const url = `${BASE_URL}/feedback/${userType}/${uuid}`
  return http.get(url);
};

export const saveAnswer = (surveyId, professorUuid, questionId, letter, userType) => {
  const payload = { questionId, letter };
  return http.post(`${BASE_URL}/feedback/${surveyId}/${userType}/${professorUuid}`, payload);
};

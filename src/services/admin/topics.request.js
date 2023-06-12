import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

export const getAllTopics = () => {
  const url = `${BASE_URL}/topics`;
  return http.get(url);
};

export const getTopics = (gradeId) => {
  const url = `${BASE_URL}/topics/${gradeId}`;
  return http.get(url);
};

export const getTopic = (topicId, questionType) => {
  const url = `${BASE_URL}/topics/${topicId}/${questionType}`;
  return http.get(url);
};

export const createTopic = (payload) => {
  const url = `${BASE_URL}/topics`;
  return http.post(url, payload);
};

export const deleteTopic = topicId => {
  const url = `${BASE_URL}/topics/${topicId}`;
  return http.delete(url);
};

export const addQuestion = (topicId, title, alternatives, surveyType) => {
  const url = `${BASE_URL}/topics/${topicId}`;
  return http.put(url, { topicId, title, alternatives, surveyType });
};

export const deleteQuestion = (topicId, questionId) => {
  const url = `${BASE_URL}/topics/${topicId}/question/${questionId}`;
  return http.delete(url);
};

export const getGrades = () => {
  const url = `${BASE_URL}/grades`;
  return http.get(url);
}

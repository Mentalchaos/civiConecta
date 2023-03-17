import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

export const getTopics = (surveyType='all') => {
  const url = `${BASE_URL}/topics/type/${surveyType}`;
  return http.get(url);
};

export const getTopic = (topicId) => {
  const url = `${BASE_URL}/topics/${topicId}`;
  return http.get(url);
};

export const createTopic = (payload, surveyType) => {
  const url = `${BASE_URL}/topics/${surveyType}`;
  return http.post(url, payload);
};

export const deleteTopic = (topicId) => {
  const url = `${BASE_URL}/topics/${topicId}`;
  return http.delete(url);
};

export const addQuestion = (topicId, title, alternatives) => {
  const url = `${BASE_URL}/topics/${topicId}`;
  return http.put(url, { topicId, title, alternatives });
};

export const deleteQuestion = (questionId) => {
  const url = `${BASE_URL}/topics/question/${questionId}`;
  return http.delete(url);
};

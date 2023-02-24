import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

export const getTopics = () => {
  const url = `${BASE_URL}/topics`;
  return http.get(url);
};

export const getTopic = (topicId, surveyType) => {
  const url = `${BASE_URL}/topics/${topicId}/${surveyType}`;
  return http.get(url)
};

export const createTopic = (payload) => {
  const url = `${BASE_URL}/topics`;
  return http.post(url, payload);
};

export const deleteTopic = (topicId) => {
  const url = `${BASE_URL}/topics/${topicId}`;
  return http.delete(url);
};

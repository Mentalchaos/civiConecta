import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

export const getTopics = () => {
  const url = `${BASE_URL}/getTopics`;
  return http.get(url);
};

export const createTopic = (payload) => {
  const url = `${BASE_URL}/createTopic`;
  return http.post(url, payload);
};

export const deleteTopic = (number) => {
  const url = `${BASE_URL}/deleteTopic?number=${number}`;
  return http.delete(url);
};
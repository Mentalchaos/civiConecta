import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

export const getLessonById = (lessonId) => {
  const url = `${BASE_URL}/lessons/${lessonId}`;
  return http.get(url);
};

export const createLesson = (payload) => {
  const url = `${BASE_URL}/lessons`;
  return http.post(url, payload);
};

export const deleteLesson = (lessonId) => {
  const url = `${BASE_URL}/lessons/${lessonId}`;
  return http.delete(url);
};

import config from 'src/config';
import http from '../helpers/http.helper.js';

const BASE_URL = config.baseURL;

export const getEstablishment = async () => {
  const url = `${BASE_URL}/establishments`;
  const response = await http.get(url);

  return {
    ok: response.ok,
    establishments: response.establishments,
  };
};

export const createEstablishment = (number, name) => {
  const payload = { number, name };
  return http.post(`${BASE_URL}/establishments`, payload);
};

export const updateActiveEstablishment = (number, active) => {
  const url = `${BASE_URL}/establishments/${number}/status/${active}`;
  return http.put(url);
};

export const updateCoursesEstablishment = (number, payload) => {
  const url = `${BASE_URL}/establishments/${number}/courses`;
  return http.put(url, payload);
};

export const assignTeacherToCourse = (payload) => {
  const url = `${BASE_URL}/establishments/${payload.institution}/courses/teacher`;
  return http.put(url, payload);
};



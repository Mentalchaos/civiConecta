import config from 'src/config';
import http from '../helpers/http.helper.js';
import Establishment from 'src/entities/Establishment.js';

const BASE_URL = config.baseURL;

export const getEstablishment = async () => {
  const url = `${BASE_URL}/establishments`;
  const response = await http.get(url);

  return {
    ok: response.ok,
    establishments: response.establishments.map(e => new Establishment(e)),
  };
};

export const createEstablishment = (number, name) => {
  const payload = { number, name };
  return http.post(`${BASE_URL}/establishments`, payload);
};

export const updateActiveEstablishment = (number, active) => {
  const payload = { active };
  const url = `${BASE_URL}/updateActiveEstablishment?number=${number}`;
  return http.put(url, payload);
};

export const updateCoursesEstablishment = (number, payload) => {
  const url = `${BASE_URL}/establishments/${number}/courses`;
  return http.put(url, payload);
};

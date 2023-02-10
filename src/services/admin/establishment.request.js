import { BASE_URL } from '../constants';
import http from '../helpers/http.helper.js';
import Establishment from 'src/entities/Establishment.js';

export const getEstablishment = async () => {
  const url = `${BASE_URL}/getEstablishments`;
  const response = await http.get(url);

  return {
    ok: response.ok,
    establishments: response.establishments.map(e => new Establishment(e)),
  };
};

export const createEstablishment = (number, name) => {
  const payload = { number, name };
  return http.post(`${BASE_URL}/createEstablishment`, payload);
};

export const updateActiveEstablishment = (number, active) => {
  const payload = { active };
  const url = `${BASE_URL}/updateActiveEstablishment?number=${number}`;
  return http.put(url, payload);
};

export const updateCoursesEstablishment = (number, payload) => {
  const url = `${BASE_URL}/updateCoursesEstablishment?number=${number}`;
  return http.put(url, payload);
};

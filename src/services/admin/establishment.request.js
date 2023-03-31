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

export const getEstablishmentById = async id => {
  const url = `${BASE_URL}/establishments/info/${id}`;
  const response = await http.get(url);

  return {
    ok: response.ok,
    establishments: response.establishments.map(e => new Establishment(e)),
  };
};

export const getCoursesByGrade = async (establishmentId, gradeId) => {
  const url = `${BASE_URL}/establishments/${establishmentId}/grades/${gradeId}`;
  const response = await http.get(url);

  return {
    ok: response.ok,
    courses: response.courses,
  };
};

export const createEstablishment = name => {
  const payload = { name };
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

export const assignTeacherToCourse = payload => {
  const url = `${BASE_URL}/establishments/${payload.institution}/courses/teacher`;
  return http.put(url, payload);
};

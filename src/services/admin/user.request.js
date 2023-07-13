import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

export const signIn = async (email, password) => {
  return fetch(`${BASE_URL}/auth/signIn`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(response => response.json());
};

export const signUpUserRole = payload => {
  return http.post(`${BASE_URL}/signUpUserRole`, payload);
};

export const updateActiveUser = (email, active) => {
  return http.put(`${BASE_URL}/updateActiveUser?email=${email}`, { active });
};

export const generateRandomPassword = () => {
  return http.get(`${BASE_URL}/generateRandomPassword`);
};


export const getDataTeachers = (establishmentId, courseId) => {
  // @ TODO: Remember to add the course id when the backend adds the change
  return http.get(`${BASE_URL}/establishments/${establishmentId}/course/1/teachers`);
};

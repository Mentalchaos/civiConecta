import config from 'src/config';
import http from 'src/services/helpers/http.helper';

const BASE_URL = config.baseURL;

const service = {
  fetchGrades() {
    const url = `${BASE_URL}/grades`;
    return http.get(url);
  },
  fetchLetters() {
    const url = `${BASE_URL}/grades/letters`;
    return http.get(url);
  },
  fetchCourses(establishmentId) {
    const url = `${BASE_URL}/establishments/${establishmentId}/courses`;
    return http.get(url);
  },
  fetchTeachers(establishmentId) {
    const url = `${BASE_URL}/establishments/${establishmentId}/teachers`;
    return http.get(url);
  },
  createCourse(establishmentId, gradeId, letterId) {
    const url = `${BASE_URL}/establishments/${establishmentId}/courses`;
    return http.post(url, { letterId, gradeId });
  }
};

export default service;

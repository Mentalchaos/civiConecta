import http from 'src/services/helpers/http.helper';
import config from 'src/config';

const BASE_URL = config.baseURL;

const service = {
  fetchStudentsByCourse(courseId) {
    const url = `${BASE_URL}/courses/${courseId}/students`;
    return http.get(url);
  },
  fetchCourse(courseId) {
    const url = `${BASE_URL}/courses/${courseId}`;
    return http.get(url);
  }
};

export default service;

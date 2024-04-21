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
  },
  fetchAssignedTeacher(courseId) {
    const url = `${BASE_URL}/courses/${courseId}/teachers`;
    return http.get(url);
  },
  addStudent(courseId, name, run) {
    const url = `${BASE_URL}/courses/${courseId}/students`;
    return http.post(url, { name, run });
  },
  assignTeacher(courseId, name, email) {
    const url = `${BASE_URL}/courses/${courseId}/teachers`;
    return http.put(url, { name, email });
  },
  removeStudent(studentId) {
    const url = `${BASE_URL}/establishments/student/${studentId}`;
    return http.delete(url);
  },
  editStudent(studentId, name, lastname, run){
    const url = `${BASE_URL}/establishments/student/${studentId}`;
    return http.put(url, {name, lastname, run})
  }
};

export default service;

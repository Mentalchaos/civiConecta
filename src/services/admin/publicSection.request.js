import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

const services = {
  async getFeedbackStatus(uuid) {
    const url = `${config.baseURL}/feedback/status/${uuid}`;
    return http.get(url);
  },
  async getUserData(uuid) {
    const url = `${config.baseURL}/establishments/info/${uuid}`;
    return http.get(url);
  },
  getTeacherSurvey(uuid) {
    const url = `${config.baseURL}/surveys/teacher/${uuid}`;
    return http.post(url);
  }
};

export default services;

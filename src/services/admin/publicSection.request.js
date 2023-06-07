import config from 'src/config';
import http from '../helpers/http.helper';

const BASE_URL = config.baseURL;

const services = {
  async getFeedbackStatus(uuid) {
    const url = `${BASE_URL}/feedback/status/${uuid}`;
    return http.get(url);
  },
  async getUserData(uuid) {
    const url = `${BASE_URL}/establishments/info/${uuid}`;
    return http.get(url);
  },
  getTeacherSurvey(uuid) {
    const url = `${BASE_URL}/surveys/teacher/${uuid}`;
    return http.post(url);
  },
  getUnits(gradeId){
    const url = `${BASE_URL}/units?gradeId=${gradeId}`;
    return http.get(url);
  },
  initMassiveSurvey(uuid) {
    const url = `${BASE_URL}/surveys/students/${uuid}`;
    return http.post(url);
  },
  getDataUnitPonderation(uuid) {
    const url = `${BASE_URL}/reports/units-order/${uuid}`;
    return http.get(url)
  }
  
};

export default services;

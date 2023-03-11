import config from 'src/config';
import http from '../helpers/http.helper.js';
import QueryString from '../helpers/QueryString';

const BASE_URL = config.baseURL;

export const uploadByLesson = (lessonId, formData) => {
  const url = `${BASE_URL}/files/lessons/${lessonId}`;
  return http.upload(url, formData);
};

export const downloadFile = uuid => {
  const url = `${BASE_URL}/files/${uuid}`;
  return http.download(url);
};

export const deleteFile = uuid => {
  const url = `${BASE_URL}/files/${uuid}`;
  return http.delete(url);
};

// Files para clases de unidades
export const uploadFileByClassUnitAndGrade = (
  classNumber,
  unit,
  grade,
  file,
) => {
  const qs = new QueryString()
    .add('class', classNumber)
    .add('unit', unit)
    .add('grade', grade);

  const url = `${BASE_URL}/uploadFileByClassUnitAndGrade?${qs.query}`;
  return http.upload(url, file);
};

export const deleteFileByClassUnitAndGrade = (
  classNumber,
  unit,
  grade,
  fileName,
) => {
  const qs = new QueryString()
    .add('class', classNumber)
    .add('unit', unit)
    .add('grade', grade)
    .add('file', fileName);

  const url = `${BASE_URL}/deleteFileByClassUnitAndGrade?${qs.query}`;
  return http.delete(url);
};

// Files para eventos en situaciones
export const uploadFileByEventAndGrade = (event, grade, file) => {
  const qs = new QueryString().add('event', event).add('grade', grade);

  const url = `${BASE_URL}/uploadFileByEventAndGrade?${qs.query}`;
  return http.upload(url, file);
};

export const deleteFileByEventAndGrade = (event, grade, fileName) => {
  const qs = new QueryString()
    .add('event', event)
    .add('grade', grade)
    .add('file', fileName);

  const url = `${BASE_URL}/deleteFileByEventAndGrade?${qs.query}`;
  return http.delete(url);
};

export const uploadFileByExceptionAndGrade = (exception, grade, file) => {
  const qs = new QueryString().add('exception', exception).add('grade', grade);

  const url = `${BASE_URL}/uploadFileByExceptionAndGrade?${qs.query}`;
  return http.upload(url, file);
};

export const deleteFileByExceptionAndGrade = async (
  exception,
  grade,
  fileName,
) => {
  const qs = new QueryString()
    .add('exception', exception)
    .add('grade', grade)
    .add('file', fileName);

  const url = `${BASE_URL}/deleteFileByExceptionAndGrade?${qs.query}`;
  return http.delete(url);
};

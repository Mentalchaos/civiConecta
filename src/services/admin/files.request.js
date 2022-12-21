import { BASE_URL } from '../constants';

// TODO ver que otros metodos son necesarios implementar de manera general
const http = {
  _getToken(token) {
    if (token) return token;
    return JSON.parse(localStorage.getItem('user')).token;
  },
  upload(url, formData, token) {
    token = this._getToken(token);
  
    return fetch(url, {
      method: 'PUT',
      headers: {
        enctype: 'multipart/form-data',
        token
      },
      body: formData
    });
  },
  delete(url, token) {
    token = this._getToken(token);

    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token
      }
    });
  }
};

// Files para clases de unidades
export const uploadFileByClassUnitAndGrade = async (
  classNumber,
  unit,
  grade,
  file,
) => {
  const url = `${BASE_URL}/uploadFileByClassUnitAndGrade?class=${classNumber}&unit=${unit}&grade=${grade}`;
  const result = await http.upload(url, file);
  const response = await result.json();

  return { ...response };
};

export const deleteFileByClassUnitAndGrade = async (classNumber, unit, grade, fileName) => {
  const url = `${BASE_URL}/deleteFileByClassUnitAndGrade?class=${classNumber}&unit=${unit}&grade=${grade}&file=${fileName}`;
  const httpResponse = await http.delete(url);
  const response = await httpResponse.json();

  return { ...response };
};

// Files para eventos en situaciones
export const uploadFileByEventAndGrade = async (event, grade, file) => {
  const url = `${BASE_URL}/uploadFileByEventAndGrade?event=${event}&grade=${grade}`;
  const httpResponse = await http.upload(url, file);
  const response = await httpResponse.json();

  return { ...response };
};

export const deleteFileByEventAndGrade = async (event, grade, fileName) => {
  const url = `${BASE_URL}/deleteFileByEventAndGrade?event=${event}&grade=${grade}&file=${fileName}`;
  const httpResponse = await http.delete(url);
  const response = await httpResponse.json();

  return { ...response };
};

export const uploadFileByExceptionAndGrade = async (exception, grade, file) => {
  const url = `${BASE_URL}/uploadFileByExceptionAndGrade?exception=${exception}&grade=${grade}`;
  const httpResponse = await http.upload(url, file);
  const response = await httpResponse.json();

  return { ...response };
};

export const deleteFileByExceptionAndGrade = async (exception, grade, fileName) => {
  const url = `${BASE_URL}/deleteFileByExceptionAndGrade?exception=${exception}&grade=${grade}&file=${fileName}`;
  const httpResponse = await http.delete(url);
  const response = await httpResponse.json();

  return { ...response };
};

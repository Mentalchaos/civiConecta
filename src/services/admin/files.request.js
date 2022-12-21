import { BASE_URL } from '../constants';

// Files para clases de unidades
export const uploadFileByClassUnitAndGrade = async (
  classNumber,
  unit,
  grade,
  file,
) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/uploadFileByClassUnitAndGrade?class=${classNumber}&unit=${unit}&grade=${grade}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
        token: jwt,
      },
      body: file,
    },
  );
  const response = await fetching.json();
  return {
    ...response,
  };
};

export const deleteFileByClassUnitAndGrade = async (
  classNumber,
  unit,
  grade,
  file,
) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/deleteFileByClassUnitAndGrade?class=${classNumber}&unit=${unit}&grade=${grade}&file=${file}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: jwt,
      },
    },
  );
  const response = await fetching.json();
  return {
    ...response,
  };
};

// Files para eventos en situaciones
export const uploadFileByEventAndGrade = async (event, grade, file) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/uploadFileByEventAndGrade?event=${event}&grade=${grade}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
        token: jwt,
      },
      body: JSON.stringify({ file }),
    },
  );
  const response = await fetching.json();
  return {
    ...response,
  };
};

export const deleteFileByEventAndGrade = async (event, grade, file) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/deleteFileByEventAndGrade?event=${event}&grade=${grade}${file}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: jwt,
      },
    },
  );
  const response = await fetching.json();
  return {
    ...response,
  };
};

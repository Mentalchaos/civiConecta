import { BASE_URL } from '../constants';

export const getExceptionsByGrade = async grade => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/getExceptionsByGrade?grade=${grade}`,
    {
      method: 'GET',
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

export const createException = async payload => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(`${BASE_URL}/createException`, {
    method: 'POST',
    body: JSON.stringify({ ...payload }),
    headers: {
      'Content-Type': 'application/json',
      token: jwt,
    },
  });
  const response = await fetching.json();
  return {
    ...response,
  };
};

export const updateException = async (number, grade, payload) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/updateException?number=${number}&grade=${grade}`,
    {
      method: 'PUT',
      body: JSON.stringify({ ...payload }),
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

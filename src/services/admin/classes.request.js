import { BASE_URL } from '../constants';

export const getClassesByUnitAndGrade = async (unitNumber, grade) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/getClassesByUnitAndGrade?unit=${unitNumber}&grade=${grade}`,
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

export const createClass = async payload => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(`${BASE_URL}/createClass`, {
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

export const updateClass = async (number, unit, grade, payload) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/updateClass?number=${number}&unit=${unit}&grade=${grade}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: jwt,
      },
      body: JSON.stringify({ ...payload }),
    },
  );
  const response = await fetching.json();
  return {
    ...response,
  };
};

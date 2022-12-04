import { BASE_URL } from '../constants';

export const getUnitsByGrade = async grade => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(`${BASE_URL}/getUnitsByGrade?grade=${grade}`, {
    method: 'GET',
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

export const createUnit = async payload => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(`${BASE_URL}/createUnit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: jwt,
    },
    body: JSON.stringify({ ...payload }),
  });
  const response = await fetching.json();
  return {
    ...response,
  };
};

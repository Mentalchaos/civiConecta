import { BASE_URL } from '../constants';
import http from '../helpers/http.helper';

export const signIn = async (email, password) => {
  const fetching = await fetch(`${BASE_URL}/signIn`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await fetching.json();
  return {
    ...response,
  };
};

export const signUpUserRole = async payload => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(`${BASE_URL}/signUpUserRole`, {
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

export const updateActiveUser = async (email, active) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(`${BASE_URL}/updateActiveUser?email=${email}`, {
    method: 'PUT',
    body: JSON.stringify({ active }),
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

export const generateRandomPassword = async () => {
  const url = `${BASE_URL}/generateRandomPassword`;
  const httpResponse = await http.get(url);
  const response = await httpResponse.json();

  return { ...response };
};

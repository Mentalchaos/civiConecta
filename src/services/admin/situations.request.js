import { BASE_URL } from '../constants';
import http from '../helpers/http.helper';

export const getEventsByGrade = async grade => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(`${BASE_URL}/getEventsByGrade?grade=${grade}`, {
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

export const createEvent = async payload => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(`${BASE_URL}/createEvent`, {
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

export const updateEvent = async (number, grade, payload) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(`${BASE_URL}/updateEvent?number=${number}&grade=${grade}`, {
    method: 'PUT',
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

export const deleteEvent = async (number, grade) => {
  const url = `${BASE_URL}/deleteEvent?number=${number}&grade=${grade}`;
  const httpResponse = await http.delete(url);
  const response = await httpResponse.json();
  return { ...response };
};

import { BASE_URL } from '../constants';
import http from '../helpers/http.helper.js';


export const getEstablishment = async () => {
  const url = `${BASE_URL}/getEstablishments`;
  const httpResponse = await http.get(url);
  const response = await httpResponse.json();
  debugger;
  return { ...response };
};

export const createEstablishment = async (number, name) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(`${BASE_URL}/createEstablishment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: jwt,
    },
    body: JSON.stringify({ number, name }),
  });
  const response = await fetching.json();
  return {
    ...response,
  };
};

export const updateActiveEstablishment = async (number, active) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/updateActiveEstablishment?number=${number}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: jwt,
      },
      body: JSON.stringify({ active }),
    },
  );
  const response = await fetching.json();
  return {
    ...response,
  };
};

export const updateCoursesEstablishment = async (number, payload) => {
  const url = `${BASE_URL}/updateCoursesEstablishment?number=${number}`;
  const httpResponse = await http.put(url, payload);
  const response = await httpResponse.json();

  return { ...response };
};

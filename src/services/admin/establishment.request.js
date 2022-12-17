import { BASE_URL } from '../constants';

export const getEstablishment = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(`${BASE_URL}/getEstablishments`, {
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
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/updateCoursesEstablishment?number=${number}`,
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

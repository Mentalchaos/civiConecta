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

export const inactivateEstablishment = async number => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/inactivateEstablishment?number=${number}`,
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

export const reactivateEstablishment = async number => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/reactivateEstablishment?number=${number}`,
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

export const updateEstablishment = async (number, payload) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/updateEstablishment?number=${number}`,
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

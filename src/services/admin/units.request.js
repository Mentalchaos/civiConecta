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
  const { number, title, grade, description, topic } = payload;
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  console.log(jwt);
  const options = {
    method: 'POST',
    headers: {
      token: jwt,
    },
    body: JSON.stringify({
      number,
      title,
      description,
      grade,
      topic,
    }),
  };
  const fetching = await fetch(`${BASE_URL}/createUnit`, options);
  const response = await fetching.json();
  return {
    ...response,
  };
};

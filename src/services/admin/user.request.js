import { BASE_URL } from '../constants';

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

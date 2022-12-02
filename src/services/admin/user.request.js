const BASE_URL = 'https://civi-conecta-server.adaptable.app';

export const signIn = (email, password) => {
  fetch(`${BASE_URL}/signIn`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resp => resp.json())
    .then(data => {
      return { ...data };
    });
};

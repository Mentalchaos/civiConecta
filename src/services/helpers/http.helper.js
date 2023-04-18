import { getUserData } from 'src/utils/user';

const toJSON = (response) => response.json();

const http = {
  getHeaders() {
    const userData = getUserData();
    return {
      'Content-Type': 'application/json',
      token: userData.token,
    };
  },
  get(url) {
    return fetch(url, { headers: { ...this.getHeaders() } })
      .then(toJSON);
  },
  post(url, payload={}) {
    return fetch(url, {
      method: 'POST',
      headers: { ...this.getHeaders() },
      body: JSON.stringify(payload)
    }).then(toJSON);
  },
  upload(url, formData) {
    const userData = getUserData();

    return fetch(url, {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
        token: userData.token,
      },
      body: formData,
    }).then(toJSON);
  },
  delete(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: { ...this.getHeaders() },
    }).then(toJSON);
  },
  put(url, payload) {
    return fetch(url, {
      method: 'PUT',
      headers: { ...this.getHeaders() },
      body: JSON.stringify(payload),
    }).then(toJSON);
  },
  download(url) {
    const userData = getUserData();

    return fetch(url, {
      method: 'GET',
      headers: {
        token: userData.token
      }
    });
  }
};

export default http;

const http = {
  getHeaders() {
    return {
      'Content-Type': 'application/json',
      token: JSON.parse(localStorage.getItem('user')).token,
    };
  },
  get(url) {
    return fetch(url, {
      headers: { ...this.getHeaders() },
    });
  },
  upload(url, formData) {
    return fetch(url, {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
        token: JSON.parse(localStorage.getItem('user')).token,
      },
      body: formData,
    });
  },
  delete(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: { ...this.getHeaders() },
    });
  },
  put(url, payload) {
    return fetch(url, {
      method: 'PUT',
      headers: { ...this.getHeaders() },
      body: JSON.stringify(payload),
    });
  },
};

export default http;

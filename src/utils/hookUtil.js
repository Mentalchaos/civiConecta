const fetchLoading = (fetcher) => (fn) => async (...args) => {
  fetcher(true);
  let result;
  let ok;

  try {
    result = await fn(...args);
    ok = true;
  } catch (err) {
    console.error(err);
    ok = false;
    result = err;
  }

  fetcher(false);
  return ok ? Promise.resolve(result) : Promise.reject(result);
};

const toSuspense = (promise) => {
  let status = 'pending';
  let response;

  const suspended = promise
    .then((res) => {
      status = 'success';
      response = res;
    })
    .catch((err) => {
      status = 'error';
      response = err;
    });

  function read() {
    switch (status) {
      case 'pending':
        throw suspended;
      case 'error':
        throw response;
      default:
        return response;
    }
  }

  return { read };
}

export { fetchLoading, toSuspense };

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

export { fetchLoading };

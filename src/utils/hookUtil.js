const requestWrapper = (fetcher) => (fn) => async (...args) => {
  fetcher(true);

  try {
    await fn(...args);
  } catch (err) {
    console.error(err);
  }

  fetcher(false);
};

export { requestWrapper };

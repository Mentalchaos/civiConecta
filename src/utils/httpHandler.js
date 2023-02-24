const throwOnError = (response) => {
  if (response.ok) {
    return response;
  }

  throw new Error(response.error);
};

export { throwOnError };

const counter = (() => {
  let counter = 1;

  return {
    get next() {
      const current = counter;
      counter += 1;
      return current;
    }
  };
})();


export { counter };

const addUUID = x => {
  return ({ ...x, uuid: createUUID() });
};

const createUUID = () => {
  if (window?.crypto?.randomUUID) {
    return crypto.randomUUID();
  }

  return Math.random().toString(16).substring(2);
};

export { addUUID, createUUID };

const addUUID = x => ({ ...x, uuid: crypto.randomUUID() });

export { addUUID };

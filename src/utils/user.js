const getUserData = () => {
  try {
    return JSON.parse(sessionStorage.getItem('user'));
  } catch (err) {
    return null;
  }
};

const setUserData = (saveData, uuid) => {
  const userData = {
    name: saveData.name,
    email: saveData.email,
    role: saveData.role,
    active: saveData.active,
    token: saveData.token,
    uuid
  };
  sessionStorage.setItem('user', JSON.stringify(userData));
};

const clearUserData = () => {
  sessionStorage.clear();
};

export { getUserData, setUserData, clearUserData };

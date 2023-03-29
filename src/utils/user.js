const getUserData = () => {
  try {
    return JSON.parse(localStorage.getItem('user'));
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
  localStorage.setItem('user', JSON.stringify(userData));
};

const clearUserData = () => {
  localStorage.clear();
};

export { getUserData, setUserData, clearUserData };

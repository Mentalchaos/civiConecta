const getUserData = () => {
  return JSON.parse(localStorage.getItem('user'));
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

export { getUserData, setUserData };

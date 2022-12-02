const BASE_URL = 'https://civi-conecta-server.adaptable.app';

const getClassesByUnitAndGrade = async (unitNumber, grade) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/getClassesByUnitAndGrade?unit=${unitNumber}&grade=${grade}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: jwt,
      },
    },
  );
  const response = await fetching.json();
  return {
    ...response,
  };
};

export default getClassesByUnitAndGrade;

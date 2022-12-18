import { BASE_URL } from '../constants';

export const uploadFileByClassUnitAndGrade = async (
  classNumber,
  unit,
  grade,
  file,
) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = user.token;
  const fetching = await fetch(
    `${BASE_URL}/uploadFileByClassUnitAndGrade?class=${classNumber}&unit=${unit}&grade=${grade}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: jwt,
      },
      body: JSON.stringify({ file }),
    },
  );
  const response = await fetching.json();
  return {
    ...response,
  };
};

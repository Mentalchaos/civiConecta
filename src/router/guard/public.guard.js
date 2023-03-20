import { Navigate, Outlet } from 'react-router-dom';
import { getUserData } from 'src/utils/user';
import config from 'src/config';

export const PublicGuard = () => {
  const userData = getUserData();
  const { email, role } = userData;

  if (role === config.constants.UserTypes.ADMIN) {
    return <Navigate to={'/admin'} />;
  }

  return email && role === config.constants.UserTypes.USER ? <Outlet /> : <Navigate to="/" />;
};

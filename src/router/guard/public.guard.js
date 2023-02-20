import { Navigate, Outlet } from 'react-router-dom';
import cookie from 'src/utils/cookie';
import config from 'src/config';

export const PublicGuard = () => {
  const dataCookies = cookie.getDataParser();
  const { email, role } = dataCookies;
  if (role === config.constants.UserTypes.ADMIN) return <Navigate to={'/admin'} />;

  return email && role === config.constants.UserTypes.USER ? <Outlet /> : <Navigate to="/" />;
};

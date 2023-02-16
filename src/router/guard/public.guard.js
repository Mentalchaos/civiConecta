import { Navigate, Outlet } from 'react-router-dom';
import cookie from 'src/utils/cookie';

export const PublicGuard = () => {
  const dataCookies = cookie.getDataParser();
  const { email, role } = dataCookies;
  if (role === 'Administrator') return <Navigate to={'/admin'} />;

  return email && role === 'User' ? <Outlet /> : <Navigate to="/" />;
};

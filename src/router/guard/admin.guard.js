import { Navigate, Outlet } from 'react-router-dom';
import cookie from 'src/utils/cookie';

export const AdminGuard = () => {
  const dataCookies = cookie.getDataParser();
  const { email, role } = dataCookies;

  return email && role === 'Administrator' ? <Outlet /> : <Navigate to="/public" />;
};

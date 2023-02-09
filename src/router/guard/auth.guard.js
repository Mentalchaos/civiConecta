import { Navigate, Outlet } from 'react-router-dom';
import cookie from 'src/utils/cookie';

export const AdminGuard = () => {
  const cookieRequired = cookie.getCookie('token');
  const dataCookies = cookieRequired !== undefined && JSON.parse(cookieRequired);
  const { email, role } = dataCookies;

  role !== 'Administrator' && cookie.removeCookie('token');

  return email && role === 'Administrator' ? <Outlet /> : <Navigate to="/auth/login" />;
};

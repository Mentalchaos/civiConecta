import { Navigate, Outlet } from 'react-router-dom';
import cookie from 'src/utils/cookie';

export const AdminGuard = () => {
  const cookieRequired = cookie.getCookie('token');
  console.log(cookieRequired);
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.email && cookieRequired ? <Outlet /> : <Navigate to="/auth/login" />;
};

import { Navigate, Outlet } from 'react-router-dom';

export const AdminGuard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.email ? <Outlet /> : <Navigate to="/auth/login" />;
};

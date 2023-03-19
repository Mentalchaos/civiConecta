import { Navigate, Outlet } from 'react-router-dom';
import { getUserData } from 'src/utils/user';

export const AdminGuard = () => {
  const userData = getUserData();
  const { email, role } = userData;
  return email && role === 'Administrator' ? <Outlet /> : <Navigate to="/public" />;
};

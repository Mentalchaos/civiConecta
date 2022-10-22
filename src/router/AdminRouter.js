import { Navigate, Route, Routes } from 'react-router-dom';
import Main from 'src/components/Main';
import Manager from 'src/components/Manager/Manager';
import Sidebar from 'src/components/Sidebar/Sidebar';

const AdminRouter = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/manager" element={<Manager />} />
        <Route path="/dashboard" element={<Main />} />
        <Route path="/*" element={<Navigate to={'dashboard'} />} />
      </Routes>
    </>
  );
};

export default AdminRouter;

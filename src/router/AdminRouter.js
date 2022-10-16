import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from 'src/components/Main';
import Sidebar from 'src/components/Sidebar/Sidebar';

const AdminRouter = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Main />} />
        <Route path="/*" element={<Navigate to={'dashboard'} />} />
      </Routes>
    </>
  );
};

export default AdminRouter;

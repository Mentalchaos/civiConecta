import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from 'src/components/Main';

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Main />} />
      <Route path="/*" element={<Navigate to={'dashboard'} />} />
    </Routes>
  );
};

export default AdminRouter;

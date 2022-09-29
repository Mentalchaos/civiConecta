import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'src/components/Main';

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Main />} />
    </Routes>
  );
};

export default AdminRouter;

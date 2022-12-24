import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from 'src/components/Login';
import RecoverPassword from 'src/components/Login/RecoverPassword/RecoverPassword';

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
    </Routes>
  );
};

export default AuthRouter;

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';
import PublicRouter from './PublicRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={<AuthRouter />} />
        <Route path="admin/*" element={<AdminRouter />} />
        <Route path="public/*" element={<PublicRouter />} />
        <Route path="/*" element={<Navigate to={'auth/login'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

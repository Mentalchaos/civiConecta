import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from 'src/components/NotFound/NotFound';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';
import PublicRouter from './PublicRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PublicRouter />} />
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/public/*" element={<PublicRouter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

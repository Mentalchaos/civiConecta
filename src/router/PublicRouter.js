import { Navigate, Route, Routes } from 'react-router-dom';

const PublicRouter = () => {
  <>
    <Routes>
      // Agregar componente para mostrar en public
      <Route path="/*" element={<Navigate to={'dashboard'} />} />
    </Routes>
  </>;
};

export default PublicRouter;

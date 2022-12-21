import { Navigate, Route, Routes } from 'react-router-dom';
import PublicSection from 'src/components/PublicSection';

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/public-dashboard" element={<PublicSection />} />
        <Route path="/*" element={<Navigate to={'public-dashboard'} />} />
      </Routes>
    </>
  );
};

export default PublicRouter;

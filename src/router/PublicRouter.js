import { Navigate, Route, Routes } from 'react-router-dom';
import PublicSection from 'src/components/PublicSection';

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to={'dashboard'} />} />
      <Route path="/PublicDashboard" element={<PublicSection />} />
    </Routes>
  );
};

export default PublicRouter;

import { Route, Routes } from 'react-router-dom';
import NotFound from 'src/components/NotFound/NotFound';
import PublicSection from 'src/components/PublicSection';

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PublicSection />} />
        <Route exact path="/public-dashboard" element={<PublicSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PublicRouter;

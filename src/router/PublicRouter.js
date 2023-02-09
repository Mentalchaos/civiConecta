import { Route, Routes } from 'react-router-dom';
import NotFound from 'src/components/NotFound/NotFound';
import PublicSection from 'src/components/PublicSection';
import PublicHeader from 'src/components/PublicSection/Header/PublicHeader';
import ShareSurvey from 'src/components/PublicSection/ShareSurvey';

const PublicRouter = () => {
  return (
    <>
      <PublicHeader />
      <Routes>
        <Route exact path="/" element={<PublicSection />} />
        {/* Ruta para login */}
        {/* Ruta para compartir encuesta */}
        <Route exact path="/share-survey" element={<ShareSurvey />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PublicRouter;

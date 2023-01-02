import { Route, Routes } from 'react-router-dom';
import NotFound from 'src/components/NotFound/NotFound';
import PublicSection from 'src/components/PublicSection';
import Login from 'src/components/PublicSection/Login';
import ShareSurvey from 'src/components/PublicSection/ShareSurvey';

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PublicSection />} />
        <Route exact path="/public-dashboard" element={<PublicSection />} />

        {/* Ruta para login */}
        <Route exact path="/login" element={<Login />} />

        {/* Ruta para compartir encuesta */}
        <Route exact path="/share-survey" element={<ShareSurvey />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PublicRouter;

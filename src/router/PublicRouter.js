import { Route, Routes } from 'react-router-dom';
import NotFound from 'src/components/NotFound/NotFound';
import PublicSection from 'src/components/PublicSection';
import PublicHeader from 'src/components/PublicSection/Header/PublicHeader';
import ShareSurvey from 'src/components/PublicSection/ShareSurvey';
import ProfessorSurvey from 'src/components/PublicSection/ProfessorSurvey';
import Footer from 'src/components/PublicSection/Footer/';

const PublicRouter = () => {
  return (
    <>
      <PublicHeader />
      <Routes>
        <Route exact path="/" element={<PublicSection />} />
        {/* Ruta para login */}
        {/* Ruta para compartir encuesta */}
        <Route exact path="/share-survey" element={<ShareSurvey />} />
        <Route exact path="/professor-survey" element={<ProfessorSurvey />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PublicRouter;

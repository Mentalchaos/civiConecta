import { Route, Routes } from 'react-router-dom';
import NotFound from 'src/components/NotFound/NotFound';
import PublicSection from 'src/components/PublicSection';
import PublicHeader from 'src/components/PublicSection/Header/PublicHeader';
import ShareSurvey from 'src/components/PublicSection/Surveys/ShareSurvey';
import ProfessorSurvey from 'src/components/PublicSection/Surveys/ProfessorSurvey';
import StudentSurvey from 'src/components/PublicSection/Surveys/StudentSurvey';
import ProfessorProfile from 'src/components/PublicSection/ProfessorProfile';
import Footer from 'src/components/PublicSection/Footer/';
import StudentsHeader from 'src/components/PublicSection/Surveys/StudentSurvey/StudentsHeader';

const PublicRouter = () => {
  return (
    <>
      { document.location.pathname != '/student-survey' && <PublicHeader /> }
      <Routes>
        <Route exact path="/" element={<PublicSection />} />
        {/* Ruta para login */}
        {/* Ruta para compartir encuesta */}
        <Route exact path="/share-survey" element={<ShareSurvey />} />
        <Route exact path="/professor-survey" element={<ProfessorSurvey />} />
        <Route exact path="/student-survey" element={<StudentSurvey />} />
        <Route exact path="/professor-profile" element={<ProfessorProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PublicRouter;

import { Route, Routes } from 'react-router-dom';
import NotFound from 'src/components/NotFound/NotFound';
import PublicSection from 'src/components/PublicSection';
import PublicHeader from 'src/components/PublicSection/Header/PublicHeader';
import ShareSurvey from 'src/components/PublicSection/Surveys/ShareSurvey';
import ProfessorSurvey from 'src/components/PublicSection/Surveys/ProfessorSurvey';
import StudentSurvey from 'src/components/PublicSection/Surveys/StudentSurvey';
import ProfessorProfile from 'src/components/PublicSection/ProfessorProfile';

const PublicRouter = () => {
  return (
    <>
      {/*TODO: fix this route later*/}
      { document.location.pathname !== '/student-survey' && <PublicHeader /> }
      <Routes>
        <Route exact path="/" element={<PublicSection />} />
        <Route exact path="/share-survey" element={<ShareSurvey />} />
        <Route exact path="/professor-survey" element={<ProfessorSurvey />} />
        <Route exact path="/student-survey" element={<StudentSurvey />} />
        <Route exact path="/professor-profile" element={<ProfessorProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PublicRouter;

import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from 'src/components/NotFound/NotFound';
import PublicSection from 'src/components/PublicSection';
import PublicHeader from 'src/components/PublicSection/Header/PublicHeader';
import ShareSurvey from 'src/components/PublicSection/Surveys/ShareSurvey';
import ProfessorSurvey from 'src/components/PublicSection/Surveys/ProfessorSurvey';
import StudentSurvey from 'src/components/PublicSection/Surveys/StudentSurvey';
import ProfessorProfile from 'src/components/PublicSection/ProfessorProfile';
import CompletedSurvey from 'src/components/PublicSection/Surveys/CompletedSurvey/CompletedSurvey';
import { PublicGuard } from './guard/public.guard';

const PublicRouter = () => {
  return (
    <>
      {/*TODO: fix this route later*/}
      {document.location.pathname !== '/student-survey' && <PublicHeader />}
      <Routes>
        <Route exact path="/" element={<PublicSection />} />
        {/* <Route element={<PublicGuard />}> */}
          <Route exact path="/share-survey" element={<ShareSurvey />} />
          <Route exact path="/professor-survey" element={<ProfessorSurvey />} />
          <Route exact path="/student-survey" element={<StudentSurvey />} />
          <Route exact path="/professor-profile" element={<ProfessorProfile />} />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route exact path="/completed-survey" element={<CompletedSurvey />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default PublicRouter;

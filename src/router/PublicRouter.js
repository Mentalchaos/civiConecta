import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from 'src/components/NotFound/NotFound';
import PublicSection from 'src/components/PublicSection';
import PublicHeader from 'src/components/PublicSection/Header/PublicHeader';
import ShareSurvey from 'src/components/PublicSection/Surveys/ShareSurvey';
import ProfessorSurvey from 'src/components/PublicSection/Surveys/ProfessorSurvey';
import ProfessorProfile from 'src/components/PublicSection/ProfessorProfile';
import CompletedSurvey from 'src/components/PublicSection/Surveys/CompletedSurvey/CompletedSurvey';
import Results from 'src/components/PublicSection/Results';
import SituationsDashboard from 'src/components/PublicSection/SituationsDashboard';
import EphemerisDashboard from 'src/components/PublicSection/EphemerisDashboard';
import Planning from 'src/components/PublicSection/Planning';
import UnitsDashboard from 'src/components/PublicSection/UnitsDashboard';

const PublicRouter = () => {
  return (
    <>
      {/* TODO: fix this route later*/}
      {document.location.pathname !== '/student-survey' && <PublicHeader />}
      <Routes>
        <Route exact path="/" element={<PublicSection />} />
        {/* <Route element={<PublicGuard />}> */}
          <Route exact path="/share-survey" element={<ShareSurvey />} />
          <Route exact path="/results" element={<Results />} />
          <Route exact path="/situations-dashboard/:gradeId" element={<SituationsDashboard />} />
          <Route exact path="/ephemeris-dashboard/:gradeId" element={<EphemerisDashboard />} />
          <Route exact path="/professor-survey" element={<ProfessorSurvey />} />
          <Route exact path="/professor-profile" element={<ProfessorProfile />} />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route exact path="/completed-survey" element={<CompletedSurvey />} />
          <Route exact path="/planning/:planningId/:title/:type" element={<Planning />} />
          <Route exact path="/units-dashboard/:unitId" element={<UnitsDashboard />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default PublicRouter;

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
import EphemeriesDashboard from 'src/components/PublicSection/EphemeriesDashboard';
import Planning from 'src/components/PublicSection/Planning';
import UnitsDashboard from 'src/components/PublicSection/UnitsDashboard';
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
          <Route exact path="/results" element={<Results />} />
          <Route exact path="/situations-dashboard" element={<SituationsDashboard />} />
          <Route exact path="/ephemeries-dashboard" element={<EphemeriesDashboard />} />
          <Route exact path="/professor-survey" element={<ProfessorSurvey />} />
          <Route exact path="/professor-profile" element={<ProfessorProfile />} />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route exact path="/completed-survey" element={<CompletedSurvey />} />
          <Route exact path="/planning/:planningId/:title" element={<Planning />} />
          <Route exact path="/units-dashboard" element={<UnitsDashboard />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default PublicRouter;

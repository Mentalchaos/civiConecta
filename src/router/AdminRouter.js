import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import Ephemeris from 'src/components/Ephemeris/Ephemeris';
import Main from 'src/components/Main';
import Manager from 'src/components/Manager/Manager';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Situations from 'src/components/Situations/Situations';
import StudentSurvey from 'src/components/Surveys/Student';
import TeacherSurvey from 'src/components/TeacherSurvey/TeacherSurvey';
import UnitsSection from 'src/components/UnitsSection/UnitsSection';
import QuestionSection from 'src/components/Question';
import { AdminGuard } from './guard/admin.guard';

const AdminRouter = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route element={<AdminGuard />}>
          <Route path="*" element={<Main />} />
          <Route path="dashboard" element={<Main />} />
          <Route path="teacher-survey" element={<TeacherSurvey />} />
          <Route path="student-survey/:surveyId/questions" element={<QuestionSection />} />
          <Route path="student-survey" element={<StudentSurvey />} />
          <Route path="units" element={<UnitsSection />} />
          <Route path="manager" element={<Manager />} />
          <Route path="situations" element={<Situations />} />
          <Route path="ephemeris" element={<Ephemeris />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRouter;

import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Ephemeris from 'src/components/Ephemeris/Ephemeris';
import Main from 'src/components/Main';
import Manager from 'src/components/Manager/Manager';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Situations from 'src/components/Situations/Situations';
import StudentSurvey from 'src/components/Surveys/Student';
import TeacherSurvey from 'src/components/Surveys/Teacher';
import UnitsSection from 'src/components/UnitsSection';
import UnitManager from 'src/components/UnitsSection/UnitManager';
import { StudentQuestionSection, TeacherQuestionSection } from 'src/components/Question';
import { AdminGuard } from './guard/admin.guard';

const AdminRouter = () => {
  return (
    <Fragment>
      <Sidebar />
      <Routes>
        <Route element={<AdminGuard />}>
          <Route path="*" element={<Main />} />
          <Route path="dashboard" element={<Main />} />
          <Route path="teacher-survey/:surveyType/:topicId/questions" element={<TeacherQuestionSection />} />
          <Route path="student-survey/:surveyType/:topicId/questions" element={<StudentQuestionSection />} />
          <Route path="student-survey" element={<StudentSurvey />} />
          <Route path="teacher-survey" element={<TeacherSurvey />} />
          <Route path="units/:unitId" element={<UnitManager />} />
          <Route path="units" element={<UnitsSection />} />
          <Route path="manager" element={<Manager />} />
          <Route path="situations" element={<Situations />} />
          <Route path="ephemeris" element={<Ephemeris />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default AdminRouter;

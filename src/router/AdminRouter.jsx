import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from 'src/components/Main';
import ListEstablishments from 'src/components/Manager/ListEstablishments';
import Sidebar from 'src/components/Sidebar/Sidebar';
import StudentSurvey from 'src/components/Surveys/Student';
import TeacherSurvey from 'src/components/Surveys/Teacher';
import UnitsSection from 'src/components/UnitsSection';
import UnitManager from 'src/components/UnitsSection/UnitManager';
import Planification from 'src/components/Planification';
import { StudentQuestionSection, TeacherQuestionSection } from 'src/components/Question';
import { AdminGuard } from './guard/admin.guard';
import Situations from 'src/components/Events/Situations';
import Ephemeris from 'src/components/Events/Ephemeris';
import EditEstablishment from 'src/components/Manager/EditEstablishment';
import EditCourse from 'src/components/Manager/EditCourse';

// @TODO: Fix this
// window.sse = new EventSource('http://errcake.ngrok.io/stream-events');

// window.sse.onmessage = (event) => {
//   const data = JSON.parse(event.data);
//   console.log(data);
// };

const AdminRouter = () => {
  return (
    <Fragment>
      <Sidebar />
      <Routes>
        <Route element={<AdminGuard />}>
          <Route path="*" element={<Main />} />
          <Route path="dashboard" element={<Main />} />
          <Route
            path="teacher-survey/:surveyType/:topicId/questions"
            element={<TeacherQuestionSection />}
          />
          <Route
            path="student-survey/:surveyType/:topicId/questions"
            element={<StudentQuestionSection />}
          />
          <Route path="student-survey" element={<StudentSurvey />} />
          <Route path="teacher-survey" element={<TeacherSurvey />} />
          <Route path="units/:unitId" element={<UnitManager />} />
          <Route path="units" element={<UnitsSection />} />
          <Route path="situations" element={<Situations />} />
          <Route path="ephemeris" element={<Ephemeris />} />
          <Route
            path=":parentType/lesson/:lessonId"
            element={<Planification />}
          />
          <Route path="manager/:establishmentId/course/:courseId" element={<EditCourse />} />
          <Route path="manager/:establishmentId" element={<EditEstablishment />} />
          <Route path="manager" element={<ListEstablishments />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default AdminRouter;

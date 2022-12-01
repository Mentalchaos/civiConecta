import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Ephemeris from 'src/components/Ephemeris/Ephemeris';
import Main from 'src/components/Main';
import Manager from 'src/components/Manager/Manager';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Situations from 'src/components/Situations/Situations';
import StudentSurvey from 'src/components/StudentSurvey/StudentSurvey';
import TeacherSurvey from 'src/components/TeacherSurvey/TeacherSurvey';
import UnitsSection from 'src/components/UnitsSection/UnitsSection';

const AdminRouter = ({ userData }) => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/manager" element={<Manager />} />
        <Route path="/dashboard" element={<Main />} />
        <Route path="/units" element={<UnitsSection />} />
        <Route path="/teacher-survey" element={<TeacherSurvey />} />
        <Route path="/student-survey" element={<StudentSurvey />} />
        <Route path="/situations" element={<Situations />} />
        <Route path="/ephemeris" element={<Ephemeris />} />
        <Route
          path="/*"
          element={
            userData ? (
              <Navigate to={'dashboard'} />
            ) : (
              <Navigate to={'login/auth'} />
            )
          }
        />
      </Routes>
    </>
  );
};

export default AdminRouter;

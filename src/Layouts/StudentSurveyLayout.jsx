import { Fragment } from 'react';
import SectionsHeader from 'src/components/SectionsHeader/SectionsHeader';
import studentImage from 'src/assets/images/student-image.png';

const StudentSurveyLayout = ({ children }) => {
  return (
    <Fragment>
      <SectionsHeader image={studentImage} />
      <main className="main-content">
        <div className="header">
          <div>
            <span className="section-title">Encuesta al estudiante</span>
          </div>
        </div>
        {children}
      </main>
    </Fragment>
  );
};

export default StudentSurveyLayout;

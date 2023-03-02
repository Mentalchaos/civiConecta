import { Fragment } from 'react';
import SectionsHeader from 'src/components/SectionsHeader/SectionsHeader';
import image from 'src/assets/images/teacher-banner.png';

const TeacherSurveyLayout = ({ children }) => {
  return (
    <Fragment>
      <SectionsHeader image={image} />
      <main className="main-content">
        <div className="header">
          <div>
            <span className="section-title">Encuesta al docente</span>
          </div>
        </div>
        {children}
      </main>
    </Fragment>
  );
};

export default TeacherSurveyLayout;

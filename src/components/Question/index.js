import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Question from './Question';
import studentImage from 'src/assets/images/student-image.png';

const QuestionSection = () => {
  const { surveyId } = useParams();
  console.log('args', surveyId);

  return (
    <Fragment>
      <SectionsHeader image={studentImage} />
      <main className="main-content">
          <div className="header">
            <div>
              <span className="section-title">Encuesta al estudiante</span>
            </div>
          </div>



          {/* <Question
            type="Student"
            title={states.title}
            surveys={states.surveys}
            selectedTopic={states.selectedTopic}
          /> */}
      </main>
    </Fragment>
  );
};

export default QuestionSection;

import { useParams } from 'react-router-dom';
import Loading from '../UI/Loading';
import StudentSurveyLayout from 'src/Layouts/StudentSurveyLayout';
import TeacherSurveyLayout from 'src/Layouts/TeacherSurveyLayout';
import Question from './Question';
import useQuestion from './hooks/useQuestion';
import { QuestionContext } from './context';

const generateQuestionSection = (Layout) => () => {
  const { topicId } = useParams();
  const { states, setters, actions } = useQuestion(topicId);

  return (
    <QuestionContext.Provider value={{states, setters, actions}}>
      <Layout>
        <Loading isLoading={states.isLoading}>
          <Question />
        </Loading>
      </Layout>
    </QuestionContext.Provider>
  );
};

const StudentQuestionSection = generateQuestionSection(StudentSurveyLayout);
const TeacherQuestionSection = generateQuestionSection(TeacherSurveyLayout);

export {
  StudentQuestionSection,
  TeacherQuestionSection
};

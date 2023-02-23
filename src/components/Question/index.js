import { useParams } from 'react-router-dom';
import Loading from '../UI/Loading';
import StudentSurveyLayout from 'src/Layouts/StudentSurveyLayout';
import Question from './Question';
import useQuestion from './hooks/useQuestion';
import { QuestionContext } from './context';

const QuestionSection = () => {
  const { topicId, surveyType } = useParams();
  const { states, setters, actions } = useQuestion(topicId, surveyType);

  return (
    <QuestionContext.Provider value={{states, setters, actions}}>
      <StudentSurveyLayout>
        <Loading isLoading={states.isLoading}>
          <Question />
        </Loading>
      </StudentSurveyLayout>
    </QuestionContext.Provider>
  );
};

export default QuestionSection;

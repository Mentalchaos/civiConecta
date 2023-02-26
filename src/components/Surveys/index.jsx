import { useNavigate } from 'react-router-dom';
import Survey from './Survey';
import useSurvey from './useSurvey';
import { SurveyContext } from './context';

const createSurveyType = (surveyType, Layout) => () => {
  const navigate = useNavigate();
  const { states, setters, actions } = useSurvey();

  const handleEditCategory = (topicId) => () => {
    navigate(`${surveyType}/${topicId}/questions`);
  };

  return (
    <SurveyContext.Provider value={{ states, setters, actions }}>
      <Layout>
        <Survey onEditCategory={handleEditCategory} surveyType={surveyType} />
      </Layout>
    </SurveyContext.Provider>
  );
};


export default createSurveyType;

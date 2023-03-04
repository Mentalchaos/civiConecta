import StudentType from 'src/components/PublicSection/Surveys/FirstStep/components/StudentType';
import TeacherType from 'src/components/PublicSection/Surveys/FirstStep/components/TeacherType';

const FirstStep = ({ type, setIsStartSurvey }) => {
  const Component = type === 'teacher' ? TeacherType : StudentType;

  return (
    <section className="survey-content__start">
      <Component setIsStartSurvey={setIsStartSurvey} />
    </section>
  );
};

export default FirstStep;

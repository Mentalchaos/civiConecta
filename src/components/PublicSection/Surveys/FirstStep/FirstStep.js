import React, { useEffect } from 'react';
import StudentType from 'src/components/PublicSection/Surveys/FirstStep/components/StudentType';
import TeacherType from 'src/components/PublicSection/Surveys/FirstStep/components/TeacherType';

const FirstStep = ({ type, setIsStartSurvey }) => {
  return (
    <section className="survey-content__start">
      {type === 'teacher' ? (
        <TeacherType setIsStartSurvey={setIsStartSurvey} />
      ) : (
        <StudentType setIsStartSurvey={setIsStartSurvey} />
      )}
    </section>
  );
};

export default FirstStep;

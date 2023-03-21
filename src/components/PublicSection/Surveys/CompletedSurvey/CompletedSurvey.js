import React from 'react';
import StudentType from './components/StudentType';
import TeacherType from './components/TeacherType';

import '../index.css';

const CompletedSurvey = ({ type }) => {
  return <>{type === 'user' ? <TeacherType /> : <StudentType />}</>;
};

export default CompletedSurvey;

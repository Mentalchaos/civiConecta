import { useState, useEffect } from 'react';
import * as lessonRequest from 'src/services/admin/lesson.request.js';


const useUnitPlanification = (initialValues) => {
  console.log('lesson request', lessonRequest);

  const [topic, setTopic] = useState(initialValues.topic ?? '');
  const [keywords, setKeywords] = useState(initialValues.keywords ?? []);
  const [studentMaterials, setStudentMaterials] = useState(initialValues.studentMaterials ?? []);
  const [teacherMaterials, setTeacherMaterials] = useState(initialValues.teacherMaterials ?? []);
  const [startActivity, setStartActivity] = useState(initialValues.startActivity ?? '');
  const [mainActivity, setMainActivity] = useState(initialValues.mainActivity ?? '');
  const [endActivity, setEndActivity] = useState(initialValues.endActivity ?? '');
  const [description, setDescription] = useState(initialValues.description ?? '');
  const [date, setDate] = useState(initialValues.date ?? '');
  const [objective, setObjective] = useState(initialValues.objective ?? '');

  return {
    states: {
      topic,
      keywords,
      studentMaterials,
      teacherMaterials,
      startActivity,
      mainActivity,
      endActivity,
      description,
      date,
      objective
    },
    setters: {
      changeField(fieldName) {
        return (value) => {
          const mutators = {
            topic: setTopic,
            keywords: setKeywords,
            studentMaterials: setStudentMaterials,
            teacherMaterials: setTeacherMaterials,
            startActivity: setStartActivity,
            mainActivity: setMainActivity,
            endActivity: setEndActivity,
            description: setDescription,
            date: setDate,
            objective: setObjective
          };

          mutators[fieldName](value);
        };
      }
    },
    actions: {
      updatePlanification() {

      }
    }
  };
};

export default useUnitPlanification;

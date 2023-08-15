import { useState, useEffect } from 'react';
import * as lessonRequest from 'src/services/admin/lesson.request.js';


const useUnitPlanification = (lessonId) => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [lesson, setLesson] = useState({});
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [studentMaterials, setStudentMaterials] = useState('');
  const [teacherMaterials, setTeacherMaterials] = useState('');
  const [startActivity, setStartActivity] = useState('');
  const [mainActivity, setMainActivity] = useState('');
  const [endActivity, setEndActivity] = useState('');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');

  useEffect(() => {
    async function fn() {
      setLoading(true);

      const response = await lessonRequest.getLessonById(lessonId);
      const documents = response.lesson.files;
      const currentLesson = response.lesson;

      setFiles(documents);
      setLesson(currentLesson);
      setTopic(currentLesson.planning.topic);
      setKeywords(currentLesson.planning.keywords.join(','));
      setStartActivity(currentLesson.planning.startActivity);
      setMainActivity(currentLesson.planning.mainActivity);
      setEndActivity(currentLesson.planning.endActivity);
      setObjective(currentLesson.objective);
      setStudentMaterials(currentLesson.planning.materials.student.join(','));
      setTeacherMaterials(currentLesson.planning.materials.teacher.join(','));

      setLoading(false);
    }

    fn();

  }, [lessonId]);

  return {
    states: {
      loading,
      lesson,
      files,
      planning: {
        topic,
        keywords,
        studentMaterials,
        teacherMaterials,
        startActivity,
        mainActivity,
        endActivity,
        description,
        objective
      },
      get withoutFiles() {
        return !loading && !files.length;
      }
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
            objective: setObjective
          };

          return mutators[fieldName](value);
        };
      }
    },
    actions: {
      async updatePlanification() {
        const separator = /(,|-)/;

        const payload = {
          topic,
          keywords: keywords.split(separator),
          studentMaterials: studentMaterials.split(separator),
          teacherMaterials: teacherMaterials.split(separator),
          startActivity,
          mainActivity,
          endActivity,
          objective
        };

        return lessonRequest.updateLesson(lessonId, payload);
      }
    }
  };
};

export default useUnitPlanification;

import { useEffect, useState } from 'react';
import * as lessonRequest from 'src/services/admin/lesson.request';
import * as fileRequest from 'src/services/admin/files.request';

const usePlanification = (lessonId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lesson, setLesson] = useState({});
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function fn() {
      setIsLoading(true);
      const response = await lessonRequest.getLessonById(lessonId);
      setLesson(response.lesson);
      setIsLoading(false);
    }

    fn();
  }, [lessonId]);

  return {
    states: {
      lesson,
      files,
      isLoading
    },
    setters: {},
    actions: {
      async uploadFile(fileData) {
        const filename = fileData.name;
        const formData = new FormData();
        formData.append('originalFilename', filename);
        formData.append('file', fileData);

        const response = await fileRequest.uploadByLesson(lessonId, formData);
        setFiles([...files, response.file]);
      },
      updatePlanification(payload) {
        console.log('payload', payload);
      }
    }
  };
};

export default usePlanification;

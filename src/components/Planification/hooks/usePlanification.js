import { useEffect, useState } from 'react';
import * as lessonRequest from 'src/services/admin/lesson.request';
import * as fileRequest from 'src/services/admin/files.request';
import createServices from 'src/services/admin/event.request';

const usePlanification = (lessonId, eventId, eventType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lesson, setLesson] = useState({});
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function fn() {
      setIsLoading(true);
      if (eventId) {
        const response = await createServices(eventType).getEventById(eventId);
        setFiles(response.event.documents);
        setLesson(response.event);
        setIsLoading(false);
      } else {
        const response = await lessonRequest.getLessonById(lessonId);
        setFiles(response.lesson.documents);
        setLesson(response.lesson);
        setIsLoading(false);
      }
    }

    fn();
  }, [lessonId, eventId, eventType]);

  return {
    states: {
      lesson,
      files,
      isLoading,
    },
    setters: {},
    actions: {
      async uploadFile(fileData) {
        setIsLoading(true);
        const filename = fileData.name;
        const formData = new FormData();
        formData.append('originalFilename', filename);
        formData.append('file', fileData);

        if (eventId && eventType) {
          const response = await fileRequest.uploadByLesson(eventId, formData);
          setFiles([...files, response.file]);
          setIsLoading(false);
        } else {
          const response = await fileRequest.uploadByLesson(lessonId, formData);
          setFiles([...files, response.file]);
          setIsLoading(false);
        }
      },
      updatePlanification(payload) {
        console.log('payload', payload);
      },
    },
  };
};

export default usePlanification;

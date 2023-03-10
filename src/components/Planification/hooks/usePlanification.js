import { useEffect, useState } from 'react';
import * as lessonRequest from 'src/services/admin/lesson.request';
import * as fileRequest from 'src/services/admin/files.request';
import createServices from 'src/services/admin/event.request';


const usePlanification = (lessonId, eventId, eventType) => {

  const [isLoading, setIsLoading] = useState(false);
  const [lesson, setLesson] = useState({});
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [tableId, setTableId] = useState(crypto.randomUUID());
  const [rowSelected, setRowSelected] = useState(false);

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
      rowSelected,
      lesson,
      files,
      tableId,
      isLoading,
    },
    setters: {},
    actions: {
      updatePlanification(payload) {
        console.log('payload', payload);
      },
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
      selectFile(file) {
        setRowSelected(!!file);
        setFile(file);
      },
      async downloadFile() {
        const response = await fileRequest.downloadFile(file.uuid, file.filename);
        const content = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(content);
        link.download = file.filename;
        link.click();
      },
      async deleteFile() {
        await fileRequest.deleteFile(file.uuid);
        setFiles(files.filter(f => f.uuid !== file.uuid));
        setTableId(crypto.randomUUID());
        setFile(null);
        setRowSelected(null);
      },
    },
  };
};

export default usePlanification;

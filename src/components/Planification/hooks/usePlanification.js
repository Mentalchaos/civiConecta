import { useEffect, useState } from 'react';
import * as lessonRequest from 'src/services/admin/lesson.request';
import * as fileRequest from 'src/services/admin/files.request';
import createServices from 'src/services/admin/event.request';
import { createUUID } from 'src/utils/uuid';


const usePlanification = (lessonId, eventId, eventType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lesson, setLesson] = useState({});
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [tableId, setTableId] = useState(createUUID());
  const [rowSelected, setRowSelected] = useState(false);

  useEffect(() => {
    async function fn() {
      let documents;
      let lesson;

      setIsLoading(true);

      if (eventId) {
        const response = await createServices(eventType).getEventById(eventId);
        documents = response.event.documents;
        lesson = response.event;
      } else {
        const response = await lessonRequest.getLessonById(lessonId);
        documents = response.lesson.files;
        lesson = response.lesson;
      }

      setFiles(documents);
      setLesson(lesson);
      setIsLoading(false);
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
        return createServices(eventType).savePlanning(eventId, payload);
      },
      async uploadFile(fileData) {
        setIsLoading(true);
        const filename = fileData.name;
        const formData = new FormData();
        formData.append('originalFilename', filename);
        formData.append('file', fileData);
        const id = lessonId || lesson.lessonId;
        const response = await fileRequest.uploadByLesson(id, formData);
        setFiles([...files, response.file]);
        setIsLoading(false);
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
        setTableId(createUUID());
        setFile(null);
        setRowSelected(null);
      },
    },
  };
};

export default usePlanification;

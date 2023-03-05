import { useEffect, useState } from 'react';
import * as lessonRequest from 'src/services/admin/lesson.request';
import * as fileRequest from 'src/services/admin/files.request';

const usePlanification = (lessonId) => {
  const [tableId, setTableId] = useState(crypto.randomUUID());
  const [isLoading, setIsLoading] = useState(false);
  const [lesson, setLesson] = useState({});
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [rowSelected, setRowSelected] = useState(false);

  useEffect(() => {
    async function fn() {
      setIsLoading(true);
      const response = await lessonRequest.getLessonById(lessonId);
      setLesson(response.lesson);
      setFiles(response.lesson.files);
      setIsLoading(false);
    }

    fn();
  }, [lessonId]);

  return {
    states: {
      lesson,
      files,
      rowSelected,
      isLoading,
      tableId
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
      }
    }
  };
};

export default usePlanification;

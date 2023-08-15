import { useState, useEffect } from 'react';
import * as lessonRequest from 'src/services/admin/lesson.request.js';
import * as fileRequest from 'src/services/admin/files.request.js';
import { createUUID } from 'src/utils/uuid';


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
  const [selectedDocument, setSelectedDocument] = useState({});

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
      selectedDocument,
      description,
      planning: {
        topic,
        keywords,
        studentMaterials,
        teacherMaterials,
        startActivity,
        mainActivity,
        endActivity,
        objective
      },
      get withoutFiles() {
        return !loading && !files.length;
      },
      get documentQuantity() {
        return files.length;
      },
      get documents() {
        return files.map(f => {
          return {
            uuid: f.uuid,
            Nombre: f.filename
          }
        });
      }
    },
    setters: {
      changeField(fieldName) {
        return (evt) => {
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

          return mutators[fieldName](evt.target.value);
        };
      },
      selectDocument(document) {
        setSelectedDocument(document);
      }
    },
    actions: {
      async updatePlanification() {
        const toArray = (txt) => {
          const separator = /[,-]/g;
          const trim = x => x.trim();
          return txt.split(separator).map(trim);
        };

        const payload = {
          topic,
          keywords: toArray(keywords),
          studentMaterials: toArray(studentMaterials),
          teacherMaterials: toArray(teacherMaterials),
          startActivity,
          mainActivity,
          endActivity,
          objective,
          description
        };

        return lessonRequest.updateLesson(lessonId, payload);
      },
      async downloadFile() {
        const response = await fileRequest.downloadFile(
          selectedDocument.uuid,
          selectedDocument.filename
        );
        const content = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(content);
        link.download = selectedDocument.filename;
        link.click();
      },
      async deleteFile() {
        await fileRequest.deleteFile(selectedDocument.uuid);
        setFiles(files.filter(f => f.uuid !== selectedDocument.uuid));
        setSelectedDocument({});
      },
      async uploadFile(fileData) {
        setLoading(true);

        const formData = new FormData();
        formData.append('originalFilename', fileData.name);
        formData.append('file', fileData);

        const response = await fileRequest.uploadByLesson(lessonId, formData);

        setFiles([...files, response.file]);
        setLoading(false);
      }
    }
  };
};

export default useUnitPlanification;

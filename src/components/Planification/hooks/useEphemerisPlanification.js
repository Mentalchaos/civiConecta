import { useState, useEffect, useReducer } from 'react';
import * as lessonRequest from 'src/services/admin/lesson.request.js';
import * as fileRequest from 'src/services/admin/files.request.js';
import { reduceEphemeris, initialState } from './reducers/reduceEphemeris.js';


const useEphemerisPlanification = (lessonId) => {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reduceEphemeris, initialState);

  useEffect(() => {
    async function fn() {
      setLoading(true);
      const response = await lessonRequest.getLessonById(lessonId);
      dispatch({ type: 'INITIAL_DATA', payload: response });
      setLoading(false);
    }

    fn();

  }, [lessonId]);

  const makeDispatch = (term) => {
    const actionType = term
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      .toUpperCase();

    return (value) => {
      dispatch({ type: `SET_${actionType}`, payload: value });
    };
  };

  return {
    states: {
      loading,
      lesson: state.lesson,
      files: state.files,
      selectedDocument: state.selectedDocument,
      description: state.description,
      date: state.date,
      name: state.name,
      filepath: state.filepath,
      planning: {
        topic: state.planning.topic,
        studentMaterials: state.planning.studentMaterials,
        teacherMaterials: state.planning.teacherMaterials,
        startActivity: state.planning.startActivity,
        mainActivity: state.planning.mainActivity,
        endActivity: state.planning.endActivity,
        objective: state.planning.objective
      },
      get withoutFiles() {
        return !loading && !state.files.length;
      },
      get documentQuantity() {
        return state.files.length;
      },
      get documents() {
        return state.files.map(f => {
          return {
            uuid: f.uuid,
            Nombre: f.filename
          };
        });
      }
    },
    setters: {
      changeField(fieldName) {
        return (evt) => {
          const mutators = {
            topic: makeDispatch('topic'),
            studentMaterials: makeDispatch('studentMaterials'),
            teacherMaterials: makeDispatch('teacherMaterials'),
            startActivity: makeDispatch('startActivity'),
            mainActivity: makeDispatch('mainActivity'),
            endActivity: makeDispatch('endActivity'),
            description: makeDispatch('description'),
            objective: makeDispatch('objective'),
            date: makeDispatch('date')
          };

          return mutators[fieldName](evt.target.value);
        };
      },
      selectDocument(doc) {
        dispatch({ type: 'SET_SELECTED_DOCUMENT', payload: doc });
      },
      setName(name) {
        dispatch({ type: 'SET_NAME', payload: name });
      },
      setFilepath(filepath) {
        dispatch({ type: 'SET_FILEPATH', payload: filepath });
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
          topic: state.planning.topic,
          studentMaterials: toArray(state.planning.studentMaterials),
          teacherMaterials: toArray(state.planning.teacherMaterials),
          startActivity: state.planning.startActivity,
          mainActivity: state.planning.mainActivity,
          endActivity: state.planning.endActivity,
          objective: state.planning.objective,
          description: state.description,
          date: state.date
        };

        return lessonRequest.updateLesson(lessonId, payload);
      },
      async downloadFile() {
        const response = await fileRequest.downloadFile(
          state.selectedDocument.uuid,
          state.selectedDocument.filename
        );
        const content = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(content);
        link.download = state.selectedDocument.filename;
        link.click();
      },
      async deleteFile() {
        await fileRequest.deleteFile(state.selectedDocument.uuid);
        dispatch({ type: 'DELETE_FILE', payload: state.selectedDocument });
      },
      async uploadFile(fileData) {
        setLoading(true);

        const formData = new FormData();
        formData.append('originalFilename', fileData.name);
        formData.append('file', fileData);

        const response = await fileRequest.uploadByLesson(lessonId, formData);
        dispatch({ type: 'ADD_FILE', payload: response.file });
        setLoading(false);
      },
      async uploadDocument(){
        const payload = {
          filename: state.name,
          filepath: state.filepath
        };
        await fileRequest.uploadDocumentByLessonId(state.lesson.id, payload);
      },
      async removeDocument(documentId){
        await fileRequest.removeDocumentByLessonId(state.lesson.id, documentId);
      }
    }
  };
};

export default useEphemerisPlanification;

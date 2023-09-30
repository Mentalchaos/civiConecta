import { useEffect, useState, createContext } from 'react';
import service from './editCourse.service';

const useEditCourse = (courseId) => {
  useEffect(() => {
    console.log('cargando cursor', courseId);
  }, [courseId])

  return {
    states: {
      students: []
    },
    actions: {}
  };
};

const EditCourseContext = createContext({});

export { useEditCourse, EditCourseContext };

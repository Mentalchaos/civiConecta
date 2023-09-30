import { useEffect, useState, createContext } from 'react';
import service from './editCourse.service';

const useEditCourse = (courseId) => {
  const [course, setCourse] = useState({});
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fn() {
      const [studentsResponse, courseResponse] = await Promise.all([
        service.fetchStudentsByCourse(courseId),
        service.fetchCourse(courseId)
      ]);

      setStudents(studentsResponse.students);
      setCourse(courseResponse.course);
    }

    fn();
  }, [courseId])

  return {
    states: {
      students,
      course
    },
    actions: {}
  };
};

const EditCourseContext = createContext({});

export { useEditCourse, EditCourseContext };

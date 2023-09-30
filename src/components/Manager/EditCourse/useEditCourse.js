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
    actions: {
      async addStudent(name, run) {
        const formattedName = name.trim();
        const formattedRun = run.trim();

        const coincidences = students
          .filter(s => s.name === formattedName)
          .filter(s => s.run === formattedRun);

        if (coincidences.length) {
          return Promise.reject('Ya existe este estudiante');
        }

        const response = await service.addStudent(courseId, formattedName, formattedRun);
        const newStudents = [...students, response.student];
        setStudents(newStudents);

        return Promise.resolve();
      }
    }
  };
};

const EditCourseContext = createContext({});

export { useEditCourse, EditCourseContext };

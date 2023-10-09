import { useEffect, useState, createContext } from 'react';
import service from './establishment.service';


const useEditEstablishment = (establishmentId) => {
  const [grades, setGrades] = useState([]);
  const [letters, setLetters] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    async function fn() {
      const [
        gradesResponse,
        lettersResponse,
        coursesResponse,
        teacherResponse
      ] = await Promise.all([
        service.fetchGrades(),
        service.fetchLetters(),
        service.fetchCourses(establishmentId),
        service.fetchTeachers(establishmentId)
      ]);

      setGrades(gradesResponse.grades);
      setLetters(lettersResponse.letters);
      setCourses(coursesResponse.courses);
      setTeachers(teacherResponse.teachers);
    }

    fn();

  }, [establishmentId]);

  return {
    states: {
      grades,
      letters,
      courses,
      teachers,
      filteredCourses
    },
    actions: {
      selectCoursesByGrade(gradeId) {
        const pk = Number.parseInt(gradeId);
        const filteredCourses = courses.filter(c => c.gradeId === pk);
        setFilteredCourses(filteredCourses);
      },
      async createCourse(gradeId, letterId) {
        gradeId = Number.parseInt(gradeId);
        letterId = Number.parseInt(letterId);

        const coincidences = courses
          .filter(c => c.gradeId === gradeId)
          .filter(c => c.letterId === letterId);

        if (coincidences.length) {
          return Promise.reject('No se puede crear el curso porque ya existe');
        }

        const response = await service.createCourse(establishmentId, gradeId, letterId);
        const newCourses = [...courses, response.course];

        setCourses(newCourses);
        setFilteredCourses([]);
      }
    }
  };
};

const EditEstablishmentContext = createContext({});

export { useEditEstablishment, EditEstablishmentContext };

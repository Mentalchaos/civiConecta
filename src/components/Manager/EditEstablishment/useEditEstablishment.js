import { useEffect, useState, createContext } from 'react';
import service from './establishment.service';


const useEditEstablishment = (establishmentId) => {
  const [grades, setGrades] = useState([]);
  const [letters, setLetters] = useState([]);
  const [courses, setCourses] = useState([]);
  // const [selectedGrade, setSelectedGrade] = useState(null);
  // const [selectedLetter, setSelectedLetter] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    async function fn() {
      const [gradesResponse, lettersResponse, coursesResponse] = await Promise.all([
        service.fetchGrades(),
        service.fetchLetters(),
        service.fetchCourses(establishmentId)
      ]);

      console.log('grades', gradesResponse);
      console.log('letters', lettersResponse);
      console.log('courses', coursesResponse);

      setGrades(gradesResponse.grades);
      setLetters(lettersResponse.letters);
      setCourses(coursesResponse.courses);
    }

    fn();

  }, [establishmentId]);

  return {
    states: {
      grades,
      letters,
      courses,
      filteredCourses
    },
    actions: {
      selectCoursesByGrade(gradeLevel) {
        const filteredCourses = courses.filter(c => c.level === gradeLevel);
        setFilteredCourses(filteredCourses);
      },
      async createCourse(gradeId, letterId) {
        const response = await service.createCourse(establishmentId, gradeId, letterId);
        console.log('response', response);
      }
    }
  };
};

const EditEstablishmentContext = createContext({});

export { useEditEstablishment, EditEstablishmentContext };

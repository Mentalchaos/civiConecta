import { useState, useEffect } from 'react';
import useForm from 'src/hooks/useForm';
import { getGrades } from 'src/services/admin/grades.request';
import { updateCoursesEstablishment } from 'src/services/admin/establishment.request';

const useStateAssignment = (institutionSelected) => {
  const [grades, setGrades] = useState([]);
  const [studentsAdded, setStudentsAdded] = useState([]);
  const [institutionCourses, setInstitutionCourses] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { values, handleInputChange, reset } = useForm({
    grade: 'Seleccionar',
    letter: 'Seleccionar',
    name: '',
    run: '',
  });
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  useEffect(() => {
    async function fn() {
      const filterCoursesByGrade = institutionSelected
        .grades
        .filter(g => g.level === values.grade);

      setInstitutionCourses(filterCoursesByGrade);

      const response = await getGrades();

      if (response.ok) {
        setGrades(response.grades);
      }
    }

    fn();
  }, [values.grade]);

  return {
    letters,
    grades,
    studentsAdded,
    institutionCourses,
    fetching,
    errorMessage,
    values,
    actions: {
      setGrades,
      setStudentsAdded,
      setInstitutionCourses,
      setFetching,
      setErrorMessage,
      handleInputChange,
      reset
    },
    get isGradeRenderable() {
      return institutionCourses.length && !fetching && values.grade !== 'Seleccionar';
    },
    get isAddStudentDisabled() {
      return values.name.length < 6 || values.run.length < 9;
    },
    get isSendFormDisabled() {
      return !studentsAdded.length || values.grade === 'Seleccionar' || values.letter === 'Seleccionar';
    }
  };
};

export default useStateAssignment;

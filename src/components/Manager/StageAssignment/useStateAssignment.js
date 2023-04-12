import { useState, useEffect } from 'react';
import useForm from 'src/hooks/useForm';
import { getGrades, getLetters } from 'src/services/admin/grades.request';
import {
  getCoursesByGrade,
  updateCoursesEstablishment,
} from 'src/services/admin/establishment.request';
import { fetchLoading } from 'src/utils/hookUtil';

const useStateAssignment = establishmentSelected => {
  const [establishmentDataToUpdate, setEstablishmentDataToUpdate] = useState({});
  const [grades, setGrades] = useState([]);
  const [letters, setLetters] = useState([]);
  const [institutionCourses, setInstitutionCourses] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { values, handleInputChange, reset } = useForm({
    grade: 'Seleccionar',
    letter: 'Seleccionar',
    name: '',
    run: '',
  });

  const fetchWrap = fetchLoading(setFetching);

  useEffect(() => {
    async function fn() {
      const [_grades, _letters] = await Promise.all([
        getGrades().then(r => r.grades),
        getLetters().then(r => r.letters.map(l => l.character)),
      ]);

      setGrades(_grades);
      setLetters(_letters);
    }

    fn();
  }, []);

  useEffect(() => {
    if (values.grade === 'Seleccionar') return;
    async function fn() {
      const coursesByGrade = await getCoursesByGrade(
        establishmentSelected.id,
        values.grade,
      );
      setInstitutionCourses(coursesByGrade.courses);
    }
    fn();
  }, [values.grade]);

  return {
    states: {
      establishmentDataToUpdate,
      letters,
      grades,
      institutionCourses,
      fetching,
      errorMessage,
      values,
      establishmentSelected,
      get getStudentsByGrade() {
        const studentsFiltered = establishmentSelected.students.filter(
          item => item.grade === values.grade,
        );
        return studentsFiltered;
      },
      get isAddStudentDisabled() {
        return (
          !values.name ||
          !values.run ||
          values.grade === 'Seleccionar' ||
          values.letter === 'Seleccionar'
        );
      },
      get isGradeSelected() {
        return !fetching && values.grade !== 'Seleccionar';
      },
    },
    setters: {
      setEstablishmentDataToUpdate,
      setGrades,
      setInstitutionCourses,
      setFetching,
      setErrorMessage,
    },
    actions: {
      handleInputChange,
      reset,
      updateCoursesEstablishment,
      addStudent: () => {
        const { grade, letter, name, run } = values;
        establishmentSelected.addGrade(grade).addLetter(letter).addStudent({ name, run });

        const clone = establishmentSelected.clone();
        setEstablishmentDataToUpdate(clone);
        reset();
      },
      deleteStudent: async () => {
        const { grade, letter, run } = values;
        if (!window.confirm('Esta seguro de que desea eliminar el estudiante ?')) {
          return;
        }
        establishmentSelected.addGrade(grade).addLetter(letter).deleteStudent({ run });

        const clone = establishmentSelected.clone();
        setEstablishmentDataToUpdate(clone);
        const response = await updateCoursesEstablishment(
          establishmentDataToUpdate.id,
          clone,
        );
        if (!response.ok) {
          setErrorMessage(response.error);
        }
      },
      addCourse: fetchWrap(async payload => {
        const response = await updateCoursesEstablishment(
          establishmentSelected.id,
          payload,
        );
        if (!response.ok) {
          setErrorMessage(response.error);
        }
      }),
    },
  };
};

export default useStateAssignment;

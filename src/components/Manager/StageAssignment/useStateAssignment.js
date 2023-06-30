import { useState, useEffect } from 'react';
import useForm from 'src/hooks/useForm';
import { getGrades, getLetters, getTableTeachers } from 'src/services/admin/grades.request';
import { updateCoursesEstablishment } from 'src/services/admin/establishment.request';

const useStateAssignment = (institutionSelected) => {
  // const [validRut, setValidRut] = useState(false);
  const [rut, setRut] = useState('');
  const [teachersData, setTeachersData] = useState([]);
  const [grades, setGrades] = useState([]);
  const [letters, setLetters] = useState([]);
  const [studentsAdded, setStudentsAdded] = useState([]);
  const [institutionCourses, setInstitutionCourses] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { values, handleInputChange, reset } = useForm({
    grade: 'Seleccionar',
    letter: 'Seleccionar',
    name: '',
  });

  useEffect(() => {
    async function fn() {
      const filterCoursesByGrade = institutionSelected.grades.filter(g => g.level === values.grade);
      setInstitutionCourses(filterCoursesByGrade);

      const [_grades, _letters, _teachersData] = await Promise.all([
        getGrades().then(r => r.grades),
        getLetters().then(r => r.letters.map(l => l.character)),
        getTableTeachers().then(r => r.teachers)
      ]);

      setGrades(_grades);
      setLetters(_letters);
      setTeachersData(_teachersData);
    }

    fn();
  }, [values.grade]);

  const updateEstablishment = async (establishment) => {
    setFetching(true);
    const payload = establishment.toJSON();
    await updateCoursesEstablishment(establishment.id, payload);
    setFetching(false);
  };


  return {
    teachersData,
    letters,
    grades,
    studentsAdded,
    institutionCourses,
    fetching,
    errorMessage,
    values,
    rut,
    actions: {
      setTeachersData,
      setGrades,
      setStudentsAdded,
      setInstitutionCourses,
      setFetching,
      setErrorMessage,
      handleInputChange,
      setRut,
      // handleInputChangeValidationRut,
      reset,
      updateCoursesEstablishment,
      updateEstablishment
    },
    get isGradeRenderable() {
      return institutionCourses.length && !fetching && values.grade !== 'Seleccionar';
    },
    get isAddStudentDisabled() {
      return values.name.length < 4 || rut.length < 9 || values.grade === 'Seleccionar' || values.letter === 'Seleccionar';
    },
    get isSendFormDisabled() {
      return !institutionSelected.students.length;
    },
  };
};

export default useStateAssignment;

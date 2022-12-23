import { useEffect, useState } from 'react';
import Button from 'src/components/UI/Button';
import Spinner from 'src/components/UI/Spinner';
import useForm from 'src/hooks/useForm';
import gotoIcon from 'src/assets/Icons/arrow-degree.svg';
import addStudentIcon from 'src/assets/Icons/add-student.svg';
import { getGrades } from 'src/services/admin/grades.request';
import { updateCoursesEstablishment } from 'src/services/admin/establishment.request';
import Memento from './memento.js';
import mergeAll from './mergeInstitutions.js';
import './StageAssignment.css';

const institutionState = new Memento();

const StageAssignment = ({
  title,
  changeStage,
  institutionSelected,
  onHandleCourseSelected,
}) => {
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

  useEffect(() => {
    const filterCoursesByGrade = institutionSelected.courses.filter(
      course => course.level === values.grade,
    );
    setInstitutionCourses(filterCoursesByGrade);
    getGrades().then(resp => {
      if (resp.ok) {
        setGrades(resp.grades);
      }
    });
  }, [values.grade]);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  const buttonStyles = {
    background: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 40px',
    borderRadius: '20px',
  };

  const persistInnerState = () => {
    if (!institutionState.isSerialized()) {
      institutionState.serialize(institutionCourses);
    }

    const institutionManager = institutionState.deserialize();
    institutionManager.saveStudent(values);
    institutionState.serialize(institutionManager.institution);
  };

  const handleAddStudent = e => {
    e.preventDefault();
    persistInnerState();
    const { name, run } = values;
    if (!name || !run) return;
    const newStudent = { name, run, survey: [] };
    setStudentsAdded([...studentsAdded, newStudent]);
    values.name = '';
    values.run = '';
  };

  const handleCourseSelected = course => {
    changeStage('Detalle');
    const courseSelected = {
      ...course,
      establishment: institutionSelected.number,
    };
    onHandleCourseSelected(courseSelected);
  };

  const handleAddCourse = e => {
    e.preventDefault();
    onUpdateEstablishment(institutionSelected.number);
  };

  const onUpdateEstablishment = establishmentNumber => {
    setFetching(true);

    const payload = mergeAll(
      institutionSelected,
      institutionState.deserialize().institution
    );

    institutionState.destroy();

    updateCoursesEstablishment(establishmentNumber, payload).then(resp => {
      if (resp.error?.message?.includes('run')) {
        setErrorMessage('Rut incorrecto');
        setFetching(false);
        setStudentsAdded([]);
      }
      if (resp.error?.duplicateStudents) {
        setErrorMessage(
          `Estudiante ya se encuentra en un curso, rut: ${resp.error.duplicateStudents.students[0].run}`,
        );
        setFetching(false);
        setStudentsAdded([]);
      }

      if (resp.ok) {
        const courses = [resp.establishment.courses[0]];
        console.log(courses);
        setErrorMessage('');
        setInstitutionCourses(courses);
        setFetching(false);
        reset();
        setStudentsAdded([]);
      }
    });
  };

  return (
    <section className="manager-section">
      <h1 className="section__title">{title}</h1>
      {fetching && (
        <div style={{ marginTop: 30 }}>
          <Spinner />
        </div>
      )}
      <article className="section__content-assignment">
        <div className="content__level-selection">
          {!institutionCourses.length && (
            <h1 style={{ fontSize: '26px', textAlign: 'center' }}>
              Aún no hay cursos registrados.
            </h1>
          )}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {institutionCourses.length > 0 &&
              !fetching &&
              values.grade !== 'Seleccionar' &&
              institutionCourses[0].letters.map(letter => {
                const gradeSelected = values.grade;
                return (
                  <section
                    key={letter.character}
                    className="content__level-selected"
                    onClick={() =>
                      handleCourseSelected({ letter, gradeSelected })
                    }
                  >
                    <span className="level-selected__degree">{`${gradeSelected} ${letter.character}`}</span>
                    <span className="add-word__go-to">
                      <span className="go-to__text">B&aacute;sico</span>
                      <img
                        src={gotoIcon}
                        className="go-to__icon"
                        alt="go to icon"
                      />
                    </span>
                  </section>
                );
              })}
          </div>
        </div>
        <div style={{ width: '50%', marginRight: 50 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div style={{ textAlign: 'center' }} className="form-group">
              <span className="content__level-selection-title">Nivel:</span>
              <select
                name="grade"
                className="default-select"
                onChange={handleInputChange}
                value={values.grade}
              >
                <option disabled>Seleccionar</option>
                {grades.map(grade => {
                  return (
                    <option key={grade.level} value={grade.level}>
                      {grade.level} Basico
                    </option>
                  );
                })}
              </select>
            </div>
            <div style={{ textAlign: 'center' }} className="form-group">
              <span className="content__level-selection-title">Letra:</span>
              <select
                className="default-select"
                onChange={handleInputChange}
                value={values.letter}
                name="letter"
              >
                <option value="Seleccionar" disabled>
                  Seleccionar
                </option>
                {letters.map(letter => {
                  return (
                    <option key={letter} value={letter}>
                      {letter}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <form className="form__add-student">
            <p style={{ fontSize: 14 }}>
              Alumnos a&ntilde;adidos: <b>{studentsAdded.length}</b>
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 5,
                paddingTop: 10,
              }}
            >
              <input
                onChange={handleInputChange}
                type="text"
                name="name"
                value={values.name}
                placeholder="Nombre completo"
              />
              <input
                onChange={handleInputChange}
                type="text"
                name="run"
                value={values.run}
                placeholder="Ingrese rut de estudiante"
              />
            </div>
            {errorMessage.length > 0 && (
              <span style={{ color: 'red', fontSize: '13px' }}>
                {errorMessage}
              </span>
            )}
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                gap: 10,
                justifyContent: 'right',
                paddingBottom: 40,
              }}
            >
              <Button
                onClick={handleAddStudent}
                customStyles={buttonStyles}
                icon={addStudentIcon}
                text="A&ntilde;adir alumno"
                type="button"
                disabled={values.name.length < 6 || values.run.length < 9}
              />
              <Button
                onClick={handleAddCourse}
                customStyles={buttonStyles}
                text="Enviar formulario"
                type="button"
                disabled={
                  !studentsAdded.length ||
                  values.grade === 'Seleccionar' ||
                  values.letter === 'Seleccionar'
                }
              />
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default StageAssignment;

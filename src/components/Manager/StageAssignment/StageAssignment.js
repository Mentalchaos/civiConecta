import { useEffect, useState } from 'react';
import Button from 'src/components/UI/Button';
import useForm from 'src/hooks/useForm';
import gotoIcon from 'src/assets/Icons/arrow-degree.svg';
import addStudentIcon from 'src/assets/Icons/add-student.svg';
import { getGrades } from 'src/services/admin/grades.request';
import { updateEstablishment } from 'src/services/admin/establishment.request';

import './StageAssignment.css';
import Spinner from 'src/components/UI/Spinner';

const StageAssignment = ({ title, changeStage, institutionSelected }) => {
  const [grades, setGrades] = useState([]);
  const [studentsAdded, setStudentsAdded] = useState([]);
  const [institutionCourses, setInstitutionCourses] = useState([]);
  const [fetching, setFetching] = useState(false);
  const { values, handleInputChange, reset } = useForm({
    grade: 'Seleccionar',
    letter: 'Seleccionar',
    name: '',
    run: '',
  });

  useEffect(() => {
    setInstitutionCourses(institutionSelected.courses);
    getGrades().then(resp => {
      if (resp.ok) {
        setGrades(resp.grades);
      }
    });
  }, []);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  const buttonStyles = {
    background: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 40px',
    borderRadius: '20px',
  };

  const handleAddStudent = e => {
    e.preventDefault();
    const { name, run } = values;
    if (!name || !run) return;
    const newStudent = { name, run };
    setStudentsAdded([...studentsAdded, newStudent]);
    values.name = '';
    values.run = '';
  };

  const handleCourseSelected = course => {
    console.log(course);
  };

  const handleAddCourse = e => {
    e.preventDefault();
    onUpdateEstablishment(institutionSelected.number);
  };

  const onUpdateEstablishment = establishmentNumber => {
    setFetching(true);
    const filterCourseSelected = institutionCourses.filter(
      course => course.level === values.grade.split(' ')[0],
    );
    const getLettersCourseSelected = filterCourseSelected.map(
      item => item.letters[0],
    );

    const payload = {
      name: institutionSelected.name,
      ...filterCourseSelected,
      courses: [
        {
          grade: values.grade.split(' ')[0],
          ...getLettersCourseSelected,
          letters: [
            {
              character: values.letter,
              students: [...studentsAdded],
            },
          ],
        },
      ],
    };
    updateEstablishment(establishmentNumber, payload).then(resp => {
      if (resp.ok) {
        const courses = [...institutionCourses, resp.establishment.courses[0]];
        setInstitutionCourses(courses);
        setFetching(false);
        reset();
        setStudentsAdded([]);
      } else {
        setFetching(false);
        setStudentsAdded([]);
      }
    });
  };

  return (
    <section className="manager-section">
      <h1 className="section__title">{title}</h1>
      <article className="section__content-assignment">
        <div className="content__level-selection">
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          ></div>
          {fetching && <Spinner />}
          {institutionCourses.length > 0 &&
            !fetching &&
            institutionCourses.map(course => {
              const { level } = course;
              course?.letters?.map(letter => {
                return (
                  <section
                    className="content__level-selected"
                    onClick={() => handleCourseSelected(course)}
                  >
                    <span className="level-selected__degree">{`${level}`}</span>
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
              });
            })}
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
                className="select-date"
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
                style={{
                  boxShadow: '0px 2px 10px rgb(0,0,0,0.25)',
                  backgroundColor: '#fff',
                }}
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
                placeholder="Formato: 12.543.343-8"
              />
            </div>
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                gap: 10,
                justifyContent: 'right',
              }}
            >
              <Button
                onClick={handleAddStudent}
                customStyles={buttonStyles}
                icon={addStudentIcon}
                text="A&ntilde;adir alumno"
                type="button"
                disabled={!values.name || !values.run}
              />
              <Button
                onClick={handleAddCourse}
                customStyles={buttonStyles}
                text="Guardar"
                type="button"
                disabled={!studentsAdded.length}
              />
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default StageAssignment;

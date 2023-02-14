import { useRef, useState } from 'react';
import Button from 'src/components/UI/Button';
import Spinner from 'src/components/UI/Spinner';
import Table from 'src/components/UI/Table.js';
import Visible from 'src/components/UI/Visible';
import GradeLetter from './GradeLetter.js';
import useStateAssignment from './useStateAssignment.js';
import addStudentIcon from 'src/assets/Icons/add-student.svg';
import styles from './styles.js';
import './StageAssignment.css';

const StageAssignment = ({ onHandleCourseSelected, title, changeStage, institutionSelected, onUpdateInstitution }) => {
  const [studentSelected, setStudentSelected] = useState({});
  const [showButtonDelete, setShowButtonDelete] = useState(false);
  const gradeRef = useRef(null);
  const letterRef = useRef(null);
  const { actions, ...rest } = useStateAssignment(institutionSelected);
  const state = rest;
  const tableHeader = ['Nombre', 'RUN', 'Curso', 'Letra'];
  const filterStudentsByGrade = institutionSelected.students.filter(item => item.grade === state.values.grade);
  const tableDataDisplayed = filterStudentsByGrade.map(student => {
    const { grade, letter, name, run } = student;
    return {
      name,
      run,
      grade,
      letter,
    };
  });

  const buttonStyles = {
    backgroundColor: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 40px',
    borderRadius: '20px',
  };

  const handleAddStudent = evt => {
    evt.preventDefault();

    const { name, run, grade, letter } = state.values;

    if (!name || !run) {
      return;
    }

    institutionSelected.addGrade(grade).addLetter(letter).addStudent({ name, run });

    state.values.name = '';
    state.values.run = '';

    const clone = institutionSelected.clone();
    onUpdateInstitution(clone);
  };

  const handleCourseSelected = course => {
    gradeRef.current.value = course.gradeSelected;
    letterRef.current.value = course.letter.character;
    onHandleCourseSelected(course);
    changeStage('Detalle');
  };

  const handleCheckboxSelected = rowSelected => {
    if (rowSelected) {
      setStudentSelected(rowSelected);
      setShowButtonDelete(true);
    } else {
      setStudentSelected({});
      setShowButtonDelete(false);
    }
  };

  const handleDeleteStudent = evt => {
    evt.preventDefault();

    const { run, grade, letter } = studentSelected;

    if (!window.confirm('Esta seguro de que desea eliminar el estudiante ?')) {
      return;
    }

    institutionSelected.addGrade(grade).addLetter(letter).deleteStudent({ run });

    const clone = institutionSelected.clone();
    onUpdateInstitution(clone);

    actions.updateEstablishment(clone);
  };

  const handleAddCourse = () => {
    async function fn() {
      actions.setFetching(true);

      const payload = institutionSelected.toJSON();
      const response = await actions.updateCoursesEstablishment(institutionSelected.id, payload);

      if (response.error?.message?.includes('run')) {
        actions.setErrorMessage('Rut incorrecto');
        actions.setFetching(false);
        return;
      }

      if (response.error?.duplicateStudents) {
        actions.setErrorMessage(
          `Estudiante ya se encuentra en un curso, rut: ${response.error.duplicateStudents.students[0].run}`,
        );
        actions.setFetching(false);
        return;
      }

      if (response.ok) {
        actions.setErrorMessage('');
        actions.reset();
      }

      actions.setFetching(false);
    }

    fn();
  };

  return (
    <section className="manager-section">
      <h1 className="section__title">{title}</h1>
      <Visible condition={state.fetching}>
        <div style={styles.spinnerWrapper}>
          <Spinner />
        </div>
      </Visible>

      <article className="section__content-assignment">
        <div className="content__level-selection">
          <Visible condition={!state.institutionCourses.length}>
            <h1 style={styles.noGradeSelected}>Aún no hay cursos registrados.</h1>
          </Visible>
          <div style={styles.coursesWrapper}>
            <Visible condition={state.isGradeRenderable}>
              {() => {
                return state.institutionCourses[0].letters.map(letter => {
                  const grade = state.values.grade;

                  return (
                    <GradeLetter
                      key={`${grade}${letter.character}`}
                      grade={state.values.grade}
                      letter={letter}
                      onClick={() => handleCourseSelected({ letter, gradeSelected: grade })}
                    />
                  );
                });
              }}
            </Visible>
          </div>
        </div>

        <div style={styles.dropdownContainer}>
          <div style={styles.dropdownWrapper}>
            <div style={styles.centerContent} className="form-group">
              <span className="content__level-selection-title">Nivel:</span>
              <select
                id="gradeDropdown"
                ref={gradeRef}
                name="grade"
                className="default-select"
                onChange={actions.handleInputChange}
                value={state.values.grade}
              >
                <option disabled>Seleccionar</option>
                {state.grades.map(grade => {
                  return (
                    <option key={grade.level} value={grade.level}>
                      {grade.level}
                    </option>
                  );
                })}
              </select>
            </div>
            <div style={styles.centerContent} className="form-group">
              <span className="content__level-selection-title">Letra:</span>
              <select
                id="letterDropdown"
                ref={letterRef}
                className="default-select"
                onChange={actions.handleInputChange}
                value={state.values.letter}
                name="letter"
              >
                <option value="Seleccionar" disabled>
                  Seleccionar
                </option>
                {state.letters.map(letter => {
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
            <p style={styles.studentsAdded}>
              Alumnos a&ntilde;adidos:
              <strong>
                {institutionSelected.calculateStudentsInGradeLetter(state.values.grade, state.values.letter)}
              </strong>
            </p>
            <div style={styles.fieldsWrapper}>
              <input
                onChange={actions.handleInputChange}
                type="text"
                name="name"
                value={state.values.name}
                placeholder="Nombre completo"
              />
              <input
                onChange={actions.handleInputChange}
                type="text"
                name="run"
                value={state.values.run}
                placeholder="Ingrese rut de estudiante"
              />
            </div>
            <Visible condition={state.errorMessage}>
              <span style={styles.errorMessage}>{state.errorMessage}</span>
            </Visible>
            <div style={styles.buttonWrapper}>
              <Button
                onClick={handleAddStudent}
                customStyles={styles.button}
                icon={addStudentIcon}
                text="A&ntilde;adir alumno"
                type="button"
                disabled={state.isAddStudentDisabled}
              />
              <Button
                onClick={handleAddCourse}
                customStyles={styles.button}
                text="Enviar formulario"
                type="button"
                disabled={state.isSendFormDisabled}
              />
            </div>
          </form>
        </div>
      </article>

      {filterStudentsByGrade.length > 0 && (
        <div style={{ position: 'relative' }}>
          <Table
            data={filterStudentsByGrade}
            dataDisplayed={tableDataDisplayed}
            dataHeader={tableHeader}
            handleCheckboxSelected={handleCheckboxSelected}
          />
          {showButtonDelete && (
            <div className="content__difused">
              <Button customStyles={buttonStyles} text="Eliminar" onClick={handleDeleteStudent} />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default StageAssignment;

import { useRef } from 'react';
import Button from 'src/components/UI/Button';
import Spinner from 'src/components/UI/Spinner';
import Visible from 'src/components/UI/Visible';
import addStudentIcon from 'src/assets/Icons/add-student.svg';
import GradeLetter from './GradeLetter.js';
import useStateAssignment from './useStateAssignment.js';
import styles from './styles.js';
import './StageAssignment.css';

const StageAssignment = ({
  title,
  changeStage,
  institutionSelected,
  onHandleCourseSelected,
  onUpdateInstitution
}) => {
  const gradeRef = useRef(null);
  const letterRef = useRef(null);
  const { actions, ...rest } = useStateAssignment(institutionSelected);
  const state = rest;

  const handleAddStudent = (evt) => {
    evt.preventDefault();

    const { name, run, grade, letter } = state.values;

    if (!name || !run) {
      return;
    }

    institutionSelected
      .addGrade(grade)
      .addLetter(letter)
      .addStudent({ name, run });

    state.values.name = '';
    state.values.run = '';

    const clone = institutionSelected.clone();
    onUpdateInstitution(clone);
  };

  const handleCourseSelected = (course) => {
    gradeRef.current.value = course.gradeSelected;
    letterRef.current.value = course.letter.character;
  };

  const handleAddCourse = () => {
    async function fn() {
      actions.setFetching(true);

      const payload = institutionSelected.toJSON();
      const response = await actions
        .updateCoursesEstablishment(institutionSelected.number, payload);

      if (response.error?.message?.includes('run')) {
        actions.setErrorMessage('Rut incorrecto');
        actions.setFetching(false);
        return;
      }

      if (response.error?.duplicateStudents) {
        actions.setErrorMessage(`Estudiante ya se encuentra en un curso, rut: ${response.error.duplicateStudents.students[0].run}`);
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
                      {grade.level} Basico
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
                <option value="Seleccionar" disabled>Seleccionar</option>
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
              Alumnos añadidos:
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
              <span style={styles.errorMessage}>
                {state.errorMessage}
              </span>
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

      <table>
        <thead>
          <tr>
            <th>Curso</th>
            <th>Letra</th>
            <th>Nombre</th>
            <th>RUN</th>
          </tr>
        </thead>
        <tbody>
          {institutionSelected.students.map(student => {
            return (
              <tr key={student.run}>
                <th>{student.grade}</th>
                <th>{student.letter}</th>
                <th>{student.name}</th>
                <th>{student.run}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default StageAssignment;

import React, { Fragment, useContext } from 'react';
import Visible from 'src/components/UI/Visible';
import styles from '../styles';
import addStudentIcon from 'src/assets/Icons/add-student.svg';
import Button from 'src/components/UI/Button';
import { AssignmentContext } from '../context';

const AddStudentForm = () => {
  const { states, actions } = useContext(AssignmentContext);
  return (
    <Fragment>
      <div style={styles.dropdownWrapper}>
        <div style={styles.centerContent} className="form-group">
          <span className="content__level-selection-title">Nivel:</span>
          <select
            id="gradeDropdown"
            name="grade"
            className="default-select"
            onChange={actions.handleInputChange}
          >
            <option value="Seleccionar">Seleccionar</option>
            {states.grades.map(grade => {
              return (
                <option key={grade.id} value={grade.id}>
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
            className="default-select"
            onChange={actions.handleInputChange}
            name="letter"
          >
            <option value="Seleccionar">Seleccionar</option>
            {states.letters.map(letter => {
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
            {states.establishmentSelected.calculateStudentsInGradeLetter(
              states.values.grade,
              states.values.letter,
            )}
          </strong>
        </p>
        <div style={styles.fieldsWrapper}>
          <input
            onChange={actions.handleInputChange}
            type="text"
            name="name"
            value={states.values.name}
            placeholder="Nombre completo"
          />
          <input
            onChange={actions.handleInputChange}
            type="text"
            name="run"
            value={states.values.run}
            placeholder="Ingrese rut de estudiante"
          />
        </div>
        <Visible condition={states.errorMessage}>
          <span style={styles.errorMessage}>{states.errorMessage}</span>
        </Visible>
        <div style={styles.buttonWrapper}>
          <Button
            onClick={() => actions.addStudent()}
            customStyles={styles.button}
            icon={addStudentIcon}
            text="A&ntilde;adir alumno"
            type="button"
            disabled={states.isAddStudentDisabled}
          />
          <Button
            customStyles={styles.button}
            text="Enviar formulario"
            type="button"
            onClick={() => actions.addCourse(states.establishmentSelected.toJSON())}
          />
        </div>
      </form>
    </Fragment>
  );
};

export default AddStudentForm;

import { useContext, useEffect, useRef, useState } from 'react';
import Button from 'src/components/UI/Button';
import Loading from 'src/components/UI/Loading.jsx';
import Spinner from 'src/components/UI/Spinner';
import Table from 'src/components/UI/Table';
import Visible from 'src/components/UI/Visible';
import AddStudentForm from './components/AddStudentForm.jsx';
import GradeLetter from './components/GradeLetter.jsx';
import styles from './styles.js';
import useStateAssignment from './useStateAssignment.js';
import './StageAssignment.css';
import { AssignmentContext } from './context.js';

const StageAssignment = ({ establishmentSelected }) => {
  const { states, setters, actions } = useStateAssignment(establishmentSelected);
  // const filterStudentsByGrade = establishmentSelected.students.filter(
  //   item => item.grade === states.values.grade,
  // );
  // console.log(filterStudentsByGrade);
  //
  // const tableDataDisplayed = filterStudentsByGrade.map(student => {
  //   const { grade, letter, name, run } = student;
  //   return {
  //     name,
  //     run,
  //     grade,
  //     letter,
  //   };
  // });
  //
  // const buttonStyles = {
  //   backgroundColor: 'var(--color-secondary)',
  //   color: '#fff',
  //   padding: '5px 40px',
  //   borderRadius: '20px',
  // };
  //
  //
  // const handleCourseSelected = course => {
  //   gradeRef.current.value = course.gradeSelected;
  //   letterRef.current.value = course.letter.character;
  //   onHandleCourseSelected(course);
  //   changeStage('Detalle');
  // };

  return (
    <AssignmentContext.Provider value={{ states, setters, actions }}>
      <section className="manager-section">
        <div className="current-path">
          <p className="path__text">
            <span className="return" onClick={() => console.log('back')}>
              <img src="../../../assets/Icons/back.svg" alt="volver" />
            </span>
          </p>
        </div>
        <h1 className="section__title">Creación de cursos</h1>
        <Loading isLoading={states.fetching}>
          <article className="section__content-assignment">
            <div className="content__level-selection">
              {
                <Visible condition={!states.institutionCourses.length}>
                  <h1 style={styles.noGradeSelected}>Aún no hay cursos registrados.</h1>
                </Visible>
              }
              <div style={styles.coursesWrapper}>
                {
                  <Visible condition={states.institutionCourses.length > 0}>
                    {states.institutionCourses.map(course => {
                      return (
                        <GradeLetter
                          key={`${course.grade}${course.letter}`}
                          grade={course.label}
                          letter={course.letter}
                          onClick={() => console.log('lorea')}
                        />
                      );
                    })}
                  </Visible>
                }
              </div>
            </div>

            <div style={styles.dropdownContainer}>
              <AddStudentForm />
            </div>
          </article>
        </Loading>
        {/*filterStudentsByGrade.length > 0 && (
        <div style={{ position: 'relative' }}>
        <Table
        data={filterStudentsByGrade}
        dataDisplayed={tableDataDisplayed}
        dataHeader={['Nombre', 'Run']}
        />
        {showButtonDelete && (
          <div className="content__difused">
              <Button
              customStyles={buttonStyles}
              text="Eliminar"
              onClick={handleDeleteStudent}
              />
            </div>
          )}
          </div>
        )*/}
      </section>
    </AssignmentContext.Provider>
  );
};

export default StageAssignment;

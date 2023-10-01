import { useParams } from 'react-router-dom';
import { useEditCourse, EditCourseContext } from './useEditCourse';
import Visible from 'src/components/UI/Visible';
import CreateStudentForm from './CreateStudentForm';
import CreateTeacherForm from './CreateTeacherForm';
import StudentList from './StudentList';
import AssignedTeacher from './components/AssignedTeacher';

const EditCourse = () => {
  const { courseId } = useParams();
  const { states, actions } = useEditCourse(courseId);

  return (
    <>
      <EditCourseContext.Provider value={{ states, actions }}>
        <fieldset>
          <legend>Seccion estudiantes</legend>
          <CreateStudentForm />
          <div>
            <StudentList />
          </div>
        </fieldset>
        <fieldset>
          <legend>Seccion docentes</legend>
          <CreateTeacherForm />

          <Visible when={states.assignedTeacher.name}>
            <AssignedTeacher teacher={states.assignedTeacher} />
          </Visible>

          <Visible when={!states.assignedTeacher.name}>
            <p>No hay profesor asignado al curso aun</p>
          </Visible>
        </fieldset>
      </EditCourseContext.Provider>
    </>
  );
};

export default EditCourse;

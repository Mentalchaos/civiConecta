import { useParams } from 'react-router-dom';
import { useEditCourse, EditCourseContext } from './useEditCourse';
import CreateStudentForm from './CreateStudentForm';

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
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>run</th>
                  <th>curso</th>
                  <th>letra</th>
                </tr>
              </thead>
              <tbody>
                {states.students.map(student => {
                  return (
                    <tr key={student.id}>
                      <th>{student.name}</th>
                      <th>{student.run}</th>
                      <th>{states.course.level}</th>
                      <th>{states.course.character}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </fieldset>
        <fieldset>
          <legend>Seccion docentes</legend>
          <div>seccion crear profesor</div>
          <div>lista de profesores</div>
        </fieldset>
      </EditCourseContext.Provider>
    </>
  );
};

export default EditCourse;

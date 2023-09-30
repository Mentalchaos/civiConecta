import { useParams } from 'react-router-dom';
import { useEditCourse, EditCourseContext } from './useEditCourse';
import CreateStudentForm from './CreateStudentForm';

const EditCourse = () => {
  const { courseId } = useParams();
  const { states, actions } = useEditCourse(courseId);

  return (
    <>
      <EditCourseContext.Provider value={{ states, actions }}>
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
                  <tr>
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
      </EditCourseContext.Provider>
    </>
  );
};

export default EditCourse;

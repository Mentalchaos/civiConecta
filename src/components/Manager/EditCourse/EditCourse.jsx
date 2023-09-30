import { useParams } from 'react-router-dom';
import { useEditCourse, EditCourseContext } from './useEditCourse';

const EditCourse = () => {
  const { courseId } = useParams();
  const { states, actions } = useEditCourse(courseId);

  return (
    <>
      <EditCourseContext.Provider value={{ states, actions }}>
        <div>seccion de creacion de alumno</div>
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
                    <th>Nombre</th>
                    <th>run</th>
                    <th>curso</th>
                    <th>letra</th>
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

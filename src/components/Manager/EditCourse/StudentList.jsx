import { useContext } from 'react';
import { EditCourseContext } from './useEditCourse';

const StudentList = () => {
  const { states } = useContext(EditCourseContext);
  const { level, character } = states.course;

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Run</th>
          <th>Curso</th>
          <th>Letra</th>
        </tr>
      </thead>
      <tbody>
        {states.students.map(student => {
          return (
            <tr key={student.id}>
              <th>{student.name}</th>
              <th>{student.run}</th>
              <th>{level}</th>
              <th>{character}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentList;

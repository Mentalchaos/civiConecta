import './TeacherList.css';

const Row = ({ teacher }) => {
  return (
    <tr>
      <td>{teacher.establishment}</td>
      <td>{teacher.name}</td>
      <td>{teacher.email}</td>
      <td>{teacher.password}</td>
      <td>{teacher.course}</td>
    </tr>
  );
};

export default Row;

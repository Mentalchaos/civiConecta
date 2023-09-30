import { useContext } from 'react';
import { EditEstablishmentContext } from '../useEditEstablishment';
import Head from './Head';
import Row from './Row';

const TeacherList = () => {
  const { states } = useContext(EditEstablishmentContext);

  return (
    <table>
      <Head />
      <tbody>
        {states.teachers.map((teacher) => {
          return <Row key={teacher.email} teacher={teacher} />;
        })}
      </tbody>
    </table>
  );
};

export default TeacherList;

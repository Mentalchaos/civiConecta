import { useContext } from 'react';
import { EditEstablishmentContext } from '../useEditEstablishment';
import Head from './Head';
import Row from './Row';

import './TeacherList.css';

const TeacherList = () => {
  const { states } = useContext(EditEstablishmentContext);

  return (
    <table className='teacher-list-table'>
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

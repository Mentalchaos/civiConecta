import { useRef, useContext } from 'react';
import generatePDF from 'react-to-pdf';
import { EditCourseContext } from './useEditCourse';
import session from 'src/utils/session';

const StudentList = () => {
  const pdfRef = useRef(null);
  const { states } = useContext(EditCourseContext);
  const { level, character } = states.course;

  const handleDownloadPDF = () => {
    const establishment = session.restore('currentEstablishment');
    const filename = `${establishment.name} - Curso ${level} ${character}`;
    generatePDF(pdfRef, { filename });
  };

  return (
    <>
      <div ref={pdfRef}>
        <table className='student-list-table'>
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
      </div>
      <button className='pdf-button' onClick={handleDownloadPDF}>Descargar PDF</button>
    </>
  );
};

export default StudentList;

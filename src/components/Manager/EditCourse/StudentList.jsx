import { useRef, useState, useContext } from 'react';
import generatePDF from 'react-to-pdf';
import { EditCourseContext } from './useEditCourse';
import session from 'src/utils/session';
import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';

const StudentList = () => {
  const pdfRef = useRef(null);
  const { states, actions } = useContext(EditCourseContext);
  const { level, character } = states.course;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [run, setRun] = useState();
  const [activeId, setActiveId] = useState();

  const handleDownloadPDF = () => {
    const establishment = session.restore('currentEstablishment');
    const filename = `${establishment.name} - Curso ${level} ${character}`;
    generatePDF(pdfRef, { filename });
  };

  const closeModalAndSend = async () => {
    const fixedName = name.split(' ');
    const correctName = (fixedName[0] + ' ' + fixedName[1]);
    let lastname = fixedName.slice(2).join(' ');

    if(!lastname || !correctName){
      return alert('Recuerde ingresar los 2 apellidos y al menos 1 nombre antes de presionar aceptar');
    }

    await actions.editStudentFromCourse(activeId, correctName, lastname, run);
    await setIsModalOpen(false);
    await window.location.reload();
  }

  const openModalAndSetId = async (studentId) => {
    await setIsModalOpen(true);
    await setActiveId(studentId);
  }

  const margin = {margin: '1em', color: 'white'};

  return (
    <>
      {isModalOpen && (
        <Modal>
          <div style={{ display: 'flex', padding: '2em' , flexDirection: 'column'}}>
            <div>
              <p>Nombre:</p>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <p>Run:</p>
              <input type="text" value={run} onChange={(e) => setRun(e.target.value)} />
            </div>
            <div style={{display: 'flex', margin: '1em'}}>
              <Button
                customStyles={margin}
                onClick={() => closeModalAndSend()}
                text="Aceptar"
              />
              <Button
                customStyles={margin}
                onClick={() => setIsModalOpen(false)}
                text="Cancelar"
              />
            </div>
          </div>
        </Modal>)}
      <div ref={pdfRef}>
        <table className='student-list-table'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Run</th>
              <th>Curso</th>
              <th>Letra</th>
              <th>Accion 1</th>
              <th>Accion 2</th>
            </tr>
          </thead>
          <tbody>
            {states.students.map(student => {
              const { name, lastname, run, id } = student;
              return (
                <tr key={student.id}>
                  <th>{`${lastname || ''} ${name}`}</th>
                  <th>{run}</th>
                  <th>{level}</th>
                  <th>{character}</th>
                  <th>
                    <p onClick={() => actions.removeStudentFromCourse(id)}>Borrar</p>
                  </th>
                  <th>
                    <p onClick={() => openModalAndSetId(id)}>Editar</p>
                  </th>
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

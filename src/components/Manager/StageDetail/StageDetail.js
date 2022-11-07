import { useState } from 'react';
import Button from 'src/components/UI/Button';
import Table from 'src/components/UI/Table';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import addStudentIcon from 'src/assets/Icons/add-student.svg';

import './StageDetail.css';
import Modal from 'src/components/UI/Modal';

const StageDetail = ({ title }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [teacherSelected, setTeacherSelected] = useState(false);
  const [studentSelected, setStudentSelected] = useState(false);

  const buttonStyle = {
    color: '#fff',
    backgroundColor: 'var(--color-secondary)',
    borderRadius: 20,
    padding: '5px 40px',
  };

  const buttonCancelStyle = {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    borderRadius: 20,
    border: '1px solid var(--color-secondary)',
    padding: '5px 40px',
  };

  const tableDataHeader = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Fecha de asignación', accessor: 'assignmentDate' },
    { Header: 'Estado de actividad', accessor: 'activity' },
  ];

  const tableDataHeaderStudents = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Rut', accessor: 'rut' },
    { Header: 'Fecha de registro', accessor: 'registerDate' },
  ];

  const dataTeacher = [
    {
      id: 1,
      name: 'Tadeo Cespedes Vilaita',
      activity: 'Activo',
      assignmentDate: '10/10/2022',
    },
    {
      id: 2,
      name: 'Juliano Soza',
      activity: 'Activo',
      assignmentDate: '10/10/2022',
    },
  ];

  const dataStudent = [
    {
      id: 1,
      name: 'Tadeo Cespedes Vilaita',
      rut: '18481612-1',
      registerDate: '10/10/2022',
    },
    {
      id: 2,
      name: 'Juliano Soza',
      rut: '19513465-0',
      registerDate: '10/10/2022',
    },
  ];

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  return (
    <section className="manager-section">
      {openEditModal && (
        <Modal
          style={{ padding: '50px 140px' }}
          title={'Modificación de datos'}
          subtitle="Editar letra de módulo y/o número de estudiantes."
        >
          <div className="section__select-actions">
            <div className="select-section edit-section">
              <div className="section__select-letter">
                <p>Letra</p>
                <select className="section__letter-selection edit-letter">
                  {letters.map(letter => {
                    return (
                      <option key={letter} value={letter}>
                        {letter}
                      </option>
                    );
                  })}
                </select>
                <Button
                  onClick={() => setOpenEditModal(false)}
                  customStyles={buttonStyle}
                  text="Cancelar"
                />
              </div>
              <div className="section__select-students">
                <p>N&uacute;mero de estudiantes</p>
                <select className="section__letter-selection edit-number">
                  {letters.map(letter => {
                    return (
                      <option key={letter} value={letter}>
                        {letter}
                      </option>
                    );
                  })}
                </select>
                <Button customStyles={buttonStyle} text="Continuar" />
              </div>
            </div>
          </div>
        </Modal>
      )}
      <h1 className="section__title">{title}</h1>
      <article className="section__content detail-content">
        <header className="detail-content__header">
          <Button text={'Eliminar curso'} customStyles={buttonCancelStyle} />
        </header>
        <main className="detail-content__main">
          <div onClick={() => setOpenEditModal(true)} className="main__info">
            <img className="info__modal-edit" src={arrow} />
            <p>
              Colegio: <span>American</span>
            </p>
            <p>
              Nivel: <span>5º Básico</span>
            </p>
            <p>
              Letra actual: <span>B</span>
            </p>
            <p>
              N&uacute;mero de estudiantes: <span>8</span>
            </p>
          </div>
          <div className="main__table">
            <p>
              <strong>Docentes</strong> asignados a letra:
            </p>
            <Table
              style={{ backgroundColor: '#f5f5f5' }}
              dataHeader={tableDataHeader}
              data={dataTeacher}
            />
            {teacherSelected && (
              <section className="table-actions">
                <Button customStyles={buttonCancelStyle} text={'Eliminar'} />
                <Button customStyles={buttonStyle} text={'Suspender'} />
              </section>
            )}
            <div style={{ marginTop: 50 }}>
              <p>
                <strong>Alumnos</strong> asignados a letra:
              </p>
              <Table
                style={{ marginTop: 0, backgroundColor: '#f5f5f5' }}
                dataHeader={tableDataHeaderStudents}
                data={dataStudent}
              />
              {studentSelected && (
                <section className="table-actions">
                  <Button customStyles={buttonCancelStyle} text={'Eliminar'} />
                  <Button customStyles={buttonStyle} text={'Suspender'} />
                </section>
              )}
              <form className="form__add-student">
                <input type="text" placeholder="Nombre completo" />
                <input type="text" placeholder="Rut" />
                <Button
                  customStyles={buttonStyle}
                  icon={addStudentIcon}
                  text={'Añadir'}
                />
              </form>
            </div>
          </div>
        </main>
      </article>
    </section>
  );
};

export default StageDetail;

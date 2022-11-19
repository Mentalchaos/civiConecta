import { useState } from 'react';
import Button from 'src/components/UI/Button';
import Table from 'src/components/UI/Table';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import addStudentIcon from 'src/assets/Icons/add-student.svg';
import replaceTeacherIcon from 'src/assets/Icons/replace-teacher.svg';

import './StageDetail.css';
import Modal from 'src/components/UI/Modal';
import useForm from 'src/hooks/useForm';

const StageDetail = ({ title }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [teacherSelected, setTeacherSelected] = useState(false);
  const [studentSelected, setStudentSelected] = useState(false);
  const [dataStudents, setDataStudents] = useState([]);
  const { values, handleInputChange, reset } = useForm({
    name: '',
    rut: '',
  });

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

  const dataHeaderReplaceTeacher = ['Nombre', 'Fecha de registro'];

  const tableDataHeader = [
    'Nombre',
    'Fecha de asignación',
    'Estado de actividad',
  ];

  const tableDataHeaderStudents = ['Nombre', 'Rut', 'Fecha de registro'];

  const teachersAvailable = [
    {
      name: 'Roberto Andres Lazaro Potrero',
      registerDate: '10/10/2022',
    },
    { name: 'Maria Antonia Jerez Duran', registerDate: '10/10/2022' },
    {
      name: 'Matias Nicolas Madariaga Zarate',
      registerDate: '10/10/2022',
    },
    { name: 'Gonzalo Alberto Jara Urrea', registerDate: '10/10/2022' },
    {
      name: 'Clara Andrea Norhambuena Gutierrez',
      registerDate: '10/10/2022',
    },
    {
      name: 'Rosa Alejandra Arevalo Petersen',
      registerDate: '10/10/2022',
    },
  ];

  const dataTeacher = [
    {
      name: 'Tadeo Cespedes Vilaita',
      activity: 'Activo',
      assignmentDate: '10/10/2022',
    },
    {
      name: 'Emilio Andres Manriquez Espinosa',
      activity: 'Activo',
      assignmentDate: '10/10/2022',
    },
  ];

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  const handleAddStudent = e => {
    e.preventDefault();
    const { name, rut } = values;
    if (!name || !rut) return;
    const mockData = {
      ...values,
      registerDate: '10/01/2023',
    };
    setDataStudents([...dataStudents, mockData]);
    reset();
  };

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
                  <option disabled={true}>Letra</option>
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
                <input
                  style={{
                    width: '165px',
                    borderRadius: '20px',
                    marginBottom: '50px',
                  }}
                  type="number"
                  name="amount"
                  onChange={handleInputChange}
                  defaultValue={0}
                  min={0}
                />
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
            <Table dataHeader={tableDataHeader} data={dataTeacher} />
            {teacherSelected && (
              <section className="table-actions">
                <Button customStyles={buttonCancelStyle} text={'Eliminar'} />
                <Button customStyles={buttonStyle} text={'Suspender'} />
              </section>
            )}

            <div
              style={{
                display: 'block',
                paddingBottom: 20,
                textAlign: 'right',
                marginTop: 20,
              }}
            >
              <Button
                customStyles={buttonStyle}
                icon={replaceTeacherIcon}
                text={'Reemplazo'}
              />
            </div>

            <>
              <Table
                style={{
                  width: '80%',
                  margin: 'auto',
                }}
                type={0}
                dataHeader={dataHeaderReplaceTeacher}
                data={teachersAvailable}
              />
              <div
                style={{
                  display: 'block',
                  textAlign: 'right',
                  marginRight: 100,
                  marginTop: 20,
                }}
              >
                <Button text={'Asignar'} customStyles={buttonStyle} />
              </div>
            </>

            <div style={{ marginTop: 50 }}>
              <p>
                <strong>Alumnos</strong> asignados a letra:
              </p>
              <Table
                style={{ marginTop: 0 }}
                dataHeader={tableDataHeaderStudents}
                data={dataStudents}
              />
              {studentSelected && (
                <section className="table-actions">
                  <Button customStyles={buttonCancelStyle} text={'Eliminar'} />
                  <Button customStyles={buttonStyle} text={'Suspender'} />
                </section>
              )}
              <form className="form__add-student" onSubmit={handleAddStudent}>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                />
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="rut"
                  placeholder="Rut"
                />
                <div style={{ marginTop: 20 }}>
                  <Button
                    onClick={handleAddStudent}
                    customStyles={buttonStyle}
                    icon={addStudentIcon}
                    text={'Añadir'}
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      </article>
    </section>
  );
};

export default StageDetail;

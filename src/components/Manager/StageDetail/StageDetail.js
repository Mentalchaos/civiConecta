import { useEffect, useState } from 'react';
import Button from 'src/components/UI/Button';
import Table from 'src/components/UI/Table';
import Modal from 'src/components/UI/Modal';
import CreateTeacher from '../StageAssignment/CreateTeacher/CreateTeacher';
import Spinner from 'src/components/UI/Spinner';
import {
  signUpUserRole,
  updateActiveUser,
} from 'src/services/admin/user.request';

import './StageDetail.css';

const StageDetail = ({ title, courseSelected, institutionSelected }) => {
  const [teacherSelected, setTeacherSelected] = useState(false);
  const [dataTeacherSelected, setDataTeacherSelected] = useState({});
  const [addTeacher, setAddTeacher] = useState(false);
  const [letterStudents, setLetterStudents] = useState([]);
  const [letterTeachers, setLetterTeachers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmAction, setConfirmAction] = useState(false);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setLetterStudents(courseSelected.letter.students || []);
    setLetterTeachers(courseSelected.letter.teachers || []);
  }, [courseSelected]);

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

  const tableDataStudents = ['Nombre', 'Rut'];
  const tableDataTeacher = ['Nombre', 'Email', 'Estado'];

  const studentsDataDisplay = letterStudents.map(student => {
    const { name, run } = student;
    return {
      name,
      run,
    };
  });
  const teacherDataDisplay = letterTeachers.map(teacher => {
    const { name, email, active } = teacher;
    return {
      name,
      email,
      active: active ? 'Activo' : 'Inactivo',
    };
  });

  const onHandleCheckboxSelected = data => {
    setTeacherSelected(!teacherSelected);
    setDataTeacherSelected(data);
  };

  const addTeacherService = payload => {
    setFetching(true);
    signUpUserRole(payload).then(resp => {
      if (resp.error?.message?.includes('unique')) {
        setErrorMessage('Email ya existe');
        setFetching(false);
      } else {
        setErrorMessage('');
        setFetching(false);
      }

      if (resp.ok) {
        const { name, email, active } = resp.user;
        const newUser = { name, email, active };
        setLetterTeachers([...letterTeachers, newUser]);
        setFetching(false);
        setAddTeacher(false);
      }
    });
  };

  const onHandleAddTeacher = data => {
    const { email, name } = data;
    const capitalizeLetter = name.charAt(0).toUpperCase();
    const followingLetters = name.split(' ')[1];
    const generatePassword = `${capitalizeLetter}${followingLetters}${Math.random().toFixed(
      3,
    )}`;

    const teacherPayload = {
      email,
      name,
      password: generatePassword,
      workplaces: [
        {
          establishment: courseSelected.establishment,
          courses: [
            {
              grade: courseSelected.gradeSelected,
              letters: [courseSelected.letter.character],
            },
          ],
        },
      ],
    };
    addTeacherService(teacherPayload);
  };

  const handleConfirmAction = () => {
    setFetching(true);
    const { email, active } = dataTeacherSelected;
    const selectTeacher = letterTeachers.filter(
      teacher => teacher.email === email,
    );
    selectTeacher[0].active = !active;
    updateActiveUser(email, !active).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setConfirmAction(false);
        setTeacherSelected(false);
      } else {
        setFetching(false);
        setConfirmAction(false);
        setTeacherSelected(false);
      }
    });
  };

  return (
    <section className="manager-section">
      {confirmAction && (
        <Modal
          title={
            dataTeacherSelected.active
              ? 'Deshabilitar Docente'
              : 'Habilitar Docente'
          }
          subtitle={
            dataTeacherSelected.active
              ? 'Deseas deshabilitar docente seleccionado?'
              : 'Deseas habilitar docente seleccionado?'
          }
          style={{ padding: '50px 30px' }}
        >
          <div className="container-actions">
            <Button
              text="Cancelar"
              onClick={() => setConfirmAction(false)}
              customStyles={buttonCancelStyle}
              disabled={fetching}
            />
            <Button
              onClick={handleConfirmAction}
              text="Continuar"
              customStyles={buttonStyle}
              disabled={fetching}
            />
          </div>
        </Modal>
      )}
      {addTeacher && (
        <CreateTeacher
          onHandleAddTeacher={onHandleAddTeacher}
          setAddTeacher={setAddTeacher}
          errorMessage={errorMessage}
          fetching={fetching}
        />
      )}
      <h1 className="section__title">{title}</h1>
      <article className="section__content detail-content">
        {/*<header className="detail-content__header">
          <Button
            text={'Deshabilitar curso'}
            customStyles={buttonCancelStyle}
          />
        </header>*/}
        <main className="detail-content__main">
          <div className="main__info">
            <p>
              Colegio: <span>{institutionSelected.name}</span>
            </p>
            <p>
              Nivel: <span>{courseSelected.gradeSelected}</span>
            </p>
            <p>
              Letra actual: <span>{courseSelected.letter.character}</span>
            </p>
            <p>
              N&uacute;mero de estudiantes:
              <span>{courseSelected.letter.students.length}</span>
            </p>
          </div>
          <div className="main__table">
            <p>
              <strong>Docentes</strong> asignados a letra:
            </p>
            {fetching && (
              <div style={{ textAlign: 'center' }}>
                <Spinner />
              </div>
            )}
            {letterTeachers.length > 0 && !fetching && (
              <Table
                dataHeader={tableDataTeacher}
                data={letterTeachers}
                dataDisplayed={teacherDataDisplay}
                handleCheckboxSelected={onHandleCheckboxSelected}
              />
            )}
            {teacherSelected && (
              <section className="table-actions">
                <Button
                  customStyles={buttonStyle}
                  text={
                    dataTeacherSelected.active ? 'Deshabilitar' : 'Habilitar'
                  }
                  onClick={() => setConfirmAction(true)}
                />
              </section>
            )}
            <>
              <div
                style={{
                  display: 'block',
                  textAlign: 'right',
                  marginRight: 100,
                  marginTop: 20,
                }}
              >
                <Button
                  text={'Asignar'}
                  customStyles={buttonStyle}
                  onClick={() => setAddTeacher(true)}
                />
              </div>
            </>
            <p>
              <strong>Estudiantes</strong> asignados a letra:
            </p>
            {letterStudents.length > 0 && (
              <Table
                dataHeader={tableDataStudents}
                data={letterStudents}
                dataDisplayed={studentsDataDisplay}
                displayCheckbox={false}
              />
            )}
            {/*studentSelected && (
              <section className="table-actions">
                <Button customStyles={buttonCancelStyle} text={'Eliminar'} />
                <Button customStyles={buttonStyle} text={'Suspender'} />
              </section>
            )*/}
          </div>
        </main>
      </article>
    </section>
  );
};

export default StageDetail;

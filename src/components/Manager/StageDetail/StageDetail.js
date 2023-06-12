import { useEffect, useState } from 'react';
import Button from 'src/components/UI/Button';
import Table from 'src/components/UI/Table';
import Modal from 'src/components/UI/Modal';
import CreateTeacher from '../StageAssignment/CreateTeacher/CreateTeacher';
import Spinner from 'src/components/UI/Spinner';
import { assignTeacherToCourse } from 'src/services/admin/establishment.request';
import { updateActiveUser } from 'src/services/admin/user.request';
import { throwOnError } from 'src/utils/httpHandler';
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
  const tableDataTeacher = ['Nombre', 'Email', 'Estado', 'Password'];

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

  const onHandleAddTeacher = data => {
    const { email, name } = data;
    setFetching(true);

    const payload = {
      email,
      name,
      grade: courseSelected.gradeSelected,
      letter: courseSelected.letter.character,
      institution: sessionStorage.getItem('establishmentId')
    };

    assignTeacherToCourse(payload)
      .then(throwOnError)
      .then(response => {
        const { name, email, active } = response.user;
        const newUser = { name, email, active };
        const isTeacherAlreadyAdded = letterTeachers
          .find(t => t.email === newUser.email);
        setFetching(false);
        setAddTeacher(false);

        if (!isTeacherAlreadyAdded) {
          setLetterTeachers([...letterTeachers, newUser]);
        }
      })
      .catch(error => {
        setErrorMessage(error.message);
        setFetching(false);
      });
  };

  const handleConfirmAction = () => {
    setFetching(true);
    const { email, active } = dataTeacherSelected;
    const selectTeacher = letterTeachers.filter(teacher => teacher.email === email);
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
          title={dataTeacherSelected.active ? 'Deshabilitar Docente' : 'Habilitar Docente'}
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
            <Button onClick={handleConfirmAction} text="Continuar" customStyles={buttonStyle} disabled={fetching} />
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
        <main className="detail-content__main">
          <div className="main__info">
            <p>
              Colegio: <span>{institutionSelected.name}</span>
            </p>
            <p>
              Nivel: <span>{courseSelected.gradeSelected}</span>
            </p>
            <p></p>
            <p>
              N&uacute;mero de estudiantes: <span>{courseSelected.letter.students.length}</span>
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
                  text={dataTeacherSelected.active ? 'Deshabilitar' : 'Habilitar'}
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
                <Button text={'Asignar'} customStyles={buttonStyle} onClick={() => setAddTeacher(true)} />
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
          </div>
        </main>
      </article>
    </section>
  );
};

export default StageDetail;

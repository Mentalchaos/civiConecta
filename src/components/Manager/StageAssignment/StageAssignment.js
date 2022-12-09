import { useEffect, useState } from 'react';
import Table from 'src/components/UI/Table';
import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import useForm from 'src/hooks/useForm';
import gotoIcon from 'src/assets/Icons/arrow-degree.svg';
import addStudentIcon from 'src/assets/Icons/add-student.svg';
import { updateEstablishment } from 'src/services/admin/establishment.request';

import './StageAssignment.css';

const StageAssignment = ({ title, changeStage, institutionSelected }) => {
  const [showActionButtons, setShowActionButtons] = useState(false);
  const [confirmAction, setConfirmAction] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [rowDataSelected, setRowDataSelected] = useState({});
  const [studentSelected, setStudentSelected] = useState({});
  const [studentsAdded, setStudentsAdded] = useState([]);
  const [institutionCourses, setInstitutionCourses] = useState([]);
  const { values, handleInputChange, reset } = useForm({
    grade: 'Seleccione',
    letter: 'Seleccione',
    name: '',
    run: '',
  });

  useEffect(() => {
    setInstitutionCourses(institutionSelected.courses);
  }, []);

  const grades = ['5º Básico'];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const tableDataHeaderStudents = ['Nombre', 'Rut', 'Fecha de registro'];

  const buttonStyles = {
    background: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 40px',
    borderRadius: '20px',
  };
  const buttonCancelStyle = {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    border: '1px solid var(--color-secondary)',
    padding: '5px 40px',
    borderRadius: '20px',
  };

  const onHandleCheckboxSelected = rowSelected => {
    if (rowSelected) {
      setShowActionButtons(true);
      setRowDataSelected(rowSelected);
      setStudentSelected(rowSelected);
    } else {
      setShowActionButtons(false);
      setRowDataSelected({});
    }
  };

  const handleDeleteTeacher = () => {
    const dataFiltered = dataTable.filter(row => row !== rowDataSelected);
    setDataTable(dataFiltered);
    setShowActionButtons(false);
    setConfirmAction(false);
  };

  const handleAddStudent = e => {
    e.preventDefault();
    const { name, run } = values;
    // if(!name || !run) return;
    const newStudent = { name, run };
    setStudentsAdded([...studentsAdded, newStudent]);
    values.name = '';
    values.run = '';

    // const filterLetterByCharacter = getLettersCourseSelected.filter(
    //   item => item.character === values.letter,
    // );
  };

  const handleAddCourse = e => {
    e.preventDefault();

    onUpdateEstablishment(institutionSelected.number);
  };

  const onUpdateEstablishment = establishmentNumber => {
    const filterCourseSelected = institutionCourses.filter(
      course => course.level === values.grade.split(' ')[0],
    );
    const getLettersCourseSelected = filterCourseSelected.map(
      item => item.letters[0],
    );

    const payload = {
      name: institutionSelected.name,
      ...filterCourseSelected,
      courses: [
        {
          grade: values.grade.split(' ')[0],
          letters: [
            ...getLettersCourseSelected,
            {
              character: values.letter,
              students: [...studentsAdded],
            },
          ],
        },
      ],
    };
    updateEstablishment(establishmentNumber, payload).then(res => {
      console.log(res);
    });
  };

  return (
    <section className="manager-section">
      {confirmAction && (
        <Modal
          title="Eliminar Instituci&oacute;n"
          subtitle="Deseas eliminar el elemento seleccionado?"
          style={{ padding: '50px 30px' }}
        >
          <div className="container-actions">
            <Button
              text="Cancelar"
              onClick={() => setConfirmAction(false)}
              customStyles={buttonCancelStyle}
            />
            <Button
              onClick={handleDeleteTeacher}
              text="Continuar"
              customStyles={buttonStyles}
            />
          </div>
        </Modal>
      )}
      <h1 className="section__title">{title}</h1>
      <article className="section__content-assignment">
        <div className="content__level-selection">
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div className="select-content">
              <span className="content__level-selection-title">Nivel:</span>
              <select
                style={{
                  boxShadow: '0px 2px 10px rgb(0,0,0,0.25)',
                  backgroundColor: '#fff',
                }}
                onChange={handleInputChange}
                name="grade"
                value={values.grade}
              >
                <option value="Seleccione" disabled>
                  Seleccione
                </option>
                {grades.map(grade => {
                  return (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="select-content">
              <span className="content__level-selection-title">Letra:</span>
              <select
                style={{
                  boxShadow: '0px 2px 10px rgb(0,0,0,0.25)',
                  backgroundColor: '#fff',
                }}
                onChange={handleInputChange}
                value={values.letter}
                name="letter"
              >
                <option value="Seleccione" disabled>
                  Seleccione
                </option>
                {letters.map(letter => {
                  return (
                    <option key={letter} value={letter}>
                      {letter}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {institutionCourses.length > 0 &&
            institutionCourses.map(course => {
              return (
                <section
                  onClick={() => changeStage('detail')}
                  className="content__level-selected"
                >
                  <input id="checkLetter" type="checkbox" />
                  <label htmlFor="checkLetter"></label>
                  <span className="level-selected__degree">
                    {`${course.level.split(' ')[0]} `}
                  </span>
                  <span className="add-word__go-to">
                    <span className="go-to__text">B&aacute;sico</span>
                    <img
                      src={gotoIcon}
                      className="go-to__icon"
                      alt="go to icon"
                    />
                  </span>
                </section>
              );
            })}
        </div>
        <div style={{ width: '50%', marginRight: 50 }}>
          {/*institutionSelected.courses.length > 0 && (
            <>
              <p style={{ margin: 0 }}>
                <strong>Alumnos</strong> asignados a letra:
              </p>
              <Table
                style={{ marginTop: 0 }}
                onHandleCheckboxSelected={onHandleCheckboxSelected}
                dataHeader={tableDataHeaderStudents}
                data={dataTable}
              />
            </>
          )*/}
          {/*studentSelected && (
            <section className="table-actions">
              <Button customStyles={buttonCancelStyle} text={'Eliminar'} />
              <Button customStyles={buttonStyles} text={'Suspender'} />
            </section>
          )*/}
          <form className="form__add-student">
            <p style={{ fontSize: 14 }}>
              {' '}
              Alumnos a&ntilde;adidos: <b>{studentsAdded.length}</b>
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 5,
              }}
            >
              <input
                onChange={handleInputChange}
                type="text"
                name="name"
                value={values.name}
                placeholder="Nombre completo"
              />
              <input
                onChange={handleInputChange}
                type="text"
                name="run"
                value={values.run}
                placeholder="Formato: 12.543.343-8"
              />
            </div>
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                gap: 10,
                justifyContent: 'right',
              }}
            >
              <Button
                onClick={handleAddStudent}
                customStyles={buttonStyles}
                icon={addStudentIcon}
                text="A&ntilde;adir alumno"
                type="button"
              />
              <Button
                onClick={handleAddCourse}
                customStyles={buttonStyles}
                text="Guardar"
                type="button"
              />
            </div>
          </form>
        </div>
        {/*<div className="content__data-table">
          <div className="container-input">
            <input
              className="content__search-teacher"
              type="text"
              placeholder="Buscador de docente"
            />
            <img src={searchIcon} alt="search icon" />
          </div>
          <div className="container__button-search">
            <Button
              disabled={!dataTable.length}
              text="Buscar"
              customStyles={buttonStyles}
            />
          </div>
          {dataTable.length ? (
            <div className="content__table-container">
              <div
                style={{
                  opacity: showActionButtons ? '1' : '0',
                  zIndex: showActionButtons ? 'auto' : '-999',
                }}
                className="content__difused difused-assignment"
              >
                <Button
                  text="Eliminar"
                  onClick={() => setConfirmAction(true)}
                  customStyles={buttonCancelStyle}
                />
                <Button text="Asignar" customStyles={buttonStyles} />
              </div>
              <Table
                dataHeader={headerTable}
                data={dataTable}
                handleCheckboxSelected={onHandleCheckboxSelected}
              />
            </div>
          ) : (
            <h1 style={{ textAlign: 'center' }}>Aún no hay registros</h1>
          )}

          <div className="container__add-button">
            <Button
              onClick={() => setAddTeacher(true)}
              icon={addIcon}
              text="A&ntilde;adir"
              customStyles={buttonStyles}
            />
          </div>
        </div>*/}
      </article>
    </section>
  );
};

export default StageAssignment;

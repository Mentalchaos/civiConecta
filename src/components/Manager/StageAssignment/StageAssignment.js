import { useState } from 'react';
import Table from 'src/components/UI/Table';
import CreateLetter from './CreateLetter/CreateLetter';
import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import CreateTeacher from './CreateTeacher/CreateTeacher';
import useForm from 'src/hooks/useForm';
import gotoIcon from 'src/assets/Icons/arrow-degree.svg';
import addStudentIcon from 'src/assets/Icons/add-student.svg';

import './StageAssignment.css';

const StageAssignment = ({ title, changeStage, institutionSelected }) => {
  const [showActionButtons, setShowActionButtons] = useState(false);
  const [words, setWords] = useState([]);
  const [showAddLetter, setShowAddLetter] = useState(false);
  const [addTeacher, setAddTeacher] = useState(false);
  const [confirmAction, setConfirmAction] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [rowDataSelected, setRowDataSelected] = useState({});
  const [studentSelected, setStudentSelected] = useState({});
  const { values, handleInputChange, reset } = useForm({
    level: 'Nivel',
    name: '',
    rut: '',
  });

  const degrees = ['5º Básico'];
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

  const onHandleAddTeacher = teacher => {
    const selectColumnDataToTable = {
      name: teacher.name,
      registerDate: teacher.houseNumber,
    };

    setDataTable([...dataTable, selectColumnDataToTable]);
    setAddTeacher(false);
  };

  const handleDeleteTeacher = () => {
    const dataFiltered = dataTable.filter(row => row !== rowDataSelected);
    setDataTable(dataFiltered);
    setShowActionButtons(false);
    setConfirmAction(false);
  };

  const onHandleAddLetter = data => {
    const newData = { ...data, level: values.level };
    setWords([...words, newData]);
  };

  const handleAddStudent = e => {
    e.preventDefault();
    const { name, rut } = values;
    if (!name || !rut) return;

    reset();
  };

  return (
    <section className="manager-section">
      {addTeacher && (
        <CreateTeacher
          onHandleAddTeacher={onHandleAddTeacher}
          setAddTeacher={setAddTeacher}
        />
      )}
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
        {showAddLetter && (
          <CreateLetter
            onHandleAddLetter={onHandleAddLetter}
            setShowAddLetter={setShowAddLetter}
          />
        )}
        <div className="content__level-selection">
          <span className="content__level-selection-title">
            Seleccionar nivel
          </span>
          <select
            style={{
              marginLeft: 15,
              boxShadow: '0px 2px 10px rgb(0,0,0,0.25)',
              backgroundColor: '#fff',
            }}
            onChange={handleInputChange}
            name="level"
            value={values.level}
          >
            <option disabled={true}>Nivel</option>
            {degrees.map(degree => {
              return (
                <option key={degree} value={degree}>
                  {degree}
                </option>
              );
            })}
          </select>
          <div className="selection__boxs-container">
            <button
              onClick={() => setShowAddLetter(true)}
              className="content__level-add-word"
            >
              <span className="add-word__plus-sign">+</span>
              <span className="add-word__text">A&ntilde;adir letra</span>
            </button>
            {words &&
              words.map(word => {
                return (
                  <section
                    onClick={() => changeStage('detail')}
                    className="content__level-selected"
                    key={word}
                  >
                    <input id="checkLetter" type="checkbox" />
                    <label htmlFor="checkLetter"></label>
                    <span className="level-selected__degree">
                      {`${word.level.split(' ')[0]} ${word.letter}`}
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
        </div>
        <div style={{ marginTop: 50 }}>
          <p>
            <strong>Alumnos</strong> asignados a letra:
          </p>
          <Table
            style={{ marginTop: 0 }}
            onHandleCheckboxSelected={onHandleCheckboxSelected}
            dataHeader={tableDataHeaderStudents}
            data={[]}
          />
          {studentSelected && (
            <section className="table-actions">
              <Button customStyles={buttonCancelStyle} text={'Eliminar'} />
              <Button customStyles={buttonStyles} text={'Suspender'} />
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
                customStyles={buttonStyles}
                icon={addStudentIcon}
                text={'Anadir'}
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

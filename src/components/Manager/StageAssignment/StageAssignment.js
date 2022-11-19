import { useState } from 'react';
import Table from 'src/components/UI/Table';
import CreateLetter from './CreateLetter/CreateLetter';
import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import CreateTeacher from './CreateTeacher/CreateTeacher';
import gotoIcon from 'src/assets/Icons/arrow-degree.svg';
import addIcon from 'src/assets/Icons/replace-teacher.svg';
import searchIcon from 'src/assets/Icons/search_icon.svg';

import './StageAssignment.css';
import useForm from 'src/hooks/useForm';

const StageAssignment = ({ title, changeStage }) => {
  const [showActionButtons, setShowActionButtons] = useState(false);
  const [words, setWords] = useState([]);
  const [showAddLetter, setShowAddLetter] = useState(false);
  const [addTeacher, setAddTeacher] = useState(false);
  const [confirmAction, setConfirmAction] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [rowDataSelected, setRowDataSelected] = useState({});
  const headerTable = ['Nombre', 'Fecha de registro'];
  const { values, handleInputChange } = useForm({ level: 'Nivel' });

  const degrees = ['1 Básico', '2 Básico', '3 Básico', '4 Básico', '5º Básico'];

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
        <div className="content__data-table">
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
        </div>
      </article>
    </section>
  );
};

export default StageAssignment;

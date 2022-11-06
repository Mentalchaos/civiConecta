import { useState } from 'react';
import Table from 'src/components/UI/Table';
import CreateLetter from './CreateLetter/CreateLetter';
import gotoIcon from 'src/assets/Icons/arrow-degree.svg';
import searchIcon from 'src/assets/Icons/search_icon.svg';

import './StageAssignment.css';
import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import CreateTeacher from './CreateTeacher/CreateTeacher';

const StageAssignment = ({ title }) => {
  const [showActionButtons, setShowActionButtons] = useState(true);
  const [wordAdded, setWordAdded] = useState(true);
  const [showAddLetter, setShowAddLetter] = useState(false);
  const [addTeacher, setAddTeacher] = useState(false);
  const [confirmAction, setConfirmAction] = useState(false);

  const buttonStyles = {
    background: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 40px',
    borderRadius: '20px',
    marginTop: '20px',
  };
  const buttonCancelStyle = {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    border: '1px solid var(--color-secondary)',
    padding: '5px 40px',
    borderRadius: '20px',
    marginTop: '20px',
  };

  const headerTable = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Fecha de registro', accessor: 'date' },
  ];

  const data = [
    { id: 1, name: 'Tadeo Cespedes Vilaita', date: '10/10/2022' },
    { id: 2, name: 'Juliano Soza', date: '10/10/2022' },
    { id: 3, name: 'Nilda Antonia Cuéllar', date: '10/10/2022' },
    { id: 4, name: 'Felipe Antonio Herrera Lopez', date: '10/10/2022' },
    { id: 5, name: 'Guiomar Calvo Lobos', date: '10/10/2022' },
    { id: 6, name: 'María Teresa Vigil Agudo', date: '10/10/2022' },
    { id: 7, name: 'Emilio Rubio Madariaga', date: '10/10/2022' },
    { id: 8, name: 'Stephanie Alejandra Pezoa Jara', date: '10/10/2022' },
    { id: 9, name: 'Matias Nicolas Schurmann Neitlan', date: '10/10/2022' },
    { id: 10, name: 'Ignacio Andrés Vergara Entlean', date: '10/10/2022' },
    { id: 11, name: 'María Teresa Vigil Agudo', date: '10/10/2022' },
  ];

  const degrees = [
    '1º Básico',
    '2º Básico',
    '3º Básico',
    '4º Básico',
    '5º Básico',
    '6º Básico',
    '7º Básico',
    '8º Básico',
  ];
  return (
    <section className="manager-section">
      {addTeacher && <CreateTeacher setAddTeacher={setAddTeacher} />}
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
            <Button text="Continuar" customStyles={buttonStyles} />
          </div>
        </Modal>
      )}
      <h1 className="section__title">{title}</h1>
      <article className="section__content-assignment">
        {showAddLetter && <CreateLetter setShowAddLetter={setShowAddLetter} />}
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
          >
            {degrees.map(degree => {
              return <option value={degree}>{degree}</option>;
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
            {wordAdded && (
              <section className="content__level-selected">
                <input id="checkLetter" type="checkbox" />
                <label htmlFor="checkLetter"></label>
                <span className="level-selected__degree">{'5° B'}</span>
                <span className="add-word__go-to">
                  <span className="go-to__text">B&aacute;sico</span>
                  <img
                    src={gotoIcon}
                    className="go-to__icon"
                    alt="go to icon"
                  />
                </span>
              </section>
            )}
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
          <div className="content__table-container">
            {showActionButtons && (
              <div className="content__difused difused-assignment">
                <Button
                  text="Eliminar"
                  onClick={() => setConfirmAction(true)}
                  customStyles={buttonCancelStyle}
                />
                <Button text="Asignar" customStyles={buttonStyles} />
              </div>
            )}
            <Table dataHeader={headerTable} data={data} />
          </div>
          <div style={{ float: 'right', paddingRight: '45px' }}>
            <Button
              onClick={() => setAddTeacher(true)}
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

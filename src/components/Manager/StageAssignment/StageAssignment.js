import { useState } from 'react';
import Table from 'src/components/UI/Table';
import CreateLetter from './CreateLetter/CreateLetter';
import gotoIcon from 'src/assets/Icons/arrow-degree.svg';
import searchIcon from 'src/assets/Icons/search_icon.svg';

import './StageAssignment.css';

const StageAssignment = ({ title }) => {
  const [wordAdded, setWordAdded] = useState(true);
  const [showAddLetter, setShowAddLetter] = useState(true);
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
  ];
  return (
    <section className="manager-section">
      <h1 className="section__title">{title}</h1>
      <article className="section__content-assignment">
        {showAddLetter && <CreateLetter />}
        <div className="content__level-selection">
          <span className="content__level-selection-title">
            Seleccionar nivel
          </span>
          <div className="selection__boxs-container">
            <section className="content__level-add-word">
              <span className="add-word__plus-sign">+</span>
              <span className="add-word__text">A&ntilde;adir letra</span>
            </section>
            {wordAdded && (
              <section className="content__level-selected">
                <label htmlFor="checkLetter"></label>
                <input id="checkLetter" type="checkbox" />
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
            <Table dataHeader={headerTable} data={data} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default StageAssignment;

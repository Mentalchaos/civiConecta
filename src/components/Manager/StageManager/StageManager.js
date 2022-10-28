import { useState } from 'react';
import Button from 'src/components/UI/Button';
import Table from 'src/components/UI/Table';
import deleteIcon from 'src/assets/Icons/delete_icon.svg';
import './StageManager.css';

const StageManager = ({ title }) => {
  const [showButtonDelete, setShowButtonDelete] = useState(false);

  const headerTable = [
    {
      Header: 'Nombre',
      accessor: 'name',
    },
    { Header: 'Tipo', accessor: 'type', disableSortBy: true },
    { Header: 'Región', accessor: 'region', disableSortBy: true },
    { Header: 'Comuna', accessor: 'commune', disableSortBy: true },
  ];

  const dataTable = [
    { id: 1, name: 'American', type: 'caca', region: 'vaca', commune: 'casca' },
    {
      id: 2,
      name: 'Creativos',
      type: 'caca1',
      region: 'vaca1',
      commune: 'casca1',
    },
    {
      id: 3,
      name: 'Euroamerican School',
      type: 'caca2',
      region: 'vaca2',
      commune: 'casca2',
    },
    {
      id: 4,
      name: 'Larrea',
      type: 'caca3',
      region: 'vaca3',
      commune: 'casca3',
    },
    {
      id: 5,
      name: 'Latin America School',
      type: 'caca4',
      region: 'vaca4',
      commune: 'casca4',
    },
    {
      id: 6,
      name: 'Montealban',
      type: 'caca',
      region: 'vaca',
      commune: 'casca',
    },
    { id: 7, name: 'Tarreo', type: 'caca', region: 'vaca', commune: 'casca' },
    { id: 8, name: 'Zosa', type: 'caca', region: 'vaca', commune: 'casca' },
    {
      id: 9,
      name: 'Sagrados Corazones',
      type: 'caca',
      region: 'vaca',
      commune: 'casca',
    },
    {
      id: 10,
      name: 'Santiago College',
      type: 'caca',
      region: 'vaca',
      commune: 'casca',
    },
  ];

  const regiones = [
    { name: 'Región Metropolitana', id: 1 },
    { name: 'Región Metropolitana', id: 2 },
    { name: 'Región Metropolitana', id: 3 },
    { name: 'Región Metropolitana', id: 4 },
    { name: 'Región Metropolitana', id: 5 },
    { name: 'Región Metropolitana', id: 6 },
    { name: 'Región Metropolitana', id: 7 },
  ];

  const buttonStyles = {
    background: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 40px',
    borderRadius: '20px',
    fontSize: '14px',
    marginTop: '20px',
    float: 'right',
  };

  const buttonDeleteStyles = {
    background: 'var(--color-secondary)',
    color: '#fff',
    padding: '6px 55px',
    borderRadius: '20px',
    fontSize: '14px',
    zIndex: 999,
  };

  return (
    <section className="manager-section">
      <h1 className="section__title">{title}</h1>
      <article className="section__content">
        <div className="manager__search-container">
          <span className="manager__search-text">Nombre</span>
          <div className="search-container__selects">
            <select className="type-school">
              <option value="colegio">Colegio</option>
              <option value="liceo">Liceo</option>
              <option value="escuela">Escuela</option>
            </select>
            <select className="type-region" defaultValue="Región">
              <option disabled={true}>Región</option>
              {regiones.map(region => {
                return (
                  <option value={region.name} key={region.id}>
                    {region.name}
                  </option>
                );
              })}
            </select>
            <input
              className="search__commune"
              name="commune"
              placeholder="Comuna"
            />
          </div>
        </div>
        <Button
          style={{ width: '85%', display: 'inline-block' }}
          text="A&ntilde;adir"
          customStyles={buttonStyles}
        />
      </article>
      <article className="section__content table-container">
        {!showButtonDelete && (
          <div className="content__difused">
            <Button
              text="Eliminar"
              icon={deleteIcon}
              customStyles={buttonDeleteStyles}
            />
          </div>
        )}
        <Table dataHeader={headerTable} data={dataTable} />
      </article>
    </section>
  );
};

export default StageManager;

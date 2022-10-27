import Table from 'src/components/UI/Table';
import searchIcon from 'src/assets/Icons/search_icon.svg';
import './StageAssignment.css';

const StageAssignment = ({ title }) => {
  const headerTable = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Fecha de registro', accessor: 'date' },
  ];
  const data = [
    { id: 1, name: 'Tadeo Cespedes Vilaita', date: '10/10/2022' },
    { id: 1, name: 'Juliano Soza', date: '10/10/2022' },
    { id: 1, name: 'Nilda Antonia Cuéllar', date: '10/10/2022' },
    { id: 1, name: 'Felipe Antonio Herrera Lopez', date: '10/10/2022' },
    { id: 1, name: 'Guiomar Calvo Lobos', date: '10/10/2022' },
    { id: 1, name: 'María Teresa Vigil Agudo', date: '10/10/2022' },
  ];
  return (
    <section className="manager-section">
      <h1 className="section__title">{title}</h1>
      <article className="section__content-assignment">
        <div className="content__level-selection">
          <h1>1seccion</h1>
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

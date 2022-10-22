import Button from 'src/components/UI/Button';
import Table from 'src/components/UI/Table';
import './StageManager.css';

const StageManager = ({ title }) => {
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
        <Button text="A&ntilde;adir" customStyles={buttonStyles} />
      </article>
      <article className="section__content table-container">
        <Table />
      </article>
    </section>
  );
};

export default StageManager;

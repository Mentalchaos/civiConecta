import Button from 'src/components/UI/Button';
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
  const communes = [
    { name: 'Región Metropolitana', id: 8 },
    { name: 'Región Metropolitana', id: 9 },
    { name: 'Región Metropolitana', id: 10 },
    { name: 'Región Metropolitana', id: 11 },
    { name: 'Región Metropolitana', id: 12 },
    { name: 'Región Metropolitana', id: 13 },
  ];

  const buttonStyles = {
    background: 'var(--color-secondary)',
    color: '#fff',
    padding: '7px 40px',
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
            <select className="type-commune" defaultValue="Comuna">
              <option disabled={true}>Comuna</option>
              {communes.map(commune => {
                return (
                  <option key={commune.id} value={commune.name}>
                    {commune.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <Button text="A&ntilde;adir" customStyles={buttonStyles} />
      </article>
      <article className="section__content table"></article>
    </section>
  );
};

export default StageManager;

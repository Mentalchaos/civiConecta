import Button from 'src/components/UI/Button';
import Table from 'src/components/UI/Table';
import './StageDetail.css';

const StageDetail = ({ title }) => {
  const buttonDeleteStyle = {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    borderRadius: 20,
    border: '1px solid var(--color-secondary)',
    padding: '3px 55px',
  };

  const tableDataHeader = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Fecha de asignación', accessor: 'date' },
    { Header: 'Estado de actividad', accessor: 'activity' },
  ];

  return (
    <section className="manager-section">
      <h1 className="section__title">{title}</h1>
      <article className="section__content detail-content">
        <header className="detail-content__header">
          <Button text={'Eliminar curso'} customStyles={buttonDeleteStyle} />
        </header>
        <main className="detail-content__main">
          <div className="main__info">
            <p>
              Colegio: <span>American</span>
            </p>
            <p>
              Nivel: <span>5º Básico</span>
            </p>
            <p>
              Letra actual: <span>B</span>
            </p>
            <p>
              N&uacute;mero de estudiantes: <span>8</span>
            </p>
          </div>
          <div className="main__table">
            <p>Docentes asignados a letra</p>
            <Table dataHeader={tableDataHeader} />
          </div>
        </main>
      </article>
    </section>
  );
};

export default StageDetail;

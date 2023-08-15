// Agregar funcion de handleDelete, para poder borrar archivos segun corresponda en el componente Button
import Button from 'src/components/UI/Button';
import Visible from 'src/components/UI/Visible';
import Table from 'src/components/UI/Table';

const styles = {
  table: { marginTop: 10 },
};

const PlanningFiles = ({ states }) => {
  return (
    <div className="table-section">
    <Table
      style={styles.table}
      // handleCheckboxSelected={handleCheckboxSelected}
      data={[]}
      dataDisplayed={[]}
      dataHeader={['uuid', 'Nombre']}
    />
    <Visible condition={states.rowSelected}>
      <div className="content__difused planning-section">
        <Button
          disabled={true}
          // onClick={handleDownload}
          customClasses="button primary"
        >
          Descargar
        </Button>
        <Button
          disabled={true}
          // onClick={handleDelete}
          customClasses="button delete"
        >
          Eliminar
        </Button>
      </div>
    </Visible>
  </div>
  )
}

PlanningFiles.displayName = 'PlanningFiles';

export default PlanningFiles;

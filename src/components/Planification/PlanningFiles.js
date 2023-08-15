import { useContext } from 'react';
import Button from 'src/components/UI/Button';
import Visible from 'src/components/UI/Visible';
import Table from 'src/components/UI/Table';
import { identity } from 'src/utils/functional';
import { PlanificationContext } from './context';

const styles = {
  table: {
    marginTop: 10
  }
};

const PlanningFiles = () => {
  const { states, setters, actions } = useContext(PlanificationContext);

  const handleCheckboxSelected = file => {
    setters.selectDocument(file);
  };

  const handleDownload = evt => {
    actions.downloadFile();
  };

  const handleDelete = () => {
    const confirmationMessage = 'Al confirmar, se eliminara el archivo almacenado, desea continuar ?';

    if (!window.confirm(confirmationMessage)) {
      return;
    }

    actions.deleteFile();
  };


  return (
    <div className="table-section">
      <Table
        style={styles.table}
        handleCheckboxSelected={handleCheckboxSelected}
        data={states.files}
        dataDisplayed={states.files?.map(identity)}
        dataHeader={['uuid', 'Nombre']}
      />
      <Visible condition={states.selectedDocument?.uuid}>
        <div className="content__difused planning-section">
          <Button
            disabled={states.loading}
            onClick={handleDownload}
            customClasses="button primary"
          >
            Descargar
          </Button>
          <Button
            disabled={states.loading}
            onClick={handleDelete}
            customClasses="button delete"
          >
            Eliminar
          </Button>
        </div>
      </Visible>
    </div>
  );
};

PlanningFiles.displayName = 'PlanningFiles';

export default PlanningFiles;

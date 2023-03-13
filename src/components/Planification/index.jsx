import { useParams } from 'react-router-dom';
import UnitLayout from 'src/Layouts/UnitLayout';
import Visible from 'src/components/UI/Visible';
import Table from 'src/components/UI/Table';
import Button from 'src/components/UI/Button';
import Header from './components/Header';
import ObjectiveDescription from './components/ObjectiveDescription';
import FileUploader from './components/FileUploader';
import PlanificationForm from './components/PlanificationForm';
import { PlanificationContext } from './context';
import usePlanification from './hooks/usePlanification';
import { identity } from 'src/utils/functional';
import './Planification.v2.css';
import Loading from '../UI/Loading';

const styles = {
  table: { marginTop: 10 },
};

const Planification = () => {
  const { lessonId, eventId, eventType } = useParams();
  const { states, setters, actions } = usePlanification(lessonId, eventId, eventType);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.warn('not implemented yet');
  };

  const handleCheckboxSelected = file => {
    actions.selectFile(file);
  };

  const handleDownload = evt => {
    actions.downloadFile();
  };

  const handleDelete = () => {
    if (
      !window.confirm(
        'Al confirmar, se eliminara el archivo almacenado, desea continuar ?',
      )
    ) {
      return;
    }

    actions.deleteFile();
  };

  return (
    <PlanificationContext.Provider value={{ states, setters, actions }}>
      <UnitLayout>
        <div className="planification-container">
          <Header />
          <ObjectiveDescription />
          <div className="planification__files">
            <Visible condition={!states.files.length && !states.isLoading}>
              <h1>No se registran archivos.</h1>
            </Visible>
            <Loading isLoading={states.isLoading}>
              <Visible condition={states.files.length}>
                <div className="table-section">
                  <Table
                    style={styles.table}
                    handleCheckboxSelected={handleCheckboxSelected}
                    data={states.files}
                    dataDisplayed={states.files.map(identity)}
                    dataHeader={['uuid', 'Nombre']}
                  />
                  <Visible condition={states.rowSelected}>
                    <div className="content__difused planning-section">
                      <Button
                        disabled={states.isLoading}
                        onClick={handleDownload}
                        customClasses="button primary"
                      >
                        Descargar
                      </Button>
                      <Button
                        disabled={states.isLoading}
                        onClick={handleDelete}
                        customClasses="button delete"
                      >
                        Eliminar
                      </Button>
                    </div>
                  </Visible>
                </div>
              </Visible>
              <FileUploader />
            </Loading>
          </div>
          <div className="planification__form">
            <h1 className="planification-title">Planificación</h1>
            <Visible condition={states.lesson.planning}>
              {() => (
                <PlanificationForm
                  type={eventType == 1 ? 'situation' : 'ephemeris'}
                  onHandleSubmit={handleSubmit}
                />
              )}
            </Visible>
          </div>
        </div>
      </UnitLayout>
    </PlanificationContext.Provider>
  );
};

export default Planification;

import { useParams } from 'react-router-dom';
import Button from 'src/components/UI/Button';
import Table from 'src/components/UI/Table';
import Visible from 'src/components/UI/Visible';
import UnitLayout from 'src/Layouts/UnitLayout';
import { identity } from 'src/utils/functional';
import Loading from '../UI/Loading';
import FileUploader from './components/FileUploader';
import Header from './components/Header';
import ObjectiveDescription from './components/ObjectiveDescription';
import UnitPlanificationForm from './components/UnitPlanificationForm';
import PlanificationForm from './components/PlanificationForm';
import { PlanificationContext } from './context';
import usePlanification from './hooks/usePlanification';
import useUnitPlanification from './hooks/useUnitPlanification';
import './Planification.v2.css';

const styles = {
  table: { marginTop: 10 },
};

const PlanificationTypes = {
  unit: UnitPlanificationForm,
  situations: PlanificationForm,
  ephemeris: PlanificationForm
};

// la idea aqui sera quitar toda la logica de estados y solo dejar los componentes
// sin estado, no importa si se dibuja todo, despues yo ire incorporando la logica
// de los hooks en este componente

const Planification = () => {
  const { lessonId, parentType } = useParams();
  const { states, setters, actions } = useUnitPlanification(lessonId);

  // const typeEvent = ParentTypes[parentType];

  const handleCheckboxSelected = file => {
    // actions.selectFile(file);
  };

  const handleDownload = evt => {
    // actions.downloadFile();
  };

  const handleDelete = () => {
    if (
      !window.confirm(
        'Al confirmar, se eliminara el archivo almacenado, desea continuar ?',
      )
    ) {
      return;
    }

    // actions.deleteFile();
  };

  return (
    <PlanificationContext.Provider value={{ states, setters, actions }}>
    <div>
      <UnitLayout eventType={parentType}>
        <div className="planification-container">
          <Header />
          <ObjectiveDescription />
          <div className="planification__files">
            <Visible condition={!states.documentQuantity}>
              <h1>No se registran archivos.</h1>
            </Visible>
            <Loading isLoading={states.loading}>
              <Visible condition={states.documentQuantity}>
                <div className="table-section">
                  <Table
                    style={styles.table}
                    handleCheckboxSelected={handleCheckboxSelected}
                    data={[]}
                    dataDisplayed={[]}
                    dataHeader={['uuid', 'Nombre']}
                  />
                  <Visible condition={states.rowSelected}>
                    <div className="content__difused planning-section">
                      <Button
                        disabled={true}
                        onClick={handleDownload}
                        customClasses="button primary"
                      >
                        Descargar
                      </Button>
                      <Button
                        disabled={true}
                        onClick={handleDelete}
                        customClasses="button delete"
                      >
                        Eliminar
                      </Button>
                    </div>
                  </Visible>
                </div>
              </Visible>
              {/*<FileUploader />*/}
            </Loading>
          </div>
          <div className="planification__form">
             <h1 className="planification-title">Planificación</h1>
             <Visible condition={true}>
               {() => {
                 // const Component = PlanificationTypes[parentType];
                 // return (<Component />);
                  return null;
               }}
             </Visible>
         </div>
        </div>
      </UnitLayout>
    </div>
    </PlanificationContext.Provider>
  );

  // return (
  //   <PlanificationContext.Provider value={{ states, setters, actions }}>
  //     <UnitLayout eventType={3}>
  //       <div className="planification-container">
  //         <Header />
  //         <ObjectiveDescription />
  //         <div className="planification__files">
  //           <Visible condition={true}>
  //             <h1>No se registran archivos.</h1>
  //           </Visible>
  //           <Loading isLoading={true}>
  //             <Visible condition={true}>
  //               <div className="table-section">
  //                 <Table
  //                   style={styles.table}
  //                   handleCheckboxSelected={handleCheckboxSelected}
  //                   data={[]}
  //                   dataDisplayed={[]}
  //                   dataHeader={['uuid', 'Nombre']}
  //                 />
  //                 <Visible condition={states.rowSelected}>
  //                   <div className="content__difused planning-section">
  //                     <Button
  //                       disabled={true}
  //                       onClick={handleDownload}
  //                       customClasses="button primary"
  //                     >
  //                       Descargar
  //                     </Button>
  //                     <Button
  //                       disabled={true}
  //                       onClick={handleDelete}
  //                       customClasses="button delete"
  //                     >
  //                       Eliminar
  //                     </Button>
  //                   </div>
  //                 </Visible>
  //               </div>
  //             </Visible>
  //             {/*<FileUploader />*/}
  //           </Loading>
  //         </div>
  //         <div className="planification__form">
  //           <h1 className="planification-title">Planificación</h1>
  //           <Visible condition={true}>
  //             {() => {
  //               const Component = PlanificationTypes[parentType];
  //               return (<Component />);
  //             }}
  //           </Visible>
  //         </div>
  //       </div>
  //     </UnitLayout>
  //   </PlanificationContext.Provider>
  // );
};

export default Planification;

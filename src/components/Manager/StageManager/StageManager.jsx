import { useContext } from 'react';
import Button from 'src/components/UI/Button';
import Loading from 'src/components/UI/Loading';
import Table from 'src/components/UI/Table';
import Visible from 'src/components/UI/Visible';
import AddEstablishmentForm from '../components/AddEstablishmentForm';
import ModalConfirmAction from '../components/ModalConfirmAction';
import { ManagerContext } from '../context';
import config from 'src/config';
import './StageManager.css';

const styles = {
  button: {
    backgroundColor: 'var(--color-secondary)',
    color: '#fff',
    padding: '6px 55px',
    borderRadius: '20px',
  },
};

const StageManager = () => {
  const { states, setters } = useContext(ManagerContext);
  const { ManagerStage } = config.constants;

  const dataDisplayed = states.establishmentList.map(est => {
    const { active, name } = est;
    return {
      name,
      active: active === 1 ? 'Activo' : 'Inactivo',
    };
  });

  const onHandleCheckboxSelected = rowSelected => {
    setters.setIsEstablishmentSelected(rowSelected);
  };

  const handleGoAssignment = () => {
    setters.setStage(ManagerStage.ASSIGNMENT);
  };

  return (
    <>
      <section className="manager-section">
        <div className="current-path">
          <p className="path__text">Manager</p>
        </div>
        <AddEstablishmentForm />
        <Loading isLoading={states.isFetching}>
          <Visible condition={states.establishmentList.length > 0}>
            <article className="section__content table-container">
              <Visible condition={states.isEstablishmentSelected}>
                <div className="content__difused">
                  <Button
                    text={
                      states.establishmentSelected?.active === 1
                        ? 'Deshabilitar'
                        : 'Habilitar'
                    }
                    onClick={() => setters.setShowModalConfirmActive(true)}
                    customStyles={styles.button}
                  />
                  <Button
                    onClick={handleGoAssignment}
                    text="Crear curso"
                    customStyles={styles.button}
                  />
                </div>
              </Visible>
              <Table
                dataHeader={['Nombre', 'Estado']}
                data={states.establishmentList}
                dataDisplayed={dataDisplayed}
                handleCheckboxSelected={onHandleCheckboxSelected}
              />
            </article>
          </Visible>
          <Visible condition={!states.establishmentList.length}>
            <h1 style={{ textAlign: 'center', marginTop: 80 }}>
              Aún no hay instituciones agregadas
            </h1>
          </Visible>
        </Loading>
        <Visible condition={states.showModalConfirmActive}>
          <ModalConfirmAction />
        </Visible>
      </section>
    </>
  );
};

export default StageManager;

import {useListEstablishment, ListContext} from './useListEstablishment';
import Visible from 'src/components/UI/Visible';
import Table from 'src/components/UI/Table';
import CreateInstitutionForm from './CreateInstitutionForm';
import ActionPanel from './ActionPanel';
import './ListEstablishment.css';

const styles = {
  noEstablishmentsMessage: { textAlign: 'center', marginTop: 80 }
};

const ListEstablishment = () => {
  const { states, actions } = useListEstablishment();

  const onHandleCheckboxSelected = rowSelected => {
    actions.selectEstablishment(rowSelected);
  };

  return (
    <>
      <div>Admin del establecimiento</div>

      <ListContext.Provider value={{ states, actions }}>
        <CreateInstitutionForm />
      </ListContext.Provider>

      <Visible condition={!states.establishments.length}>
        <h1 style={styles.noEstablishmentsMessage}>
          Aún no hay instituciones agregadas
        </h1>
      </Visible>

      <Visible condition={states.establishments.length}>
        <article className="section__content table-container">
          <Visible condition={states.selectedEstablishment}>
            <ListContext.Provider value={{ states, actions }}>
              <ActionPanel />
            </ListContext.Provider>
          </Visible>
          <Table
            dataHeader={['Nombre', 'Estado']}
            data={states.establishments}
            dataDisplayed={states.dataDisplayed}
          handleCheckboxSelected={onHandleCheckboxSelected}
          />
        </article>
      </Visible>
    </>

  );
};

export default ListEstablishment;

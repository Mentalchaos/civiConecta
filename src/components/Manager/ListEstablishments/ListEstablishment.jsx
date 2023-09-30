import { useNavigate } from 'react-router-dom';
import { useListEstablishment, ListContext } from './useListEstablishment';
import Visible from 'src/components/UI/Visible';
import Button from 'src/components/UI/Button';
import CreateInstitutionForm from './CreateInstitutionForm';
import './ListEstablishment.css';

const styles = {
  noEstablishmentsMessage: { textAlign: 'center', marginTop: 80 }
};

const ListEstablishment = () => {
  const navigate = useNavigate();
  const { states, actions } = useListEstablishment();

  const handleStatus = (id, newStatus) => (evt) => {
    evt.preventDefault();
    actions.updateStatus(id, newStatus);
  };

  const handleGoToEstablishment = (establishment) => () => {
    const establishmentId = establishment.id;
    navigate(`/admin/establishments/${establishmentId}`);
  };

  return (
    <>
      <ListContext.Provider value={{ states, actions }}>
        <CreateInstitutionForm />

        <Visible condition={!states.establishments.length}>
          <h1 style={styles.noEstablishmentsMessage}>
            Aún no hay instituciones agregadas
          </h1>
        </Visible>

        <Visible condition={states.establishments.length}>
          <article className="section__content table-container">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {states.establishments.map(est => {
                  return (
                    <tr key={est.id}>
                      <td>{est.name}</td>
                      <td>{est.statusName}</td>
                      <td>
                        <Button onClick={handleStatus(est.id, !est.active)}>
                          {est.active ? 'Deshabilitar' : 'Habilitar'}
                        </Button>
                        <Button onClick={handleGoToEstablishment(est)}>
                          Ir a institucion
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </article>
        </Visible>
      </ListContext.Provider>
    </>
  );
};

export default ListEstablishment;

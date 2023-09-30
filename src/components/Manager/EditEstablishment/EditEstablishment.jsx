import { useParams } from 'react-router-dom';
import { useEditEstablishment, EditEstablishmentContext } from './useEditEstablishment';

const EditEstablishment = () => {
  const { establishmentId } = useParams();
  const { states, actions } = useEditEstablishment(establishmentId);

  return (
    <>
      <EditEstablishmentContext.Provider value={{ states, actions }}>
        oeoeoe editando el establecimiento
      </EditEstablishmentContext.Provider>
    </>
  );
};

export default EditEstablishment;

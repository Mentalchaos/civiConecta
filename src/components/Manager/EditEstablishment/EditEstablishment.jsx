import { useParams } from 'react-router-dom';
import useEditEstablishment from './useEditEstablishment';

const EditEstablishment = () => {
  const { establishmentId } = useParams();
  const { states, actions } = useEditEstablishment(establishmentId);

  return (
    <>
      oeoeoe editando el establecimiento
    </>
  );
};

export default EditEstablishment;

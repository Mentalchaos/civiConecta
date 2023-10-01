import { useParams } from 'react-router-dom';
import EstablishmentLayout from 'src/Layouts/EstablishmentLayout';
import session from 'src/utils/session';
import './Manager.css';

const Manager = ({ children }) => {
  const { establishmentId } = useParams();
  const establishment = session.restore(`establishment-${establishmentId}`);
  const subtitle = establishment?.name ?? 'Establecimientos';

  return (
    <EstablishmentLayout title="Manager de establecimientos" subtitle={subtitle}>
      {children}
    </EstablishmentLayout>
  );
};

export default Manager;

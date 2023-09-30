import EstablishmentLayout from 'src/Layouts/EstablishmentLayout';
import './Manager.css';

const Manager = ({ children }) => {
  return (
    <EstablishmentLayout title="Manager de establecimientos">
      {children}
    </EstablishmentLayout>
  );
};

export default Manager;

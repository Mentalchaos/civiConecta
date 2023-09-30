import { useLocation } from 'react-router-dom';
import './SectionsHeader.css';

const EventTypes = {
  unit: 'Unidades',
  situations: 'Situaciones Emergentes',
  ephemeris: 'Efemerides'
};

const SectionsHeader = ({ image, subtitle }) => {
  const location = useLocation();

  return (
    <header className="header-container">
      <img src={image && image} alt="background" />
      <div className="header__texts">
        <h1>
          CIVI{' '}
          <span
            style={{ color: location.pathname === '/admin/establishment' && '#fff' }}
          >
            admin
          </span>
        </h1>
        <p>{EventTypes[subtitle]}</p>
      </div>
    </header>
  );
};

export default SectionsHeader;

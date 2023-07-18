import { useLocation } from 'react-router-dom';
import './SectionsHeader.css';

const SectionsHeader = ({ image, subtitle }) => {
  const location = useLocation();

  const eventTypes = {
    1: 'Situaciones Emergentes',
    2: 'Efemerides',
    3: 'Unidades'
  }

  return (
    <header className="header-container">
      <img src={image && image} alt="background image" />
      <div className="header__texts">
        <h1>
          CIVI{' '}
          <span
            style={{ color: location.pathname === '/admin/manager' && '#fff' }}
          >
            admin
          </span>
        </h1>
        <p>{eventTypes[subtitle]}</p>
      </div>
    </header>
  );
};

export default SectionsHeader;

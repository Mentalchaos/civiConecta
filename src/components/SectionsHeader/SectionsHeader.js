import { useLocation } from 'react-router-dom';
import './SectionsHeader.css';

const SectionsHeader = ({ image, subtitle }) => {
  const location = useLocation();
  return (
    <header className="header-container">
      <img src={image} alt="" />
      <div className="header__texts">
        <h1>
          CIVI
          <span style={{ color: location.pathname === '/admin/manager' && '#fff' }}>
            admin
          </span>
        </h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
};

export default SectionsHeader;

import background from 'src/assets/images/manager-header.png';
import './Manager.css';

const Manager = () => {
  return (
    <div className="container">
      <img
        className="manager__background"
        src={background}
        alt="background banner"
      />
      <main className="manager-content">
        <header className="manager__header">
          <h1 className="manager__header-title">
            CIVI <span>admin</span>
          </h1>
          <span className="manager__header-subtitle">
            Manager de establecimientos
          </span>
        </header>
      </main>
    </div>
  );
};

export default Manager;

import './Ephemeris.css';
/* import EphemerisDoc from './EphemerisDoc/EphemerisDoc'; */
import EphemerisDoc from './EphemerisDoc/EphemerisDoc';

const Ephemeris = () => {
  return (
    <main className="main-content">

      <header className="header">
      <h1 className="header__title">
        CIVI <span>admin</span>
      </h1>
    </header>
    <span className='header__subtitle'>Efemérides</span>
      <div className='ephemeris-container'>
        <div className='ephemeris-select-container'>
          <div className='ephemeris-select-info'>
            Filtrar items por:
          </div>
          <select  className="ephemeris-select">
            <option value="value1" selected>Nombre</option>
            <option value="value2">Fecha</option>
          </select>
        </div>
        <div className='ephemeris-content'>
          <div className='ephemeris-column'>
            <EphemerisDoc/>
            <EphemerisDoc/>
            <EphemerisDoc/>
            <EphemerisDoc/>
          </div>
          <div className='ephemeris-column'>
            <EphemerisDoc/>
            <EphemerisDoc/>
            <EphemerisDoc/>
            <EphemerisDoc/>
          </div>
        </div>
        <div>
          <div className='ephimeris-pag'>
          &lt;&lt;  &lt; 1/1 &gt;  &gt;&gt;
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ephemeris;

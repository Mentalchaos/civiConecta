import brain from '../../../assets/Icons/white-brain.svg';
import unitGreen from '../../../assets/Icons/unit-green.svg';
import Footer from '../Footer/index';
import './EphemeriesDashboard.css';
import EphemerisDate from './components/EphemerisDate';

const EphemeriesDashboard = () => {
    return (
        <div className='ephemeris-section'>
            <div className="ephemeris">
                <div className='ephemeris-cont'>
                    <div className='ephemeris-header'>
                        <img className='ephemeris-image' src={brain} alt='logo'></img>
                        <div className='ephemeris-header-text'>
                            <p>Efemérides</p>
                        </div>
                    </div>
                    <div className='ephemeris-description-container'>
                        <div className='ephemeris-description'>
                            <img className='book-icon' src={unitGreen} alt='' />
                            <div className='ephemeris-info'>
                                <div className='ephemeris-desc-title'>Descripción:</div>
                                <div className='ephemeris-desc-text'>Nuestro programa incluye la planificación del siguiente listado de efemérides, de acuerdo con la
                                propuesta del Ministerio de Educación, en la resolución exenta nº 002329 que establece calendario
                                escolar para establecimientos educacionales de la Región Metropolitana.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dates-container">
                <div className="dates-section">
                    <EphemerisDate />
                    <EphemerisDate />
                    <EphemerisDate />
                    <EphemerisDate />
                    <EphemerisDate />
                    <EphemerisDate />
                    <EphemerisDate />
                    <EphemerisDate />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EphemeriesDashboard;

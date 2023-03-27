import goTo from 'src/assets/Icons/open-arrow.svg';
import '../EphemeriesDashboard.css';

const EphemerisDate = () => {
    return (
        <div className='ephemeris-day'>
            <div className='ephemeris-date'>
                <p>08/03</p>
            </div>
            <div className='ephemeris-title'>
                <p>Día internacional de la mujer.</p>
            </div>
            <div className='ephemeris-see-class'>
                <p>Ver clase</p>
                <img src={goTo} alt='arrow-icon'/>
            </div>
        </div>
    )
}

export default EphemerisDate;
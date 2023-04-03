import goTo from 'src/assets/Icons/open-arrow.svg';
import '../EphemeriesDashboard.css';

const EphemerisDate = ({id, title, description, date}) => {
    return (
        <div className='ephemeris-day'>
            <div className='ephemeris-date'>
                <p>{date}</p>
            </div>
            <div className='ephemeris-title'>
                <p>{title}.</p>
            </div>
            <div className='ephemeris-see-class'>
                <p>Ver clase</p>
                <img src={goTo} alt='arrow-icon'/>
            </div>
        </div>
    )
}

export default EphemerisDate;
import { useNavigate } from 'react-router-dom';
import goTo from 'src/assets/Icons/open-arrow.svg';
import '../EphemeriesDashboard.css';

const EphemerisDate = ({ id, title, date }) => {
  const navigate = useNavigate();
    return (
        <div className='ephemeris-day'>
            <div className='ephemeris-date'>
                <p>{date}</p>
            </div>
            <div className='ephemeris-title'>
                <p>{title}.</p>
            </div>
            <div className='ephemeris-see-class' onClick={() => navigate(`/public/planning/${id}/${title}`)} >
                <p>Ver clase</p>
                <img src={goTo} alt='arrow-icon'/>
            </div>
        </div>
    )
}

export default EphemerisDate;

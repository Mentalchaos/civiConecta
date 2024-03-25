import { useNavigate } from 'react-router-dom';
import goTo from 'src/assets/Icons/open-arrow.svg';
import rightIcon from 'src/assets/Icons/right-thin-icon.svg';
import '../EphemeriesDashboard.css';

const EphemerisDate = ({ id, title, date }) => {

  const convertDate = date => {
    const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    const [day, monthNumber] = date.split('-');
    const month = months[parseInt(monthNumber, 10) - 1];

    return `${day} ${month}`;
  };

  const originalDate = date;
  const convertedDate = convertDate(originalDate);

  const navigate = useNavigate();

  // const truncateTitle = title => {
  //   const maxLength = 40;
  //   if (title.length > maxLength) {
  //     return `${title.substring(0, maxLength)}...`;
  //   }
  //   return title;
  // };

  // const adjustedTitle = truncateTitle(title);

  return (
    <>
      <div className='mobile-ephemeris-day'>
        <div className='mobile-ephemeris-date'>
          <p>{convertedDate}</p>
        </div>
        <div className='mobile-ephemeris-title'>
          <p>{title}.</p>
        </div>
        <div className='mobile-arrow-cont' onClick={() => navigate(`/public/planning/${id}/${title}/ephemeris`)} >
          <img src={rightIcon} alt='arrow-icon' />
        </div>
      </div>
      <div className='ephemeris-day'>
        <div className='ephemeris-date'>
          <p>{date}</p>
        </div>
        <div className='ephemeris-title'>
          <p>{title}.</p>
        </div>
        <div className='ephemeris-see-class' onClick={() => navigate(`/public/planning/${id}/${title}/ephemeris`)} >
          <p>Ver clase</p>
          <img src={goTo} alt='arrow-icon' />
        </div>
      </div>
    </>
  )
}

export default EphemerisDate;

import icon from 'src/assets/Icons/survey-link-orange-icon.svg'
import right from 'src/assets/images/right-red.svg'
import './LinkGenerator.css';

const LinkGenerator = ({ data, onClick }) => {

  const { description, textButton, backgroundColor, width, textButtonColor } = data;
  const href = textButton === "Ver enlace encuesta" ? `/public/share-survey` : null;

  return (
    <div className='link-container'>
      <div className={`survey-link-container ${backgroundColor}`}>
        <div className={`first-container-link ${width}`}>
          <img src={icon} alt="link-icon" />
          <p style={{display: 'flex', alignItems: 'center'}}>{description}</p>
        </div>
        <div onClick={onClick} className='second-container-link'>
          <button className='survey-button'>
            <a className={`${textButtonColor}`} href={href}>{textButton}</a>
            <img className={`${textButtonColor}`} src={right} alt="right-arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

LinkGenerator.displayName = 'LinkGenerator';

export default LinkGenerator;

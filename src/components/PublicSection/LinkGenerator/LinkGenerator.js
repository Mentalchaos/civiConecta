import icon from 'src/assets/Icons/survey-link-icon.svg'
import right from 'src/assets/images/right-red.svg'
import './LinkGenerator.css';

const LinkGenerator = ({description, textButton, backgroundColor, width, textButtonColor}) => {
    return (
        <div className='link-container'>
            <div className={`survey-link-container ${backgroundColor}`}>
                <div className={`first-container-link ${width}`}>
                    <img src={icon} alt="link-icon"/>
                    <p>{description}</p>
                </div>
                <div className='second-container-link'>
                    <button className='survey-button'>
                        <a className={`${textButtonColor}`} href='https://plataforma.civiconecta.cl/public/share-survey' target="_blank">{textButton}</a>
                        <img className={`${textButtonColor}`} src={right} alt="right-arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LinkGenerator;
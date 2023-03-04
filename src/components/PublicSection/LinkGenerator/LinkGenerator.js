/* eslint-disable react/jsx-no-target-blank */
import icon from 'src/assets/Icons/survey-link-icon.svg'
import right from 'src/assets/images/right-red.svg'
import './LinkGenerator.css';

const LinkGenerator = ({ data, onClick }) => {

    const {description, textButton, backgroundColor, width, textButtonColor} = data;
    const href = textButton === "Ver enlace encuesta" ? `/share-survey` : null;

    return (
        <div className='link-container'>
            <div className={`survey-link-container ${backgroundColor}`}>
                <div className={`first-container-link ${width}`}>
                    <img src={icon} alt="link-icon"/>
                    <p>{description}</p>
                </div>
                <div className='second-container-link'>
                    <button className='survey-button' onClick={onClick}>
                        <a className={`${textButtonColor}`} href={href} target="_blank">{textButton}</a>
                        <img className={`${textButtonColor}`} src={right} alt="right-arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

LinkGenerator.displayName = 'LinkGenerator';

export default LinkGenerator;

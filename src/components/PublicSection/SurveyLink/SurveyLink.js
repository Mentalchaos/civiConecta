import icon from 'src/assets/Icons/survey-link-icon.svg'
import right from 'src/assets/images/right-red.svg'
import './SurveyLink.css';

const SurveyLink = () => {
    return (
        <div className='link-container'>
            <div className='survey-link-container'>
                <div className='first-container-link'>
                    <img src={icon} />
                    <p>¿Necesitas el enlace de la encuesta de tus estudiantes nuevamente?</p>
                </div>
                <div className='second-container-link'>
                    <button>Ver enlace encuesta
                        <img src={right}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SurveyLink;
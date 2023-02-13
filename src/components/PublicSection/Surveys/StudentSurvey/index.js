import smileIcon from 'src/assets/Icons/student-survey-smile.svg';
import arrow from 'src/assets/Icons/thin-right.svg';
import warning from 'src/assets/Icons/warning-icon.svg';
import StudentsHeader from './StudentsHeader';
import './StudentSurvey.css';

const StudentSurvey = () => {
    return (
        <>
            <StudentsHeader />
            <div className='students-survey-container'>
                <div className='students-left'>
                    <div className='image-container'></div>
                </div>
                <div className='students-right'>
                    <div className='students-text-container'>
                        <div className='students-title-container'>
                            <img src={smileIcon}/>
                            <p>¡Hola!</p>
                        </div>
                        <div className='students-info-container'>
                            <p>Por favor ingresa tu RUT para que puedas iniciar tu encuesta CiviConecta.</p>
                        </div>
                        <div className='id-container'>
                            <div className='id-one'>
                                <p>RUT</p>
                                <input placeholder='00.000.000-k'/>
                            </div>
                            <div className='id-two'>
                                <img src={warning}/>
                                <p>El RUT que ingresaste no coincide con ningún estudiante.<br/>
                                Verifíca que esté bien escrito y vuelve a intentarlo.</p>
                            </div>
                        </div>
                        <div className='students-button'>
                            <button>
                                Ingresar RUT
                                <img src={arrow}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

StudentSurvey.displayName = 'StudentSurvey';

export default StudentSurvey;
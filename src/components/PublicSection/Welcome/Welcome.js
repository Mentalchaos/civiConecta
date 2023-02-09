import calendar from 'src/assets/Icons/calendar-public.svg';
import school from 'src/assets/Icons/school.svg';
import cap from 'src/assets/Icons/graduation-cap.svg';
import man from 'src/assets/images/fraud-protection-hero.png';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className='welcome-section'>
            <div className='welcome-container'>
                <div className='left-container'>
                    <h3>¡Bienvenida Catalina!</h3>
                    <p className='p-1'>
                    Ya eres parte de la Civicomunidad, aquí encontrarás todos los recursos que necesitas para
                    tus clases de Orientación. Esperamos contribuir en tu labor como docente a cargo de un
                    curso. No dudes en contactarnos si nos necesitas.
                    </p>
                    <p className='p-2'>
                    Te recomendamos revisar previamente el material y ajustar lo que consideres pertinente,
                    pues nuestro programa aborda temas que pueden resultar complejos según el contexto
                    de tus estudiantes.
                    </p>
                </div>
                <div className='right-container'>
                    <div className='second-right-container'>
                        <div className='date-container'>
                            <img src={calendar} alt="calendar"/>
                            <p>Miércoles 13, Julio 2022</p>
                        </div>
                        <div className='school-container'>
                            <img src={school} alt="school" />
                            <div className='school-info-container'>
                                <p>Establecimiento o Institución educativa</p>
                                <p className='school-info'>Liceo Amanda Labarca</p>
                            </div>
                        </div>
                        <div className='grade-container'>
                            <img src={cap} alt="cap"/>
                            <div className='grade-info'>
                                <p>Nivel del curso</p>
                                <p className='grade'>Jefatura 5º</p>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <img src={man} />
                    </div> */}
                </div>
                <img className='man-image' src={man} alt="man"/>
            </div>
        </div>
    )
}

export default Welcome;

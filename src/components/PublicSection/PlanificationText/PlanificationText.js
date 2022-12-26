import logo from 'src/assets/Icons/to-begin.svg';
import arrow from 'src/assets/images/right-red.svg';
import './PlanificationText.css';

const PlanificationText = () => {
    return (
        <div className='planification-container'>
            <div>
                <div className='planification-header'>
                    <img src={logo} />
                    <p>Para comenzar</p>
                </div>
                <div>
                    <p className='planification-subtitle'>Tienes dos alternativas para implementar nuestra planificación anual:</p>
                </div>
                <div className='alternatives-container'>
                    <div className='alternative'>
                        <img src={arrow} />
                        <p>Personalizada, reorganiza las unidades de acuerdo con las necesidades de tu curso. Para
                        esta opción, tanto tú como tus estudiantes, deben responder una encuesta.
                        </p>
                    </div>
                    <div className='alternative'>
                        <img src={arrow} />
                        <p>Estandarizada, respeta la organización ministerial de unidades. </p>
                    </div>
                </div>
            </div>
            <div className='second-container'>
                <div className='planification-container-two'>
                    <img src={logo} />
                    <p>Estás a un paso de obtener tu planificación personalizada:</p>
                </div>
            </div>
        </div>
    )
}

export default PlanificationText;
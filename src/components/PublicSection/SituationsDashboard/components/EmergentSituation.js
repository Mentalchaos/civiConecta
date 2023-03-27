import goTo from 'src/assets/Icons/open-arrow.svg';
import '../SituationsDashboard.css';

const EmergentSituation = () => {
    return (
        <div className='situation-day'>
            <div className='situation-date'>
                <p>Clase Nº1</p>
            </div>
            <div className='situation-title'>
                <p>Resolución de conflictos con los amigos</p>
            </div>
            <div className='situation-desc'>
                <p>Comprender la amistad de manera sana (no
                posesiva) y empática para lograr relaciones
                de confianza y duraderas.
                </p>
            </div>
            <div className='situation-see-class'>
                <p>Ver clase</p>
                <img src={goTo} alt='arrow-icon'/>
            </div>
        </div>
    )
}

export default EmergentSituation;
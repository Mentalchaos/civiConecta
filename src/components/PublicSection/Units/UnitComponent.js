import unitLogo from 'src/assets/Icons/unit-purple.svg';
import brain from 'src/assets/Icons/heart-brain.svg';
import goTo from 'src/assets/Icons/go-to-link.svg';
import './UnitComponent.css';

const UnitComponent = () => {
    return (
        <div className='unit-component-container'>
            <div className='unit-component-title'>
                <div>
                    <img src={unitLogo} />
                </div>
                <div className='unit-second-container'>
                    <p>Completada</p>
                    <img src={brain}/>
                </div>
            </div>
            <div className='component-info'>
                <p className='component-title'>Unidad I</p>
                <p className='component-subtitle'>Relaciones interpersonales</p>
                <p className='component-description'>
                Fomentar trato respetuoso y
                solidario; rechazar violencia y
                discriminación en las relaciones.
                </p>
            </div>
            <div className='go-to-unit'>
                <p>Ir a la unidad</p>
                <img src={goTo} />
            </div>
        </div>
    )
}

export default UnitComponent;
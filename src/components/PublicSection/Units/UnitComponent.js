import unitLogo from 'src/assets/Icons/unit-purple.svg';
import brain from 'src/assets/Icons/heart-brain.svg';
import goTo from 'src/assets/Icons/open-arrow.svg';
import './UnitComponent.css';

const UnitComponent = ({status, title, subtitle, description, color, borderColor}) => {
    return (
        <div className={`unit-component-container ${color}`}>
            <div className='unit-component-title'>
                <div>
                    <img src={unitLogo} alt='unit-logo' />
                </div>
                <div className='unit-second-container'>
                    <p>{status}</p>
                    <img src={brain} alt='brain-logo'/>
                </div>
            </div>
            <div className='component-info'>
                <p className='component-title'>{title}</p>
                <p className={`component-subtitle ${borderColor}`}>{subtitle}</p>
                <p className='component-description'>{description}</p>
            </div>
            <div className='go-to-unit'>
                <p>Ir a la unidad</p>
                <img src={goTo} alt="arrow-icon" />
            </div>
        </div>
    )
}

export default UnitComponent;
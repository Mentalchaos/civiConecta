import icon from 'src/assets/Icons/units-section.svg'
import './UnitsHeader.css';

const UnitsHeader = ({program}) => {
    return (
        <div>
            <div className='units-header-title'>
                <img alt="icon-civi" src={icon} />
                <p>Unidades</p>
            </div>
            <div className='units-header-sub'>
                <p>A continuación encontrarás las unidades que conforman la planificación anual del programa {program}, en cada una de ellas encontrarás todo el material para implementarlas.
                </p>
            </div>
        </div>
    )
}

export default UnitsHeader;

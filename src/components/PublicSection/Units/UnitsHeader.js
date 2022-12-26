import icon from 'src/assets/Icons/units-section.svg'
import './UnitsHeader.css';

const UnitsHeader = () => {
    return (
        <div>
            <div className='units-header-title'>
                <img src={icon} />
                <p>Unidades</p>
            </div>
            <div className='units-header-sub'>
                <p>A continuación encontrarás las unidades que conforman la planificación anual del programa
                ministerial, en cada una de ellas encontrarás todo el material para implementarlas.
                </p>
            </div>
        </div>
    )
}

export default UnitsHeader;
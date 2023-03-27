import './Unit.css';
import brain from '../../../assets/Icons/white-brain.svg';
import unitGreen from '../../../assets/Icons/unit-green.svg';
/* import brain from 'src/assets/Icons/heart-brain.svg'; */

const Unit = () => {
    return (
        <div className="unit">
           <div className='unit-content'>
            <div className='unit-header'>
                <img className='unit-img' src={brain} alt='logo'></img>
                <div className='unit-header-text'>
                    <p className='text'>Unidad II:</p>
                    <p className='text'>Resolución de conflictos</p>
                </div>
            </div>
            <div className='unit-info'>
                <div className='unit-desc'>
                    <img src={unitGreen} className='unit-desc-svg' alt='' />
                    <div className='info'>
                        <div className='info-title'>Descripción de la unidad</div>
                        <div className='info-text'>Aplicar autónomamente estrategias para la resolución de conflictos</div>
                    </div>
                </div>
                <div className='unit-desc'>
                    <img src={unitGreen} className='unit-desc-svg' alt='' />
                    <div className='info'>
                        <div className='info-title'>Objetivo de la unidad</div>
                        <div className='info-text'>Distinguir y describir emociones y reconocer y practicar formas apropiadas de expresarlas, considerando el posible impacto en sí mismo y en otros</div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Unit;
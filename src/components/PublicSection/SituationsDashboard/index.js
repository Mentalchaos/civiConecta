import brain from '../../../assets/Icons/white-brain.svg';
import unitGreen from '../../../assets/Icons/unit-green.svg';
import Footer from '../Footer/index';
import './SituationsDashboard.css';
import EmergentSituation from './components/EmergentSituation';

const SituationsDashboard = () => {
    return (
        <div className='situations-section'>
            <div className="situations">
                <div className='situations-cont'>
                    <div className='situations-header'>
                        <img className='situations-image' src={brain} alt='logo'></img>
                        <div className='situations-header-text'>
                            <p>Situaciones emergentes</p>
                        </div>
                    </div>
                    <div className='situations-description-container'>
                        <div className='situations-description'>
                            <img className='book-icon' src={unitGreen} alt='situations-icon' />
                            <div className='situations-info'>
                                <div className='situations-desc-title'>Descripción:</div>
                                <div className='situations-desc-text'>Clases para profundizar y complementar temáticas ya abordadas en unidades anteriores,
                                además de posibles conflictos que se dan en el aula. Utiliza el buscador para encontrar clases
                                atingentes con las temáticas que necesites.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="classes-container">
                <div className="classes-section">
                    <EmergentSituation />
                    <EmergentSituation />
                    <EmergentSituation />
                    <EmergentSituation />
                    <EmergentSituation />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SituationsDashboard;

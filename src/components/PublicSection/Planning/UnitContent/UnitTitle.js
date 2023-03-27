import './UnitTitle.css'
import brain from '../../../../assets/Icons/white-brain.svg';

const UnitTitle = () => {
    return (
        <div className=''>
            <div className='unit-head'>
                <img className='unit-img' src={brain} alt='logo'></img>
                <div className='green-text'>Unidad II: Resolución de conflictos</div>
                <div> / clase 1 / Lorem ipsum dolor sit amet</div>
            </div>
        </div>
    )
}

export default UnitTitle;
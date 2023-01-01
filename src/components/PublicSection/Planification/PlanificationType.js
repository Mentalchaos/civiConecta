import teacher from 'src/assets/images/teacher.jpg'
import right from 'src/assets/images/right-red.svg'
import './PlanificationType.css';

const PlanificationType = () => {
    return (
        <div className='planification-type-container'>
            <div className='planification-type'>
                <div className='planification-text'>
                    <h4>Reorganiza la planificación de
                    acuerdo con la realidad de tu curso.</h4>
                    <button>
                    Personalizar planificación
                        <img src={right} />
                    </button>
                </div>
                <div>
                    <img className='teacher-image' src={teacher} />
                </div>
            </div>
        </div>
    )
}

export default PlanificationType;
import teacher from 'src/assets/images/teacher.jpg'
import right from 'src/assets/images/right-red.svg'
import './PlanificationType.css';

const PlanificationType = ({title, textButton}) => {
    return (
        <div className='planification-type-container'>
            <div className='planification-type'>
                <div className='planification-text'>
                    <h4>{title}</h4>
                    <button>
                        {textButton}
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
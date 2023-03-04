import teacher from 'src/assets/images/teacher.jpg';
import right from 'src/assets/images/right-red.svg';
import './PlanificationType.css';

const PlanificationType = ({title, textButton}) => {
  return (
    <div className="planification-type-container">
      <div className="planification-type">
        <div className="planification-text">
          <h4>
            {title}
          </h4>
          <button className="planification-button">
            {textButton}
            <img src={right} alt="" />
          </button>
        </div>
        <div className="planification-image">
          <img className="teacher-image" src={teacher} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PlanificationType;

// import teacher from 'src/assets/images/teacher.jpg';
import { useState } from 'react';
import right from 'src/assets/images/right-red.svg';


import './PlanificationType.css';

const PlanificationType = ({ title, textButton, img, id }) => {

  const [answerData, setAnswerData] = useState(false);
  const [renderAnswer, setRenderAnswer] = useState('data');

  const handleAnswer = (title) => {
    setAnswerData(true)
    setRenderAnswer(title)
  };

  return (
    <>
      {renderAnswer && 
      <div className='planification-type-container' >
        <div className='planification-image'>
          <img className='teacher-image' src={img} alt='planification' />
        </div>
        <div className='button-and-text'>
          <div className='planification-text'>
            <h4>
              {title}
            </h4>
          </div>
          <button className="planification-button">
            {textButton}
            <img src={right} alt='right' />
          </button>
        </div>
      </div>
      }
    </>
  )
};


// const PlanificationType = ({title, textButton}) => {
//   return (
//     <div className="planification-type-container">
//       <div className="planification-type">
//         <div className="planification-text">
//           <h4>
//             {title}
//           </h4>
//           <button className="planification-button">
//             {textButton}
//             <img src={right} />
//           </button>
//         </div>
//         <div className="planification-image">
//           <img className="teacher-image" src={teacher} />
//         </div>
//       </div>
//     </div>
//   );
// };

export default PlanificationType;

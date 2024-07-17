import { Fragment } from 'react';
import Alternative from './Alternative';

const Question = ({ question, questionIndex, userType }) => {

  const color = userType === 'student' ? 'var(--color-primary)' : 'var(--color-secondary)';

  return (
    <Fragment>
      <div className="surveys__question">
        <div className='surveys__mobile_question' style={{'color': color}}>
          { questionIndex + 1 }.-
        </div>
        <div>
        { question.description }
        </div>
      </div>
      <form className="alternatives__form">
        {question.alternatives.map(option => (
          option.description !== "-" &&
          <Alternative  
            alternative={option} 
            key={option.letter}
            userType={userType}
          />
        ))}
      </form>
    </Fragment>
  );
};

export default Question

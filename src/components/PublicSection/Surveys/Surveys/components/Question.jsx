import { Fragment } from 'react';
import Alternative from './Alternative';

const Question = ({ question }) => {
  return (
    <Fragment>
      <p className="surveys__question">{question.description}</p>
      <form className="alternatives__form">
        {question.alternatives.map(option => (
          option.description !== "-" &&
          <Alternative  
            alternative={option} 
            key={option.letter} 
          />
        ))}
      </form>
    </Fragment>
  );
};

export default Question

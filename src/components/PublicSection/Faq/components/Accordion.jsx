import React from 'react';
import { useState } from 'react';
import './Accordion.css';

const Accordion = ({ question, answer }) => {

  const [active, setActive] = useState(false);

  const symbol = active ? "-" : "+";

  return (
    <div className='accordion'>
      <div className='accordion-heading'>
        <div className='accordion-title-container'>
          <p>{question}</p>
          <span onClick={() => setActive(!active)}>{symbol}</span>
        </div>
      </div>
      <div className={(active ? "show" : '') + 'accordion-content'}>
        <div className='accordion-answer-container'>
          <p>
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accordion;
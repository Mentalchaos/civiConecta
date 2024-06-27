import React from 'react';
import { useState } from 'react';
import './Accordion.css';

const Accordion = ({ question, answer, inputValue = '' }) => {
  const [active, setActive] = useState(false);
  const symbol = active ? "-" : "+";

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <p>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="highlight">{part}</span>
          ) : (
            part
          )
        )}
      </p>
    );
  };

  return (
    <div className='accordion'>
      <div className='accordion-heading'>
        <div className='accordion-title-container'>
          <p>{highlightText(question, inputValue)}</p>
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

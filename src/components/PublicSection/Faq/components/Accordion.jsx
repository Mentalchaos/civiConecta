import React from 'react';
import './Accordion.css';

const Accordion = ({ title, active, setActive, question }) => {
  return (
    <div className='accordion'>
      <div className='accordion-heading'>
        <div className='accordion-title-container'>
          <p>{question}</p>
          <span onClick={() => setActive(title)}>+</span>
        </div>
      </div>
      <div className={(active === title ? "show" : '') + 'accordion-content'}>
        <div className='accordion-answer-container'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima exercitationem animi dolorum,
            sapiente qui in hic porro explicabo nobis sed voluptatum totam, dolor eius soluta alias eligendi.
            Eveniet, optio voluptate.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accordion;
import React from 'react';
import './BoxIcon.css';

const BoxIcon = ({ svg, background }) => {
  return (
    <div className="icon-content">
      <img
        style={{ backgroundColor: `var(--${background})` }}
        src={svg}
        alt="icon"
        width="32"
        height="25"
      />
    </div>
  );
};

export default BoxIcon;

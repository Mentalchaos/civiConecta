import * as React from 'react';
import './index.css';

const BoardIcon = props => (
  <svg
    width={50}
    height={51}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="clickable"
    {...props}
  >
    <path
      d="M0 34.13v3.121a1.567 1.567 0 0 0 1.566 1.567h7.892L6.56 46.78c-1.093 3.257 3.638 4.98 4.894 1.782l.893-2.453h25.307l.892 2.453c1.256 3.198 5.988 1.474 4.894-1.782l-2.898-7.962H35l1.517 4.166H13.484L15 38.818h33.433A1.566 1.566 0 0 0 50 37.25V34.13H0ZM23.959 24.239a1.567 1.567 0 0 1 1.567-1.567h15.616a1.567 1.567 0 0 1 1.567 1.567v6.766h4.166V1.839A1.564 1.564 0 0 0 45.312.276H4.689a1.564 1.564 0 0 0-1.564 1.563v29.166h20.834v-6.766Z"
      fill="#fff"
    />
    <path d="M39.583 25.797h-12.5v5.208h12.5v-5.208Z" fill="#fff" />
  </svg>
);

export default BoardIcon;

import React from 'react';
import linkTo from 'src/assets/Icons/link-to.svg';

const UnitDocs = ({title}) => {
    return (
      <div className='unit-doc-container'>
        <div className='unit-doc'>
            <div className='unit-doc-info'>
                <div className='unit-doc-title'>{title}</div>
                <p>0 documentos totales en clases</p>
            </div>
            <div className='unit-doc-goto'>
                <img className='unit-doc-goto-icon' src={linkTo} alt="go to"></img>
            </div>
        </div>
      </div>
    );
  };
  
  export default UnitDocs;
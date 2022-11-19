import React from 'react';

const UnitDocs = ({title}) => {
    return (
      <div className='unit-doc-container'>
        <div className='unit-doc'>
            <div className='unit-doc-info'>
                <div className='unit-doc-title'>{title}</div>
                <p>0 documentos totales en clases</p>
            </div>
            <div className='unit-doc-goto'>
                <img className='unit-doc-goto-icon' src="/static/media/link-to.6def5e3373dbc9e67d2f63283fc50b0f.svg" alt="go to"></img>
            </div>
        </div>
      </div>
    );
  };
  
  export default UnitDocs;
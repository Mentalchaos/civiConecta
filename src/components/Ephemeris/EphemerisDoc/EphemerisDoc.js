import { useState } from 'react';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import '../Ephemeris.css';

const EphemerisDoc = ({
  handleEphemerisSelected,
  handleShowPlanning,
  ephemerisData,
}) => {
  const { title, files, description, number } = ephemerisData;

  const onHandleShowPlanning = () => {
    handleShowPlanning(true);
    handleEphemerisSelected(ephemerisData);
  };

  return (
    <div className="ephemeris-doc-container">
      <div className="doc-texts">
        <p className="doc-event-number">{number}</p>
        <div className="ephemeris-title">{title}</div>
        <div className="ephemeris-subtitle">
          {files.length} documentos adjuntados.
        </div>
        <div className="ephemeris-subtitle">OA: {description}</div>
      </div>
      <img
        onClick={onHandleShowPlanning}
        className="go-planning"
        src={arrow}
        alt="Go to planning icon"
      />
    </div>
  );
};

export default EphemerisDoc;

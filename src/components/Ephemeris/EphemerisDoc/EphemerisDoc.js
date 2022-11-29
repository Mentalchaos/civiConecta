import { useState } from 'react';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import '../Ephemeris.css';

const EphemerisDoc = ({
  onHandleShowPlanning,
  onHandleEphemerisSelected,
  ...ephemerisData
}) => {
  const { name, date, files, detail } = ephemerisData;

  const handleShowPlanning = () => {
    onHandleShowPlanning(true);
    onHandleEphemerisSelected(ephemerisData);
  };

  return (
    <div className="ephemeris-doc-container">
      <div className="doc-texts">
        <div className="ephemeris-title">{name}</div>
        <div className="ephemeris-subtitle">{files} documentos adjuntados.</div>
        <div className="ephemeris-subtitle">OA: {detail}</div>
      </div>
      <img
        onClick={handleShowPlanning}
        className="go-planning"
        src={arrow}
        alt="Go to planning icon"
      />
    </div>
  );
};

export default EphemerisDoc;

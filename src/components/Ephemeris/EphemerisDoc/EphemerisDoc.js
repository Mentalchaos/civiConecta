import arrow from 'src/assets/Icons/arrow-degree.svg';
import '../Ephemeris.css';

const EphemerisDoc = ({
  handleEphemerisSelected,
  handleShowPlanning,
  ephemerisData,
}) => {
  const { title, files, description, number, createdAt } = ephemerisData;

  const onHandleShowPlanning = () => {
    handleShowPlanning(true);
    handleEphemerisSelected(ephemerisData);
  };

  const transformedDate = new Date(createdAt).toLocaleDateString('es-CL');

  return (
    <div className="ephemeris-doc-container">
      <div className="doc-texts">
        <p className="doc-event-number">{number}</p>
        <div className="ephemeris-title">{transformedDate} {title}</div>
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

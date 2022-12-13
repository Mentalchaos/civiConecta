import arrow from 'src/assets/Icons/arrow-degree.svg';

const Items = ({ handleSituationSelected, handleShowPlanning, eventData }) => {
  const { number, title, files, date, description } = eventData;
  const onHandleShowPlanning = () => {
    handleShowPlanning(true);
    handleSituationSelected(eventData);
  };

  const transformedDate = new Date(date).toLocaleDateString('es-CL');

  return (
    <div className="items">
      <div className="item-info">
        <p className="info-date"> {transformedDate} </p>
        <div className="text-box">
          <p className="doc-event-number situations">{number}</p>
          <p className="text-box-p1"> {title} </p>
          <p className="text-box-p2"> {files.length} documentos adjuntados. </p>
          <p className="text-box-p3"> OA: {description} </p>
        </div>
      </div>

      <img
        onClick={onHandleShowPlanning}
        src={arrow}
        className="goto-planning"
        alt="arrow icon"
      />
    </div>
  );
};

export default Items;

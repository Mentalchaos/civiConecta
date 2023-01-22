import arrow from 'src/assets/Icons/arrow-degree.svg';

const Items = ({ handleSituationSelected, handleShowPlanning, eventData }) => {
  const { number, title, files, description } = eventData;
  const onHandleShowPlanning = () => {
    handleShowPlanning(true);
    handleSituationSelected(eventData);
  };

  return (
    <div className="items">
      <div className="item-info">
        <div className="text-box">
          <p className="doc-event-number situations">{number}</p>
          <p className="text-box-p1"> {title} </p>
          <p className="text-box-p2"> {files.length} documentos adjuntados. </p>
          <p className="text-box-p3"> Objetivo: {description} </p>
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

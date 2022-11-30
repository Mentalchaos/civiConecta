import arrow from 'src/assets/Icons/arrow-degree.svg';

const Items = ({
  name,
  count,
  date,
  handleSituationSelected,
  handleShowPlanning,
}) => {
  const onHandleShowPlanning = () => {
    handleShowPlanning(true);
    handleSituationSelected({ name, files: [count], date });
  };

  return (
    <div className="items">
      <div className="item-info">
        <p> {date} </p>
        <div className="text-box">
          <p className="text-box-p1"> {name} </p>
          <p className="text-box-p2"> {count} Documentos adjuntos </p>
          <p className="text-box-p3"> OA: </p>
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

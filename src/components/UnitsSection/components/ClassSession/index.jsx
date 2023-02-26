import './ClassSession.css';

const ClassSession = () => {
  // const { files, number, objetives, unit } = item;

  return (
    <div className="class-box">
      <span
        className="class-box__delete"
        onClick={() => deleteClassSelected(number, unit.number)}
      >
        X
      </span>
      <h2 className="class-box__title">Clase {number}</h2>
      <span className="class-box__documents">
        {files.length} Documentos totales en esta clase.
      </span>
      <span>Objetivo: {objetives}</span>

      <div className="box-link">
        <img
          className="box-link"
          onClick={() => handleOpenClass(item)}
          src={arrow}
          alt="Mostrar documentos"
          width="15px"
        />
      </div>
    </div>
  );
};

export default ClassSession;

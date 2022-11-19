import Items from "./Items/index.js";
import "./Items/index.css"
import "./Situations.css";

const Situations = () => {
  const nameDays = [
    { name: "Dia de Civi conecta", date: "02/02", count: 1 },
    { name: "Dia de glorias navales", date: "11/02", count: 4 },
    { name: "Dia del sol", date: "04/02", count: 12 },
    { name: "Dia del completo", date: "10/02", count: 0 },
    { name: "Dia del los gatos", date: "06/02", count: 10 },
    { name: "Dia del wow", date: "24/02", count: 5 },
    { name: "Dia de la luna", date: "14/02", count: 55 }
  ];

  return (
    <main className="main-content">
      <div className="header">
        <div>
          <h1 className="header__title">
            CIVI <span>admin</span>
          </h1>
          <h2>Situaciones emergentes</h2>
        </div>
        <div>
          <select className="select-date">
            <option value="1st-grade"> 1° basico </option>
            <option value="1st-grade"> 2° basico </option>
            <option value="1st-grade"> 3° basico </option>
            <option value="1st-grade"> 4° basico </option>
          </select>
        </div>
      </div>
      <div className="body-content">
        <div className="select-content">
          filtrar item por:
          <select className="select" id="select">
            <option value="name">Nombre</option>
            <option value="date">Fecha</option>
          </select>
        </div>
        <div className="items-content">
          {
            nameDays.map(days =>
              <Items
                name={days.name}
                date={days.date}
                count={days.count}
              />
            )
          };
        </div>
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">&lt;</a>1/1
          <a href="#">&gt;</a>
          <a href="#">&raquo;</a>
        </div>
        <div className="input-content">
          <input
            className="input-text situations-input-text"
            type="text"
            placeholder="Escribir el nombre de la situacion emergente"
          />
          <input
            className="input-date situations-input-date"
            type="text"
            placeholder="dia/mes"
          />
          <input
            className="input-button"
            value="añadir"
            type="submit"
          />
        </div>
      </div>
    </main>
  );
};

export default Situations;
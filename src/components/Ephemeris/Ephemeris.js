import EphemerisDoc from './EphemerisDoc/EphemerisDoc';
import './Ephemeris.css';
import { useState } from 'react';
import Planification from '../Planification/Planification';

const Ephemeris = () => {
  const [showPlanning, setShowPlanning] = useState(false);
  const [ephemerisSelected, setEphemerisSelected] = useState(false);
  const ephemerisDays = [
    {
      name: 'Efemeride 1',
      date: '02/02',
      files: [1],
      detail: 'Detalle OA',
    },
    {
      name: 'Efemeride 2',
      date: '11/02',
      files: [],
      detail: 'Detalle OA',
    },
    { name: 'Efemeride 3', date: '04/02', files: 12, detail: 'Detalle OA' },
    { name: 'Efemeride 4', date: '10/02', files: 0, detail: 'Detalle OA' },
    {
      name: 'Efemeride 5',
      date: '06/02',
      files: [10],
      detail: 'Detalle OA',
    },
    { name: 'Efemeride 6', date: '24/02', files: [5], detail: 'Detalle OA' },
    { name: 'Efemeride 7', date: '14/02', files: [55], detail: 'Detalle OA' },
  ];

  const handleShowPlanning = option => {
    setShowPlanning(option);
  };

  const handleEphemerisSelected = data => {
    setEphemerisSelected(data);
  };

  return (
    <main className="main-content">
      <header className="header">
        <h1 className="header__title">
          CIVI <span>admin</span>
        </h1>
      </header>
      <span className="header__subtitle">Efemérides</span>
      <div className="body-content">
        {showPlanning ? (
          <Planification
            classData={ephemerisSelected}
            setIsSelectedClass={setShowPlanning}
          />
        ) : (
          <div className="ephemeris-container">
            <div className="ephemeris-select-container">
              <div className="ephemeris-select-info">Filtrar items por:</div>
              <select className="ephemeris-select">
                <option value="value1">Nombre</option>
                <option value="value2">Fecha</option>
              </select>
            </div>
            <div className="ephemeris-content">
              {ephemerisDays.map(item => {
                return (
                  <EphemerisDoc
                    onHandleShowPlanning={handleShowPlanning}
                    onHandleEphemerisSelected={handleEphemerisSelected}
                    key={item.name}
                    {...item}
                  />
                );
              })}
            </div>
            <div className="pagination">
              <a href="#">&laquo;</a>
              <a href="#">&lt;</a>1/1
              <a href="#">&gt;</a>
              <a href="#">&raquo;</a>
            </div>
            <div className="ephimeris-tools">
              <input
                className="ephimeris-input"
                placeholder="Escribir el nombre de efeméride"
              ></input>
              <input className="ephimeris-dates" placeholder="Día/Mes"></input>
              <button className="ephimeris-submit">Añadir</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Ephemeris;

import { useState } from 'react';
import arrowDown from 'src/assets/Icons/arrow-down.svg';
import arrow from 'src/assets/Icons/arrow-degree.svg';

import './Unit.css';

const Unit = ({ unitsData, levelSelected }) => {
  const [openClass, setOpenClass] = useState(false);
  const [openUnitSelected, setOpenUnitSelected] = useState(0);
  console.log(levelSelected);

  const units = [
    {
      unitNumber: 1,
      title: 'Primera unidad',
      subtitle: 'Documentos totales en clases',
    },
    {
      unitNumber: 2,
      title: 'Segunda unidad',
      subtitle: 'Documentos totales en clases',
    },
    {
      unitNumber: 3,
      title: 'Tercera unidad',
      subtitle: 'Documentos totales en clases',
    },
    {
      unitNumber: 4,
      title: 'Cuarta unidad',
      subtitle: 'Documentos totales en clases',
    },
  ];

  const handleOpenClass = unitNumber => {
    setOpenUnitSelected(unitNumber);
    setOpenClass(!openClass);
  };

  return (
    <>
      {units.map(unit => {
        const { title, subtitle, unitNumber } = unit;
        return (
          <div key={unitNumber} className="box-container">
            <header className="box__header unit-box">
              <div className="box__header-number">{unitNumber}</div>
              <section>
                <div className="box__header-title">{title}</div>
                <p className="box__header-documents">4 {subtitle}</p>
              </section>
            </header>
            {/* Mapear esta section con data de unidades */}
            <section
              className={
                unitNumber === openUnitSelected && openClass
                  ? 'show-class'
                  : 'class-section'
              }
            >
              <div className="class-box">
                <h2 className="class-box__title">Clase 1</h2>
                <span className="class-box__documents">
                  2 Documentos totales en esta clase.
                </span>
                <span className="class-box__oa">OA: Detalle</span>
                <div className="box-link">
                  <img
                    className="box-link"
                    src={arrow}
                    alt="Mostrar documentos"
                    width="15px"
                  />
                </div>
              </div>
              <div className="class-box">
                <h2 className="class-box__title">Clase 2</h2>
                <span className="class-box__documents">
                  1 Documentos totales en esta clase.
                </span>
                <span className="class-box__oa">OA: Detalle</span>
                <div className="box-link">
                  <img
                    className="box-link"
                    src={arrow}
                    alt="Mostrar documentos"
                    width="15px"
                  />
                </div>
              </div>
              <div className="class-box">
                <h2 className="class-box__title">Clase 3</h2>
                <span className="class-box__documents">
                  0 Documentos totales en esta clase.
                </span>
                <span className="class-box__oa">OA: Detalle</span>
                <div className="box-link">
                  <img
                    className="box-link"
                    src={arrow}
                    alt="Mostrar documentos"
                    width="15px"
                  />
                </div>
              </div>
              <div className="class-box">
                <h2 className="class-box__title">Clase 4</h2>
                <span className="class-box__documents">
                  3 Documentos totales en esta clase.
                </span>
                <span className="class-box__oa">OA: Detalle</span>
                <div className="box-link">
                  <img
                    className="box-link"
                    src={arrow}
                    alt="Mostrar documentos"
                    width="15px"
                  />
                </div>
              </div>
            </section>
            <div className="box-link">
              <img
                className="box-link"
                onClick={() => handleOpenClass(unitNumber)}
                src={
                  unitNumber === openUnitSelected && openClass
                    ? arrowDown
                    : arrow
                }
                alt="Mostrar documentos"
                width="15px"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Unit;

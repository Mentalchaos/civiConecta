import { useState } from 'react';
import Planification from 'src/components/Planification/Planification';
import arrowDown from 'src/assets/Icons/arrow-down.svg';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import './Unit.css';

const Unit = ({ unitsData, levelSelected }) => {
  const [showClass, setShowClass] = useState(false);
  const [classSelected, setClassSelected] = useState(false);
  const [classData, setClassData] = useState({});
  const [openUnitSelected, setOpenUnitSelected] = useState(0);

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
  const classes = [
    {
      files: [1, 3],
      number: 1,
      topic: 'Manejo del estrés',
      startActivity: 'Estudiantes analizan imágenes',
      mainActivity: 'Estudiantes analizan imágenes',
    },
    {
      files: [1, 0, 4, 12],
      number: 2,
      topic: 'Manejo del estrés',
      startActivity: 'Estudiantes analizan imágenes',
      mainActivity: 'Estudiantes analizan imágenes',
    },
    {
      files: [1, 2, 3],
      number: 3,
      topic: 'Manejo del estrés',
      startActivity: 'Estudiantes analizan imágenes',
      mainActivity: 'Estudiantes analizan imágenes',
    },
  ];

  const handleOpenClass = classData => {
    setClassSelected(true);
    setClassData(classData);
  };

  const handleOpenUnit = unitNumber => {
    setOpenUnitSelected(unitNumber);
    setShowClass(!showClass);
    setClassSelected(false);
  };

  return (
    <>
      {units.map(unit => {
        const { title, subtitle, unitNumber } = unit;
        return (
          <div
            key={unitNumber}
            style={{ width: classSelected ? '100%' : '70%' }}
            className="box-container"
          >
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
                unitNumber === openUnitSelected && showClass
                  ? 'show-class'
                  : 'class-section'
              }
            >
              {classSelected ? (
                <Planification
                  classData={classData}
                  setClassSelected={setClassSelected}
                />
              ) : (
                classes.map(item => {
                  const { files, number } = item;
                  return (
                    <div key={number} className="class-box">
                      <h2 className="class-box__title">Clase {number}</h2>
                      <span className="class-box__documents">
                        {files.length} Documentos totales en esta clase.
                      </span>
                      <span className="class-box__oa">OA: Detalle</span>
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
                })
              )}
            </section>
            <div className="box-link">
              <img
                className="box-link"
                onClick={() => handleOpenUnit(unitNumber)}
                src={
                  unitNumber === openUnitSelected && showClass
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

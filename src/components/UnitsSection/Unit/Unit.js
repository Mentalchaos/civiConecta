import { useState } from 'react';
import { getClassesByUnitAndGrade } from 'src/services/admin/classes.request';
import Planification from 'src/components/Planification/Planification';
import Spinner from 'src/components/UI/Spinner';
import arrowDown from 'src/assets/Icons/arrow-down.svg';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import './Unit.css';
import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import PlanningForm from 'src/components/UI/PlanningForm';

const Unit = ({ unitsData, grade }) => {
  const [showClass, setShowClass] = useState(false);
  const [isSelectedClass, setIsSelectedClass] = useState(false);
  const [dataClassSelected, setDataClassSelected] = useState({});
  const [classesList, setClassesList] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [showModalAddClass, setShowModalAddClass] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [unitSelectedNumber, setUnitSelectedNumber] = useState(0);

  const defaultButtonStyle = {
    backgroundColor: 'var(--color-secondary)',
    padding: '5px 20px',
    color: '#fff',
    borderRadius: '20px',
  };

  const handleOpenClass = classData => {
    setDataClassSelected({ ...classData });
    setIsSelectedClass(true);
  };

  const handleOpenUnit = unitNumber => {
    setShowClass(!showClass);
    setFetching(!fetching);
    setUnitSelectedNumber(unitNumber);
    setIsSelectedClass(false);
    getClasses(unitNumber, grade);
  };

  const getClasses = (unitNumber, grade) => {
    setLoadingData(true);
    if (fetching) {
      getClassesByUnitAndGrade(unitNumber, grade).then(resp => {
        try {
          setClassesList(resp.classes);
          setLoadingData(false);
        } catch (error) {
          console.error(error);
          setLoadingData(false);
        }
      });
    }
  };

  return (
    <>
      {showModalAddClass && (
        <Modal
          title="Agregar Clase"
          subtitle={`${grade} Básico - Unidad ${unitSelectedNumber}`}
          style={{ padding: '20px 60px', marginTop: 50, width: '60%' }}
        >
          <PlanningForm
            unit={unitSelectedNumber}
            handleHiddeModal={setShowModalAddClass}
            grade={grade}
            needObjetives={true}
          />
        </Modal>
      )}
      {unitsData ? (
        unitsData.map(unit => {
          const { title, description, number } = unit;
          return (
            <div
              key={number}
              style={{ width: isSelectedClass ? '100%' : '70%' }}
              className="box-container"
            >
              <header className="box__header unit-box">
                <div className="box__header-number">{number}</div>
                <section>
                  <div className="box__header-title">{title}</div>
                  <p className="box__header-documents">{description}</p>
                </section>
              </header>
              <section
                className={
                  number === unitSelectedNumber && showClass
                    ? 'show-class'
                    : 'class-section'
                }
              >
                {loadingData && (
                  <div style={{ textAlign: 'center' }}>
                    <Spinner />
                  </div>
                )}
                {isSelectedClass && (
                  <Planification
                    classData={dataClassSelected}
                    setIsSelectedClass={setIsSelectedClass}
                  />
                )}
                {classesList &&
                  !loadingData &&
                  !isSelectedClass &&
                  classesList.map(item => {
                    const { files, number, objetives } = item;
                    return (
                      <div key={number} className="class-box">
                        <h2 className="class-box__title">Clase {number}</h2>
                        <span className="class-box__documents">
                          {files.length} Documentos totales en esta clase.
                        </span>
                        <span className="class-box__oa">OA: {objetives}</span>
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
                  })}
                {!classesList.length && !loadingData && (
                  <h2
                    style={{ textAlign: 'center', color: 'var(--gray-dark)' }}
                  >
                    Unidad no registra clases.
                  </h2>
                )}
                {showClass && !isSelectedClass && (
                  <div className="add_button-container">
                    <Button
                      onClick={() => setShowModalAddClass(true)}
                      text="Crear clase"
                      customStyles={defaultButtonStyle}
                      disabled={loadingData}
                    />
                  </div>
                )}
              </section>
              <div className="box-link">
                <img
                  className="box-link"
                  onClick={() => handleOpenUnit(number)}
                  src={
                    number === unitSelectedNumber && showClass
                      ? arrowDown
                      : arrow
                  }
                  alt="Mostrar documentos"
                  width="15px"
                />
              </div>
            </div>
          );
        })
      ) : (
        <h1 style={{ textAlign: 'center', color: 'var(--gray-dark)' }}>
          Curso sin registro de unidades.
        </h1>
      )}
    </>
  );
};

export default Unit;

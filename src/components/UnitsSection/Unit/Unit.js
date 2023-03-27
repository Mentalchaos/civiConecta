import { useState } from 'react';
import Planification from 'src/components/Planification/Planification';
import Spinner from 'src/components/UI/Spinner';
import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import PlanningForm from 'src/components/UI/PlanningForm';
import {
  createClass,
  getClassesByUnitAndGrade,
  updateClass,
  deleteClass,
} from 'src/services/admin/classes.request';
import {
  deleteFileByClassUnitAndGrade,
  uploadFileByClassUnitAndGrade,
} from 'src/services/admin/files.request';
import * as unitRequest from 'src/services/admin/units.request';

import arrowDown from 'src/assets/Icons/arrow-down.svg';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import './Unit.css';

const Unit = ({ unitsData, grade, getUnits, reset }) => {
  const [unitId, setUnitId] = useState(null);
  const [showClass, setShowClass] = useState(false);
  const [isSelectedClass, setIsSelectedClass] = useState(false);
  const [dataClassSelected, setDataClassSelected] = useState({});
  const [classesList, setClassesList] = useState([]);
  const [showModalAddClass, setShowModalAddClass] = useState(false);
  const [unitNumber, setUnitNumber] = useState(0);
  const [showConfirmAction, setShowConfirmAction] = useState(false);
  const [fetching, setFetching] = useState(false);
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
    // setFetching(!fetching);
    setUnitSelectedNumber(unitNumber);
    setIsSelectedClass(false);
    !showClass && getClasses(unitNumber);
  };

  const getClasses = unitNumber => {
    setFetching(true);
    getClassesByUnitAndGrade(unitNumber, grade).then(resp => {
      try {
        setClassesList(resp.classes);
        setFetching(false);
      } catch (error) {
        console.error(error);
        setFetching(false);
      }
    });
  };

  const onUpdateClass = (number, unit, grade, formValues) => {
    setFetching(true);
    const {
      topic,
      studentMaterials,
      description,
      teacherMaterials,
      startActivity,
      mainActivity,
      endActivity,
    } = formValues;

    const payload = {
      ...dataClassSelected,
      description,
      planning: {
        startActivity,
        mainActivity,
        endActivity,
        topic,
        materials: {
          teacher: teacherMaterials.toString().trim().split(','),
          student: studentMaterials.toString().trim().split(','),
        },
      },
    };
    updateClass(number, unit, grade, payload).then(resp => {
      if (resp.ok) {
        setFetching(false);
      } else {
        setFetching(false);
        console.error(resp.error);
      }
    });
  };

  const onHandleSubmit = values => {
    const { number, unit } = dataClassSelected;
    onUpdateClass(number, unit.number, grade, values);
  };

  const onHandleAddClass = data => {
    setFetching(true);
    createClass(data).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setShowModalAddClass(false);
        getClasses(unitSelectedNumber);
      } else {
        setFetching(false);
      }
    });
  };

  const handleAddFile = file => {
    setFetching(true);
    const { number, unit } = dataClassSelected;
    uploadFileByClassUnitAndGrade(number, unit.number, grade, file).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setIsSelectedClass(false);
        getClasses(unit.number);
      } else {
        setFetching(false);
        setIsSelectedClass(false);
        getClasses(unit.number);
      }
    });
  };

  const handleDeleteFile = file => {
    setFetching(true);
    const { number, unit } = dataClassSelected;
    deleteFileByClassUnitAndGrade(number, unit.number, grade, file).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setIsSelectedClass(false);
        getClasses(unit.number);
      } else {
        setFetching(false);
        setIsSelectedClass(false);
        getClasses(unit.number);
      }
    });
  };

  const deleteUnit = async (number, grade) => {
    setFetching(true);

    const response = await unitRequest.deleteUnit(unitId);

    if (response.ok) {
      setFetching(false);
      setShowConfirmAction(false);
      getUnits(grade);
      reset();
    } else {
      reset();
      setFetching(false);
    }
  };

  const deleteClassSelected = (number, unitNumber) => {
    setFetching(true);
    deleteClass(number, unitNumber, grade).then(resp => {
      if (resp.ok) {
        setFetching(false);
        getClasses(unitNumber);
      } else {
        setFetching(false);
        getClasses(unitNumber);
      }
    });
  };

  return (
    <>
      {showConfirmAction && (
        <Modal
          title="Eliminar unidad"
          subtitle="Para eliminar la unidad, ésta no debe tener clases asociadas."
          style={{ padding: '20px 40px', marginTop: '20%', width: '35%' }}
        >
          <div
            style={{
              display: 'flex',
              gap: 40,
              justifyContent: 'center',
              marginTop: 30,
            }}
          >
            <Button
              onClick={() => setShowConfirmAction(false)}
              customStyles={defaultButtonStyle}
              text="Cancelar"
              disabled={fetching}
            />
            <Button
              onClick={() => deleteUnit(unitNumber, grade)}
              customStyles={defaultButtonStyle}
              text="Continuar"
              disabled={fetching}
            />
          </div>
        </Modal>
      )}
      {showModalAddClass && (
        <Modal
          title="Agregar Clase"
          subtitle={`${grade} Básico - Unidad ${unitSelectedNumber}`}
          style={{ padding: '20px 60px', marginTop: 50, width: '60%' }}
        >
          <PlanningForm
            type="class"
            unit={unitSelectedNumber}
            handleHiddeModal={setShowModalAddClass}
            handleGetClasses={getClasses}
            onHandleSubmit={onHandleAddClass}
            grade={grade}
            needObjetives={true}
            fetching={fetching}
          />
        </Modal>
      )}
      {unitsData ? (
        unitsData.map(unit => {
          const { title, description, number, id } = unit;

          return (
            <div
              key={number}
              style={{
                width: isSelectedClass ? '100%' : '70%',
                position: 'relative',
              }}
              className="box-container"
            >
              <span
                onClick={() => {
                  setShowConfirmAction(true);
                  setUnitNumber(number);
                  setUnitId(id);
                }}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 8,
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  color: 'var(--color-secondary)',
                  border: '1px solid var(--color-secondary)',
                  padding: '3px 20px',
                  borderRadius: 25,
                  fontSize: 13,
                }}
              >
                Eliminar unidad
              </span>
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
                {fetching && (
                  <div style={{ textAlign: 'center' }}>
                    <Spinner />
                  </div>
                )}
                {isSelectedClass && (
                  <Planification
                    classData={dataClassSelected}
                    setIsSelectedClass={setIsSelectedClass}
                    handleSubmit={onHandleSubmit}
                    onHandleAddFile={handleAddFile}
                    onHandleDeleteFile={handleDeleteFile}
                    grade={grade}
                    fetching={fetching}
                    getClasses={getClasses}
                    isClass={true}
                  />
                )}
                {classesList &&
                  !fetching &&
                  !isSelectedClass &&
                  classesList.map(item => {
                    const { files, number, objetives, unit } = item;
                    return (
                      <div
                        style={{ position: 'relative' }}
                        key={number}
                        className="class-box"
                      >
                        <span
                          onClick={() => deleteClassSelected(number, unit.number)}
                          style={{
                            position: 'absolute',
                            top: 10,
                            right: '10px',
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: 'var(--color-secondary)',
                            cursor: 'pointer',
                          }}
                        >
                          X
                        </span>
                        <h2 className="class-box__title">Clase {number}</h2>
                        <span className="class-box__documents">
                          {files.length} Documentos totales en esta clase.
                        </span>
                        <span className="class-box__oa">Objetivo: {objetives}</span>

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
                {!classesList?.length && !fetching && (
                  <h2 style={{ textAlign: 'center', color: 'var(--gray-dark)' }}>
                    Unidad no registra clases.
                  </h2>
                )}
                {showClass && !isSelectedClass && (
                  <div className="add_button-container">
                    <Button
                      onClick={() => setShowModalAddClass(true)}
                      text="Crear clase"
                      customStyles={defaultButtonStyle}
                      disabled={fetching}
                    />
                  </div>
                )}
              </section>
              <div className="box-link">
                <img
                  className="box-link"
                  onClick={() => handleOpenUnit(number)}
                  src={number === unitSelectedNumber && showClass ? arrowDown : arrow}
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

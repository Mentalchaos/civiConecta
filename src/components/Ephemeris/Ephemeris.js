import { useEffect, useState } from 'react';
import EphemerisDoc from './EphemerisDoc/EphemerisDoc';
import Planification from '../Planification/Planification';
import Modal from '../UI/Modal';
import PlanningForm from '../UI/PlanningForm';
import Button from '../UI/Button';
import Spinner from '../UI/Spinner';
import { getGrades } from 'src/services/admin/grades.request.js';
import { deleteFileByEventAndGrade, uploadFileByEventAndGrade } from 'src/services/admin/files.request';
import { createEvent, getEventsByGrade, updateEvent } from 'src/services/admin/situations.request';

import './Ephemeris.css';

const Ephemeris = () => {
  const [grades, setGrades] = useState([]);
  const [ephemeris, setEphemeris] = useState([]);
  const [showPlanning, setShowPlanning] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [ephemerisSelected, setEphemerisSelected] = useState(false);
  const [gradeSelected, setGradeSelected] = useState('');
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    getGrades().then(resp => {
      if (resp.ok) {
        setFetching(false);
        setGrades(resp.grades);
      }
    });
  }, []);

  const buttonStyles = {
    backgroundColor: 'var(--color-secondary)',
    borderRadius: '20px',
    color: '#fff',
    padding: '5px 30px',
  };

  const handleShowPlanning = option => {
    setShowPlanning(option);
  };

  const getEphemeris = grade => {
    setFetching(true);
    getEventsByGrade(grade).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setEphemeris(resp.events);
      }
    });
  };

  const handleChangeGrade = ({ target }) => {
    setFetching(true);
    setGradeSelected(target.value);
    getEphemeris(target.value);
  };

  const handleEphemerisSelected = data => {
    setEphemerisSelected(data);
  };

  const updateEphemeris = (number, grade, formValues) => {
    setFetching(true);
    const { topic, studentMaterials, description, teacherMaterials, startActivity, mainActivity, endActivity } =
      formValues;

    const payload = {
      ...ephemerisSelected,
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
    updateEvent(number, grade, payload).then(resp => {
      if (resp.ok) {
        setFetching(false);
      } else {
        setFetching(false);
        console.error(resp.error);
      }
    });
  };

  const onHandleUpdateEphemeris = values => {
    updateEphemeris(ephemerisSelected.number, gradeSelected, values);
  };

  const onHandleSubmit = values => {
    setFetching(true);
    const payload = {
      ...values,
    };
    createEvent(payload).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setEphemeris([...ephemeris, resp.event]);
        setShowForm(false);
      }
    });
  };

  const handleAddFile = file => {
    setFetching(true);
    const { number } = ephemerisSelected;
    uploadFileByEventAndGrade(number, gradeSelected, file).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setShowPlanning(false);
        getEphemeris(gradeSelected);
      } else {
        setFetching(false);
        getEphemeris(gradeSelected);
        setShowPlanning(false);
      }
    });
  };

  const handleDeleteFile = file => {
    setFetching(true);
    const { number } = ephemerisSelected;
    deleteFileByEventAndGrade(number, gradeSelected, file).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setShowPlanning(false);
        getEphemeris(gradeSelected);
      } else {
        setFetching(false);
        setShowPlanning(false);
        getEphemeris(gradeSelected);
      }
    });
  };

  const sortedData = array => {
    const sort = array.sort(function (a, b) {
      var c = a.date;
      var d = b.date;
      return c - d;
    });
    return sort;
  };

  return (
    <main className="main-content">
      {showForm && (
        <Modal style={{ padding: '20px 40px', marginTop: 50 }}>
          <PlanningForm
            grade={gradeSelected}
            needObjetives={false}
            handleHiddeModal={setShowForm}
            onHandleSubmit={onHandleSubmit}
            fetching={fetching}
            needDescription={true}
          />
        </Modal>
      )}
      <header className="header">
        <h1 className="header__title">
          CIVI <span>admin</span>
        </h1>
        <div>
          <select
            name="grade"
            className="default-select"
            onChange={handleChangeGrade}
            defaultValue="Seleccione nivel"
            disabled={showPlanning}
          >
            <option disabled>Seleccione nivel</option>
            {grades.map(grade => {
              return (
                <option key={grade.level} value={grade.level}>
                  {grade.level} Basico
                </option>
              );
            })}
          </select>
        </div>
      </header>
      <span className="header__subtitle">Efemérides</span>

      <div className="body-content">
        {fetching && (
          <div style={{ textAlign: 'center' }}>
            <Spinner />
          </div>
        )}
        {showPlanning ? (
          <Planification
            classData={ephemerisSelected}
            setIsSelectedClass={setShowPlanning}
            getClasses={getEphemeris}
            handleSubmit={onHandleUpdateEphemeris}
            onHandleAddFile={handleAddFile}
            onHandleDeleteFile={handleDeleteFile}
            isClass={false}
            fetching={fetching}
          />
        ) : (
          <div className="ephemeris-container">
            {!ephemeris.length && !fetching && <h1 style={{ textAlign: 'center' }}>Sin registro de eventos.</h1>}
            <div className="ephemeris-content">
              {!fetching &&
                sortedData(ephemeris).map(item => {
                  return (
                    <EphemerisDoc
                      key={item.number}
                      handleShowPlanning={handleShowPlanning}
                      handleEphemerisSelected={handleEphemerisSelected}
                      ephemerisData={item}
                    />
                  );
                })}
            </div>
            {ephemeris.length > 0 && !fetching && (
              <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#">&lt;</a>1/1
                <a href="#">&gt;</a>
                <a href="#">&raquo;</a>
              </div>
            )}
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Button
                onClick={() => setShowForm(true)}
                customStyles={buttonStyles}
                text="Crear evento"
                disabled={!gradeSelected || fetching}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Ephemeris;

import { useEffect, useState } from 'react';
import Planification from '../Planification/Planification.js';
import PlanningForm from '../UI/PlanningForm.js';
import Items from './Items/index.js';
import Spinner from '../UI/Spinner.js';
import Button from '../UI/Button.js';
import Modal from '../UI/Modal.js';
import { deleteFileByExceptionAndGrade, uploadFileByExceptionAndGrade } from 'src/services/admin/files.request.js';
import { createException, getExceptionsByGrade, updateException } from 'src/services/admin/ephemeris.request.js';
import { getGrades } from 'src/services/admin/grades.request.js';

import './Items/index.css';
import './Situations.css';

const Situations = () => {
  const [grades, setGrades] = useState([]);
  const [gradeSelected, setGradeSelected] = useState('');
  const [showPlanning, setShowPlanning] = useState(false);
  const [situationSelected, setSituationSelected] = useState({});
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    onGetGrade();
  }, []);

  const buttonStyles = {
    backgroundColor: 'var(--color-secondary)',
    borderRadius: '20px',
    color: '#fff',
    padding: '5px 30px',
  };

  const onGetGrade = () => {
    setFetching(true);
    getGrades().then(resp => {
      if (resp.ok) {
        setFetching(false);
        setGrades(resp.grades);
      }
    });
  };

  const getEvents = grade => {
    setFetching(true);
    getExceptionsByGrade(grade).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setEvents(resp.exceptions);
      }
    });
  };

  const handleChangeGrade = ({ target }) => {
    setFetching(true);
    setGradeSelected(target.value.trim());
    getEvents(target.value);
  };

  const handleShowPlanning = option => {
    setShowPlanning(option);
  };

  const handleSituationSelected = situation => {
    setSituationSelected(situation);
  };

  const onHandleSubmit = values => {
    setFetching(true);
    console.log('values', values);

    const payload = {
      ...values,
    };
    createException(payload).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setEvents([...events, resp.exception]);
        setShowForm(false);
      }
    });
  };

  const updateSituation = (number, grade, formValues) => {
    setFetching(true);
    const { topic, studentMaterials, description, teacherMaterials, startActivity, mainActivity, endActivity, date } =
      formValues;

    const payload = {
      ...situationSelected,
      description,
      date,
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
    updateException(number, grade, payload).then(resp => {
      if (resp.ok) {
        setFetching(false);
      } else {
        setFetching(false);
        console.error(resp.error);
      }
    });
  };

  const onHandleUpdateSituation = values => {
    updateSituation(situationSelected.number, gradeSelected, values);
  };

  const handleAddFile = file => {
    setFetching(true);
    const { number } = situationSelected;
    uploadFileByExceptionAndGrade(number, gradeSelected, file).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setShowPlanning(false);
        getEvents(gradeSelected);
      } else {
        setFetching(false);
        setShowPlanning(false);
        getEvents(gradeSelected);
      }
    });
  };

  const handleDeleteFile = file => {
    setFetching(true);
    const { number } = situationSelected;
    deleteFileByExceptionAndGrade(number, gradeSelected, file).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setShowPlanning(false);
        getEvents(gradeSelected);
      } else {
        setFetching(false);
        setShowPlanning(false);
        getEvents(gradeSelected);
      }
    });
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
      <div className="header">
        <div>
          <h1 className="header__title situation">
            CIVI <span>admin</span>
          </h1>
          <span className="section-title">Situaciones emergentes</span>
        </div>
        <div>
          <select
            name="grade"
            className="default-select"
            onChange={handleChangeGrade}
            defaultValue="Seleccione nivel"
            disabled={showPlanning && !grades?.length}
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
      </div>
      <div className="body-content">
        {fetching && (
          <div style={{ textAlign: 'center' }}>
            <Spinner />
          </div>
        )}
        {showPlanning && (
          <Planification
            classData={situationSelected}
            setIsSelectedClass={setShowPlanning}
            getClasses={getEvents}
            handleSubmit={onHandleUpdateSituation}
            onHandleAddFile={handleAddFile}
            onHandleDeleteFile={handleDeleteFile}
            isClass={false}
            fetching={fetching}
          />
        )}
        {!events?.length && !fetching && <h1 style={{ textAlign: 'center' }}>Sin registro de eventos.</h1>}
        <div className="items-content">
          {!fetching &&
            !showPlanning &&
            events?.map(event => (
              <Items
                key={event.number}
                handleShowPlanning={handleShowPlanning}
                handleSituationSelected={handleSituationSelected}
                eventData={event}
              />
            ))}
        </div>
        {events?.length > 0 && !fetching && !showPlanning && (
          <div className="pagination">
            <a href="#">&laquo;</a>
            <a href="#">&lt;</a>1/1
            <a href="#">&gt;</a>
            <a href="#">&raquo;</a>
          </div>
        )}
        {!showPlanning && (
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <Button
              onClick={() => setShowForm(true)}
              customStyles={buttonStyles}
              text="Crear evento"
              disabled={!gradeSelected || fetching}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Situations;

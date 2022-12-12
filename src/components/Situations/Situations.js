import { useEffect, useState } from 'react';
import Planification from '../Planification/Planification.js';
import PlanningForm from '../UI/PlanningForm.js';
import Items from './Items/index.js';
import Spinner from '../UI/Spinner.js';
import Button from '../UI/Button.js';
import Modal from '../UI/Modal.js';
import {
  createEvent,
  getEventsByGrade,
  updateEvent,
} from 'src/services/admin/situations.request.js';
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

  const getEvents = grade => {
    setFetching(true);
    getEventsByGrade(grade).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setEvents(resp.events);
      }
    });
  };

  const handleChangeGrade = ({ target }) => {
    setFetching(true);
    setGradeSelected(target.value);
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
    const payload = {
      ...values,
      date: new Date().toLocaleString('es-CL').split(',')[0],
    };
    createEvent(payload).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setEvents([...events, resp.event]);
        setShowForm(false);
      }
    });
  };

  const updateSituation = (number, grade, formValues) => {
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
      ...situationSelected,
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

  const onHandleUpdateSituation = values => {
    updateSituation(situationSelected.number, gradeSelected, values);
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
            className="select-date"
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
      </div>
      <div className="body-content">
        {showPlanning ? (
          <Planification
            classData={situationSelected}
            setIsSelectedClass={setShowPlanning}
            getClasses={getEvents}
            handleSubmit={onHandleUpdateSituation}
            isClass={false}
            fetching={fetching}
          />
        ) : (
          <>
            {fetching && (
              <div style={{ textAlign: 'center' }}>
                <Spinner />
              </div>
            )}
            {events.length > 0 && !fetching && (
              <div className="select-content">
                filtrar item por:
                <select className="select" id="select">
                  <option value="name">Nombre</option>
                  <option value="date">Fecha</option>
                </select>
              </div>
            )}
            {!events.length && !fetching && (
              <h1 style={{ textAlign: 'center' }}>Sin registro de eventos.</h1>
            )}
            <div className="items-content">
              {!fetching &&
                events.map(event => (
                  <Items
                    key={event.title}
                    handleShowPlanning={handleShowPlanning}
                    handleSituationSelected={handleSituationSelected}
                    eventData={event}
                  />
                ))}
            </div>
            {events.length > 0 && !fetching && (
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
                disabled={!gradeSelected}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Situations;

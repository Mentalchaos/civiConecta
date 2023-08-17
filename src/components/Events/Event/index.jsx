import React, { Fragment, useContext } from 'react';
import Button from 'src/components/UI/Button';
import Loading from 'src/components/UI/Loading';
import Visible from 'src/components/UI/Visible';
import CreateEventModal from '../components/CreateEventModal';
import { EventContext } from '../context';
import EventItem from '../EventItem';
import DeleteEventModal from '../components/DeleteEventModal';

const styles = {
  createEventButton: {
    backgroundColor: 'var(--color-secondary)',
    borderRadius: '20px',
    color: '#fff',
    padding: '5px 30px',
  },
};

const Event = ({ eventType, onEditEvent }) => {
  const { states, setters, actions } = useContext(EventContext);

  const handleGradeSelected = ({ target }) => {
    const gradeValue = target.value;
    actions.getEvents(gradeValue);
  };

  return (
    <Fragment>
      <div className="select-container">
        <select className="default-select" onChange={handleGradeSelected}>
          <option value={null}>Seleccione nivel</option>
          {states.grades.map(grade => (
            <option key={grade.id} value={grade.id}>
              {grade.level}
            </option>
          ))}
        </select>
      </div>
      <section className="events">
        <div className="events-container" style={{rowGap: '10px', columnGap: '80px'}}>
          <Loading isLoading={states.isFetching}>
            <Visible condition={(states.hasNoEventWhitinGrade && !states.events.length) || !states.events.length}>
              <h1 className="not-events-text">Sin registro de eventos</h1>
            </Visible>
            {actions.sortedEvents(states.events).map(event => (
              <EventItem
                test={event}
                type={eventType}
                key={event.id}
                editEvent={onEditEvent(event.id)}
                id={event.id}
                title={event.title}
                description={event.description}
                date={event.date}
                files={event.files}
              />
            ))}
          </Loading>
        </div>
        <div className="add-event-container">
          <Button
            onClick={() => setters.setOpenModalAddEvent(true)}
            customStyles={styles.createEventButton}
            text="Crear evento"
            disabled={!states.isReadyToCreateEvent}
          />
        </div>
      </section>
      <Visible condition={states.openModalDeleteEvent}>
        <DeleteEventModal />
      </Visible>
      <Visible condition={states.isReadyToCreateEvent && states.openModalAddEvent}>
        <CreateEventModal />
      </Visible>
    </Fragment>
  );
};

export default Event;

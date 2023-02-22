import { Fragment } from 'react';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Categories from '../TeacherSurvey/Categories/Categories';
import studentImage from '../../assets/images/student-image.png';
import Button from 'src/components/UI/Button';
import Question from '../Question/Question';
import Spinner from '../UI/Spinner';
import Modal from '../UI/Modal';
import Visible from '../UI/Visible';
import useStudentSurvey from './hooks/useStudentSurvey';
import './StudentSurvey.css';

const styles = {
  button: {
    padding: '5px 35px',
    backgroundColor: 'var(--color-secondary)',
    color: '#fff',
    borderRadius: 25
  },
  cancelButton: {
    padding: '5px 35px',
    backgroundColor: '#fff',
    border: '1px solid var(--color-secondary)',
    color: 'var(--color-secondary)',
    borderRadius: 25,
  },
  spinnerWrapper: {
    textAlign: 'center',
    display: 'block'
  },
  modal: {
    padding: '20px 40px',
    marginTop: '50px'
  },
  modalInput: { padding: 10 },
  modalParagraph: { color: 'red' }
};

const StudentSurvey = () => {
  const { states, setters, actions } = useStudentSurvey();

  return (
    <Fragment>
      <SectionsHeader image={studentImage} />
      <main className="main-content">
        <div className="header">
          <div>
            <span className="section-title">Encuesta al estudiante</span>
          </div>
        </div>

        <Visible condition={states.isSurveyVisible}>
          <Question
            type="Student"
            title={states.title}
            surveys={states.surveys}
            selectedTopic={states.selectedTopic}
          />
        </Visible>

        <Visible condition={!states.isSurveyVisible}>
          <div className="categories-container">
            <Visible condition={states.fetching}>
              <div style={styles.spinnerWrapper}>
                <Spinner />
              </div>
            </Visible>
            <Visible condition={!states.fetching}>
              {states.topics.map(item => {
                return (
                  <Categories
                    type="student"
                    title={item.title}
                    detail={item.detail}
                    key={`topic-${item.id}`}
                    onclick={() => actions.setTopicAndVisibility(item.number, item.title)}
                  />
                );
              })}
            </Visible>
          </div>
        </Visible>
        <div className="buttons-container-fetch">
          <Visible condition={states.topics.length < 4 && !states.isSurveyVisible}>
            <div className="button-container teacher-survey category-button">
              <button className="add-button" onClick={() => setters.setModal(true)}>
                <p className="add-button-icon">+</p>
                <p className="add-button-text">Añadir Categoría</p>
              </button>
            </div>
          </Visible>

          <Visible condition={!states.isSurveyVisible}>
            <div className="button-container teacher-survey category-button">
              <button className="add-button" onClick={() => setters.setRemoveTopicModal(true)}>
                <p className="add-button-icon">-</p>
                <p className="add-button-text">Eliminar categor&iacute;a</p>
              </button>
            </div>
          </Visible>
        </div>
      </main>

      <Visible condition={states.showModal}>
        <Modal style={styles.modal}>
          <div>
            <p>Ingrese el nombre de la categoría que desea crear</p>
            <input
              autoFocus={true}
              style={styles.modalInput}
              className="modal-input"
              value={states.topic}
              onChange={e => setters.setTopic(e.target.value)}
            />
            <div className="buttons-inputs">
              <Button
                text="Crear"
                customStyles={styles.button}
                onClick={() => actions.createCategory()}
              />
              <Button
                text="Cerrar"
                customStyles={styles.cancelButton}
                onClick={() => setters.setModal(false)}
              />
            </div>
          </div>
        </Modal>
      </Visible>

      <Visible condition={states.removeTopicModal}>
        <Modal style={styles.modal}>
          <div>
            <p>
              Seleccione la categoría que desea eliminar
            </p>
            <p style={styles.modalParagraph}>
              Para eliminar una categoria, ésta no debe tener preguntas asociadas.
            </p>
            <select
              name="select"
              className="remove-topic-select"
              onChange={e => setters.setSelectValue(e.target.value)}
            >
              <option value="null">Seleccionar</option>
              {states.topics.map(data => (
                <option key={data.number} value={data.number}>
                  {data.title}
                </option>
              ))}
            </select>
            <div className="buttons-inputs">
              <Button
                customStyles={styles.button}
                text="Eliminar"
                disabled={!states.selectValue}
                onClick={() => actions.removeCategory()}
              />
              <Button
                text="Cerrar"
                customStyles={styles.cancelButton}
                onClick={() => setters.setRemoveTopicModal(false)}
              />
            </div>
          </div>
        </Modal>
      </Visible>
    </Fragment >
  );
};

export default StudentSurvey;

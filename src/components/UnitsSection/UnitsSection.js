import { Fragment } from 'react';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Spinner from '../UI/Spinner';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import Unit from './Unit/Unit';
import Visible from 'src/components/UI/Visible';
import useForm from 'src/hooks/useForm';
import useUnitsSection from './hooks/useUnitsSection';
import headerImage from '../../assets/images/background-units.png';
import './UnitsSection.css';

const styles = {
  button: {
    backgroundColor: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 30px',
    borderRadius: '20px',
  },
  buttonCancel: {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    padding: '5px 30px',
    border: '1px solid var(--color-secondary)',
    borderRadius: '20px',
  },
  modal: {
    padding: '30px 60px',
    width: '450px'
  },
  noUnits: {
    color: 'var(--gray-dark)',
    textAlign: 'center',
    marginTop: 80,
  },
  createUnitWrapper: {
    textAlign: 'right',
    marginTop: 10,
    width: '85%'
  },
  selectGradeInfo: {
    color: 'var(--gray-dark',
    textAlign: 'center',
    marginTop: '5rem',
  },
  loadingWrapper: {
    textAlign: 'center',
    marginTop: 50
  }
};

const UnitsSection = () => {
  const { states, setters, actions } = useUnitsSection();
  const { values, handleInputChange, reset } = useForm({
    number: 0,
    title: '',
    description: '',
  });

  const handleAddUnit = e => {
    e.preventDefault();
    const { number, title, description } = values;
    const payload = {
      number,
      title,
      description,
      grade: states.gradeSelected
    };
    actions.createUnit(payload);
  };

  const handleLevelSelected = ({ target }) => {
    const value = target.value;
    setters.setGradeSelected(value);
    actions.getUnits(value);
  };

  return (
    <Fragment>
      <Visible condition={states.openModalAddUnit}>
        {() => (
          <Modal style={styles.modal} title={`Agregar unidad a ${states.gradeToShow.level}`}>
            <form className="form_add-units" onSubmit={handleAddUnit}>
              <Visible condition={states.error}>
                <div>
                  <p>{states.error}</p>
                </div>
              </Visible>
              <div className="form-group">
                <label>Número unidad:</label>
                <input
                  onChange={handleInputChange}
                  value={values.number}
                  name="number"
                  type="number"
                  autoFocus={true}
                />
              </div>
              <div className="form-group">
                <label>Título:</label>
                <input
                  onChange={handleInputChange}
                  value={values.title}
                  name="title"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Descripción:</label>
                <input
                  onChange={handleInputChange}
                  value={values.description}
                  name="description"
                  type="text"
                />
              </div>
              <div className="actions-container">
                <Button
                  onClick={() => setters.setOpenModalAddUnit(false)}
                  customStyles={styles.buttonCancel}
                  text="Cancelar"
                  disabled={states.isLoading}
                />
                <Button
                  onClick={handleAddUnit}
                  customStyles={styles.button}
                  text="Continuar"
                  disabled={states.isLoading}
                />
              </div>
            </form>
          </Modal>
        )}
      </Visible>

      <SectionsHeader image={headerImage} subtitle="Unidades" />
      <main className="main-content">
        <header className="content__header">
          <div>
            <p className="header-text">Unidades</p>
            <h2 className="header-title">Lista de unidades</h2>
          </div>
          <select
            className="default-select"
            defaultValue={'Nivel'}
            onChange={handleLevelSelected}
          >
            <option disabled>Nivel</option>
            {states.grades.map(grade => (
              <option key={grade.id} value={grade.id}>{grade.level}</option>
            ))}
          </select>
        </header>
        <Visible condition={states.isLoading}>
          <div style={styles.loadingWrapper}>
            <Spinner />
          </div>
        </Visible>

        <Visible condition={states.unitsWithinGrade}>
          <div className="content-units">
            <Unit
              getUnits={actions.getUnits}
              unitsData={states.units}
              reset={reset}
              grade={states.gradeSelected}
            />
          </div>
        </Visible>

        <Visible condition={states.hasNoUnitsWithinGrade}>
          <h2 style={styles.noUnits}>
            No hay unidades creadas para el curso.
          </h2>
        </Visible>

        <Visible condition={states.createUnitReady}>
          <div style={styles.createUnitWrapper}>
            <Button
              onClick={() => setters.setOpenModalAddUnit(true)}
              customStyles={styles.button}
              text="Agregar unidad"
            />
          </div>
        </Visible>

        <Visible condition={states.initialState}>
          <h2 style={styles.selectGradeInfo}>
            Selecciona el curso para ver sus unidades.
          </h2>
        </Visible>
      </main>
    </Fragment>
  );
};

export default UnitsSection;

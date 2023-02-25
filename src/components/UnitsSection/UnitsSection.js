import { Fragment } from 'react';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Spinner from '../UI/Spinner';
import Button from '../UI/Button';
import Visible from 'src/components/UI/Visible';
import ModalAddUnit from './components/ModalAddUnit';
import ModalDeleteUnit from './components/ModalDeleteUnit';
import UnitShowcase from './components/UnitShowcase';
import useUnitsSection from './hooks/useUnitsSection';
import headerImage from '../../assets/images/background-units.png';
import { UnitContext } from './context';
import './UnitsSection.css';

const UnitsSection = () => {
  const { states, setters, actions } = useUnitsSection();

  const handleLevelSelected = ({ target }) => {
    const value = target.value;
    setters.setGradeSelected(value);
    actions.getUnits(value);
  };

  return (
    <Fragment>
      <UnitContext.Provider value={{ states, setters, actions }}>
        <SectionsHeader image={headerImage} subtitle="Unidades" />
        <main className="main-content">
          <header className="content__header">
            <div>
              <p className="header-text">Unidades</p>
              <h2 className="header-title">Lista de unidades</h2>
            </div>
            <select
              className="default-select"
              defaultValue="Nivel"
              onChange={handleLevelSelected}
            >
              <option disabled>Nivel</option>
              {states.grades.map(grade => (
                <option key={grade.id} value={grade.id}>{grade.level}</option>
              ))}
            </select>
          </header>
          <Visible condition={states.isLoading}>
            <div className="loading-wrapper">
              <Spinner />
            </div>
          </Visible>

          <Visible condition={states.unitsWithinGrade}>
            <div className="content-units">
              {states.units.map(u => {
                return (
                  <UnitShowcase
                    key={u.id}
                    id={u.id}
                    number={u.number}
                    title={u.title}
                    description={u.description}
                  />
                );
              })}
            </div>
          </Visible>

          <Visible condition={states.hasNoUnitsWithinGrade}>
            <h2 className="no-units">
              No hay unidades creadas para el curso.
            </h2>
          </Visible>

          <Visible condition={states.createUnitReady}>
            <div className="create-unit-wrapper">
              <Button
                onClick={() => setters.setOpenModalAddUnit(true)}
                customClasses="custom-button"
                text="Agregar unidad"
              />
            </div>
          </Visible>

          <Visible condition={states.initialState}>
            <h2 className="select-grade-info">
              Selecciona el curso para ver sus unidades.
            </h2>
          </Visible>
        </main>
        <Visible condition={states.openModalAddUnit}>
          {() => <ModalAddUnit />}
        </Visible>
        <Visible condition={states.openModalDeleteUnit}>
          {() => <ModalDeleteUnit />}
        </Visible>
      </UnitContext.Provider>
    </Fragment>
  );
};

export default UnitsSection;

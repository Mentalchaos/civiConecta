import UnitLayout from 'src/Layouts/UnitLayout';
import UnitSectionHeader from './components/UnitSectionHeader';
import Spinner from '../UI/Spinner';
import Button from '../UI/Button';
import Visible from 'src/components/UI/Visible';
import ModalAddUnit from './components/Modals/ModalAddUnit';
import ModalDeleteUnit from './components/Modals/ModalDeleteUnit';
import UnitShowcase from './components/UnitShowcase';
import useUnitsSection from './hooks/useUnitsSection';
import { UnitContext } from './context';
import './UnitsSection.css';

const UnitsSection = () => {
  const { states, setters, actions } = useUnitsSection();

  const handleLevelSelected = ({ target }) => {
    const value = target.value;
    actions.getUnits(value);
  };

  return (
    <UnitContext.Provider value={{ states, setters, actions }}>
      <UnitLayout>
        <UnitSectionHeader onChange={handleLevelSelected} />
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
        {/* <Visible condition={states.createUnitReady}>
          <div className="create-unit-wrapper">
            <Button
              onClick={() => setters.setOpenModalAddUnit(true)}
              customClasses="custom-button"
              text="Agregar unidad"
            />
          </div>
        </Visible> */}
        <Visible condition={states.initialState}>
          <h2 className="select-grade-info">
            Selecciona el curso para ver sus unidades.
          </h2>
        </Visible>
        <Visible condition={states.openModalAddUnit}>
          {() => <ModalAddUnit />}
        </Visible>
        <Visible condition={states.openModalDeleteUnit}>
          {() => <ModalDeleteUnit />}
        </Visible>
      </UnitLayout>
    </UnitContext.Provider>
  );
};

export default UnitsSection;

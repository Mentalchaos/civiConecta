import { useParams } from 'react-router-dom';
import UnitLayout from 'src/Layouts/UnitLayout';
import Loading from 'src/components/UI/Loading';
import Visible from 'src/components/UI/Visible';
import Button from 'src/components/UI/Button';
import UnitWrapper from './components/UnitWrapper';
import UnitHeader from './components/UnitHeader';
import Lesson from './components/Lesson';
import ModalAddLesson from './components/Modals/ModalAddLesson';
import useUnitManager from './hooks/useUnitManager';
import { UnitManagerContext } from './context';
import './UnitManager.css';

const UnitManager = () => {
  const { unitId } = useParams();
  const { states, setters, actions } = useUnitManager(unitId);

  return (
    <UnitManagerContext.Provider value={{ states, setters, actions }}>
      <UnitLayout>
        <UnitWrapper customClass="w100">
          <Loading isLoading={states.isLoading}>
            <UnitHeader
              number={states.unit.number}
              title={states.unit.title}
              description={states.unit.description}
            />
          </Loading>
        </UnitWrapper>
        <Visible condition={!states.unit.lessons.length}>
          <h2 className="no-classes">
            Unidad no registra clases.
          </h2>
        </Visible>
        <Visible condition={states.unit.lessons.length}>
          {states.unit.lessons.map((lesson) => (
            <Lesson
              key={lesson.id}
              id={lesson.id}
              number={lesson.number}
              files={lesson.files}
              objective={lesson.objective}
            />
          ))}
        </Visible>
        <div className="add_button-container">
          <Button
            className="custom-button"
            onClick={setters.openModalAddLesson}
            disabled={states.isLoading}
          >
            Crear clase
          </Button>
        </div>
        <Visible condition={states.modalAddOpened}>
          <ModalAddLesson />
        </Visible>
      </UnitLayout>
    </UnitManagerContext.Provider>
  );
};

export default UnitManager;

import background from 'src/assets/images/manager-header.png';
import SectionsHeader from 'src/components/SectionsHeader/SectionsHeader';
import { ManagerContext } from './context';
import Stage from './Stage/Stage';
import useManager from './useManager';
import './Manager.css';

const Manager = () => {
  const { states, setters, actions } = useManager();

  return (
    <ManagerContext.Provider value={{ states, setters, actions }}>
      <SectionsHeader image={background} subtitle={states.headerSubtitle} />
      <main className="manager-content">
        <Stage currentStage={states.stage} />
      </main>
    </ManagerContext.Provider>
  );
};

export default Manager;

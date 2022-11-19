import SectionsHeader from '../SectionsHeader/SectionsHeader';
import headerImage from '../../assets/images/background-units.png';
import './UnitsSection.css';

const UnitsSection = () => {
  return (
    <>
      <SectionsHeader image={headerImage} subtitle="Unidades" />
      <main className="main-content">
        <h1>contenido</h1>
      </main>
    </>
  );
};

export default UnitsSection;

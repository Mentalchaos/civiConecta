import { useState } from 'react';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import headerImage from '../../assets/images/background-units.png';
import Unit from './Unit/Unit';
import './UnitsSection.css';

const UnitsSection = () => {
  const [levelSelected, setLevelSelected] = useState('');
  const [unitSelected, setUnitSelected] = useState({});
  const levels = ['5° Básico'];

  return (
    <>
      <SectionsHeader image={headerImage} subtitle="Unidades" />
      <main className="main-content">
        <header className="content__header">
          <div>
            <p className="header-text">Unidades</p>
            <h2 className="header-title">Lista de unidades</h2>
          </div>
          <select
            className="select__level-units"
            defaultValue={'Nivel'}
            onChange={e => setLevelSelected(e.target.value)}
          >
            <option disabled>Nivel</option>
            {levels.map(level => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </header>
        {levelSelected ? (
          <div className="content-units">
            <Unit levelSelected={levelSelected} />
          </div>
        ) : (
          <h1
            style={{
              textAlign: 'center',
              marginTop: 80,
              color: 'var(--gray-dark)',
            }}
          >
            Selecciona el nivel para ver las unidades.
          </h1>
        )}
      </main>
    </>
  );
};

export default UnitsSection;

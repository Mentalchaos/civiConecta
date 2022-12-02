import { useState } from 'react';
import { getUnitsByGrade } from 'src/services/admin/units.request';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Spinner from '../UI/Spinner';
import Unit from './Unit/Unit';
import headerImage from '../../assets/images/background-units.png';
import './UnitsSection.css';

const UnitsSection = () => {
  const [units, setUnits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gradeSelected, setGradeSelected] = useState('');
  const level = '5º Básico';
  const levels = ['5º Básico'];

  const handleLevelSelected = ({ target }) => {
    setIsLoading(true);
    const value = target.value;
    const grade = value.split(' ')[0];
    setGradeSelected(grade);
    getUnitsByGrade(grade).then(resp => {
      try {
        setUnits(resp.units);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    });
  };

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
            onChange={handleLevelSelected}
          >
            <option disabled>Nivel</option>
            {levels.map(level => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </header>
        {isLoading && (
          <div style={{ textAlign: 'center', marginTop: 50 }}>
            <Spinner />
          </div>
        )}
        {!isLoading && units && (
          <div className="content-units">
            <Unit unitsData={units} grade={gradeSelected} />
          </div>
        )}
        {!units.length && !isLoading && (
          <h2
            style={{
              color: 'var(--gray-dark',
              textAlign: 'center',
              marginTop: '5rem',
            }}
          >
            Selecciona el curso para ver sus unidades.
          </h2>
        )}
      </main>
    </>
  );
};

export default UnitsSection;

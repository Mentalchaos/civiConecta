import { useContext } from 'react';
import PropTypes from 'prop-types';
import { UnitContext } from '../context';

const UnitSectionHeader = ({ onChange }) => {
  const { states } = useContext(UnitContext);

  return (
    <header className="content__header">
      <div>
        <p className="header-text">Unidades</p>
        <h2 className="header-title">Lista de unidades</h2>
      </div>
      <select
        className="default-select"
        defaultValue="Nivel"
        onChange={onChange}
      >
        <option disabled>Nivel</option>
        {states.grades.map(grade => (
          <option key={grade.id} value={grade.id}>{grade.level}</option>
        ))}
      </select>
    </header>
  );
};

UnitSectionHeader.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default UnitSectionHeader;

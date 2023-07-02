import './Class.css';
import UnitClass from './UnitClass';

const ClassMapping = ({ unitsData = [] }) => {

  const units =
    unitsData.length > 0 ? unitsData.map(data =>
      <UnitClass
        key={data.id}
        number={data.number}
        id={data.id}
        objective={data.objective}
        description={data.description}
      />) : <p>No hay unidades asignadas</p>;

  return (
    <div className="classes">
      { units }
    </div>
  )
}

ClassMapping.displayName = ClassMapping;

export default ClassMapping;

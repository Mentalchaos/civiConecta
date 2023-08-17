import { Fragment, useContext } from 'react';
import { PlanificationContext } from '../context';
import './Header.css';

const UnitNumber = () => {
  const { states } = useContext(PlanificationContext);
  const { number, title } = states.unit;

  return <div className='unit-name'>{`Unidad: ${number} - ${title}`}</div>;
};

UnitNumber.displayName = 'UnitNumber';

export default UnitNumber;

import { Fragment, useContext } from 'react';
import { PlanificationContext } from '../context';

const UnitNumber = () => {
  const { states } = useContext(PlanificationContext);
  const { number, title } = states.unit;

  return <div>{`Unidad: ${number} - ${title}`}</div>;
};

UnitNumber.displayName = 'UnitNumber';

export default UnitNumber;

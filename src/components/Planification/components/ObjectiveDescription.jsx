import { Fragment, useContext } from 'react';
import { PlanificationContext } from '../context';

const ObjectiveDescription = () => {
  const { states, setters } = useContext(PlanificationContext);

  return (
    <Fragment>
      <input
        className="planning__oa-detail"
        name="objective"
        value={states.description}
        type="text"
        placeholder="Detalle Objetivo"
        onChange={setters.changeField('description')}
      />
    </Fragment>
  );
};

export default ObjectiveDescription;

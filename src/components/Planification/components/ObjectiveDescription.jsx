import { Fragment, useContext } from 'react';
import { PlanificationContext } from '../context';

const ObjectiveDescription = () => {
  const { states } = useContext(PlanificationContext);

  return (
    <Fragment>
      <input
        className="planning__oa-detail"
        name="objective"
        defaultValue={states.lesson.objective}
        type="text"
        placeholder="Detalle Objetivo"
      />
    </Fragment>
  );
};

export default ObjectiveDescription;

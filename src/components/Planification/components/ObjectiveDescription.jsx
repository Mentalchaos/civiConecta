import { Fragment, useContext } from 'react';
import { PlanificationContext } from '../context';

const ObjectiveDescription = () => {
  const { states, setters } = useContext(PlanificationContext);

  return (
    <Fragment>
      <input
        className="planning__oa-detail"
        name="description"
        value={states.description}
        type="text"
        placeholder="Descripcion"
        onChange={setters.changeField('description')}
      />
    </Fragment>
  );
};

export default ObjectiveDescription;

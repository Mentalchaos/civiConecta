import React, { Fragment, useContext } from 'react';
import Visible from 'src/components/UI/Visible';
import StageAssignment from '../StageAssignment/StageAssignment';
import StageDetail from '../StageDetail/StageDetail';
import StageManager from '../StageManager/StageManager';
import { ManagerContext } from '../context';

const Stage = () => {
  const { states } = useContext(ManagerContext);
  return (
    <Fragment>
      <Visible condition={states.stage === 1}>
        <StageManager />
      </Visible>
      <Visible condition={states.stage === 2}>
        <StageAssignment establishmentSelected={states.isEstablishmentSelected} />
      </Visible>
      <Visible condition={states.stage === 3}>
        <StageDetail />
      </Visible>
    </Fragment>
  );
};

export default Stage;

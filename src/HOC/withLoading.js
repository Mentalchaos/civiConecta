import { useEffect } from 'react';
import Visible from 'src/components/UI/Spinner';

const withLoading = ({ isLoading, children }) => () => {


  <Visible condition={states.fetching}>
    <div className="spinner-wrapper">
      <Spinner />
    </div>
  </Visible>
};

export default withLoading;

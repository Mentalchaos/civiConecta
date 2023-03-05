import Spinner from './Spinner';

const styles = {
  textAlign: 'center',
  display: 'block'
};

const Loading = ({ isLoading, children }) => {
  if (isLoading) {
    return <div style={styles}><Spinner /></div>;
  }

  return typeof children === 'function' ? children() : children;
};

export default Loading;

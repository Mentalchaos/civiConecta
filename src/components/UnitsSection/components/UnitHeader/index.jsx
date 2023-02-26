import PropTypes from 'prop-types';
import './UnitHeader.css';

const UnitHeader = ({ number, title, description }) => {
  return (
    <header className="box__header unit-box">
      <div className="box__header-number">{number}</div>
      <section>
        <div className="box__header-title">{title}</div>
        <p className="box__header-documents">{description}</p>
      </section>
    </header>
  );
};

UnitHeader.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string
};

UnitHeader.defaultProps = {
  number: 0,
  title: '',
  description: ''
};

export default UnitHeader;

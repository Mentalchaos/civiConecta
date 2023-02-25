import { useContext } from 'react';
import PropTypes from 'prop-types';
import { UnitContext } from '../../context';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import './UnitShowcase.css';

const UnitShowcase = ({ id, number, title, description }) => {
  const { setters } = useContext(UnitContext);

  const handleDeleteUnit = () => {
    setters.setUnitSelected(id);
    setters.setOpenModalDeleteUnit(true);
  };

  return (
    <div className="box-container">
      <span className="delete-unit-button" onClick={handleDeleteUnit}>Eliminar unidad</span>
      <header className="box__header unit-box">
        <div className="box__header-number">{number}</div>
        <section>
          <div className="box__header-title">{title}</div>
          <p className="box__header-documents">{description}</p>
        </section>
      </header>
      <div className="box-link">
        <img
          className="box-link"
          src={arrow}
          width="15px"
        />
      </div>
    </div>
  );
};

UnitShowcase.propTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default UnitShowcase;

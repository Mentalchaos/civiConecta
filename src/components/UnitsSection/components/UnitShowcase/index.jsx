import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import UnitWrapper from '../UnitWrapper';
import UnitHeader from '../UnitHeader';
import { UnitContext } from '../../context';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import './UnitShowcase.css';

const UnitShowcase = ({ id, number, title, description }) => {
  const { setters } = useContext(UnitContext);
  const navigate = useNavigate();

  const handleDeleteUnit = () => {
    setters.setUnitSelected(id);
    setters.setOpenModalDeleteUnit(true);
  };

  const handleEditUnit = () => {
    navigate(`${id}`);
  };

  return (
    <UnitWrapper customClass="w70">
      <span className="delete-unit-button" onClick={handleDeleteUnit}>
        Eliminar unidad
      </span>
      <UnitHeader number={number} title={title} description={description} />
      <div className="box-link" onClick={handleEditUnit}>
        <img
          className="box-link"
          src={arrow}
          width="15px"
        />
      </div>
    </UnitWrapper>
  );
};

UnitShowcase.propTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default UnitShowcase;

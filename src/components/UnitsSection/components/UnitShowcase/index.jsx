import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import UnitWrapper from '../UnitWrapper';
import UnitHeader from '../UnitHeader';
import { UnitContext } from '../../context';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import './UnitShowcase.css';
import EditUnitModal from '../EditUnitModal/EditUnitModal';

const UnitShowcase = ({ id, number, title, description }) => {
  const { setters } = useContext(UnitContext);
  const [showEditUnitModal, setShowEditUnitModal] = useState(false);
  const navigate = useNavigate();

  const handleDeleteUnit = () => {
    setters.setUnitSelected(id);
    setters.setOpenModalDeleteUnit(true);
  };

  const handleEditUnit = () => {
    navigate(`${id}`);
  };

  const isEditModalShown = showEditUnitModal && 
    <EditUnitModal
      showEditUnitModal={showEditUnitModal}
      setShowEditUnitModal={setShowEditUnitModal}
    />

  return (
    <UnitWrapper customClass="w70">
      <UnitHeader number={number} title={title} description={description} />
      <div className='unit-buttons-container'>
        <span className="delete-unit-button" onClick={handleDeleteUnit}>
          Eliminar unidad
        </span>
        <button className='edit-unit-button' onClick={() => setShowEditUnitModal(true)}>Editar</button>
        {isEditModalShown}
      </div>
      <div className="box-link unit-link" onClick={handleEditUnit}>
        <img
          className="box-link"
          src={arrow}
          width="15px"
          alt='arrow-icon'
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

import Modal from 'src/components/UI/Modal';

import './EditUnitModal.css';

const EditUnitModal = ({ setShowEditUnitModal }) => {
  return (
    <Modal>
      <div className='edit-unit-modal'>
        <div className='close-edit-unit'>
          <button onClick={() => setShowEditUnitModal(false)}>X</button>
        </div>
        <form className='edit-unit-form-container'>
          <div className='edit-unit-form'>
            <label>Título</label>
            <input type='text' />
          </div>
          <div className='edit-unit-form'>
            <label>Descripción</label>
            <input className='edit-description-input' type='text' />
          </div>
        </form>
        <div className='edit-unit-buttons-container'>
          <button className='save-button-modal'>Guardar</button>
          <button onClick={() => setShowEditUnitModal(false)} className='cancel-button-modal'>Cancelar</button>
        </div>
      </div>
    </Modal>
  )
}

export default EditUnitModal;
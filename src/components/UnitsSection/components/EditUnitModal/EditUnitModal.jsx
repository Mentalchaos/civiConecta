import { useState } from 'react';
import http from 'src/services/helpers/http.helper';
import config from 'src/config';
import Modal from 'src/components/UI/Modal';

import './EditUnitModal.css';

const EditUnitModal = ({ setShowEditUnitModal, id }) => {
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');

  const saveChanges = async () => {
    const payload = {"title": title, "description": description};
    await http.put(`${config.baseURL}/units/${id}`, payload);
    await alert('Los cambios han sido guardados');
    await window.location.reload();
  }

  return (
    <Modal>
      <div className='edit-unit-modal'>
        <div className='close-edit-unit'>
          <button onClick={() => setShowEditUnitModal(false)}>X</button>
        </div>
        <form className='edit-unit-form-container'>
          <div className='edit-unit-form'>
            <label>Título</label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className='edit-unit-form'>
            <label>Descripción</label>
            <input className='edit-description-input' type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        </form>
        <div className='edit-unit-buttons-container'>
          <button className='save-button-modal' onClick={() => saveChanges()}>Guardar</button>
          <button onClick={() => setShowEditUnitModal(false)} className='cancel-button-modal'>Cancelar</button>
        </div>
      </div>
    </Modal>
  )
}

export default EditUnitModal;
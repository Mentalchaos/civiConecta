import Modal from 'src/components/UI/Modal';
import './editModal.css';
import * as lessonRequest from 'src/services/admin/files.request.js';

const EditModal = ({ setShowEditModal, name, filepath, setName, setFilepath, lessonId, fileId }) => {
  const onSendEdit = async () => {
    const payload = {
      filename: name,
      filepath: filepath
    }
    await lessonRequest.editDocumentByLessonId(lessonId, fileId, payload);
    window.location.reload();
  }

  return (
    <Modal>
      <div className='file-uploader-modal'>
        <div className='close-modal-button'>
          <button onClick={() => setShowEditModal(false)}>X</button>
        </div>
        <form className='uploader-form'>
          <div className='uploader-form-container'>
            <label className='uploader-form-label'>
              Nombre
            </label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='uploader-form-container'>
            <label className='uploader-form-label'>
              Url
            </label>
            <input
              name="url"
              type="text"
              value={filepath}
              onChange={e => setFilepath(e.target.value)}
            />
          </div>
        </form>
        <div className='uploader-buttons-container'>
          <button
            className={`upload-button`}
            type='submit'
            onClick={onSendEdit}
          >
            Modificar
          </button>
          <button className='cancel-button' onClick={() => setShowEditModal(false)}>Cancelar</button>
        </div>
      </div>
    </Modal>
  )
};

EditModal.displayName = 'EditModal';

export default EditModal;

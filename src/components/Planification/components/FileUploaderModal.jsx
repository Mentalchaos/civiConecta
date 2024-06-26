import Modal from 'src/components/UI/Modal';
import './fileUploaderModal.css';

const FileUploaderModal = ({ setShowModal, uploadDocument, setters, states }) => {

  const disabled = !states.name.length || !states.filepath.length;
  const disabledStyles = disabled ? 'disabledStyles' : '';

  const onUploading = async () => {
    await uploadDocument();
    window.location.reload();
  }

  return (
    <Modal>
      <div className='file-uploader-modal'>
        <div className='close-modal-button'>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <form className='uploader-form'>
          <div className='uploader-form-container'>
            <label className='uploader-form-label'>
              Nombre
            </label>
            <input
              name="name"
              type="text"
              value={states.name}
              onChange={(e) => setters.setName(e.target.value)}
            />
          </div>
          <div className='uploader-form-container'>
            <label className='uploader-form-label'>
              Url
            </label>
            <input
              name="url"
              type="text"
              value={states.filepath}
              onChange={(e) => setters.setFilepath(e.target.value)}
            />
          </div>
        </form>
        <div className='uploader-buttons-container'>
          <button
            className={`upload-button ${disabledStyles}`}
            type='submit'
            onClick={onUploading}
            disabled={disabled}
          >
            Subir archivo
          </button>
          <button className='cancel-button' onClick={() => setShowModal(false)}>Cancelar</button>
        </div>
      </div>
    </Modal>
  )
};

FileUploaderModal.displayName = 'FileUploaderModal';

export default FileUploaderModal;

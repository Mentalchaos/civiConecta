import Modal from 'src/components/UI/Modal';
import './fileUploaderModal.css';

const FileUploaderModal = ({setShowModal}) => {
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
            />
          </div>
          <div className='uploader-form-container'>
            <label className='uploader-form-label'>
              Url
            </label>
            <input
              name="url"
              type="text"
            />
          </div>
        </form>
        <div className='uploader-buttons-container'>
          <button className='upload-button' type='submit'>Subir archivo</button>
          <button className='cancel-button' onClick={() => setShowModal(false)}>Cancelar</button>
        </div>
      </div>
    </Modal>
  )
};

FileUploaderModal.displayName = 'FileUploaderModal';

export default FileUploaderModal;

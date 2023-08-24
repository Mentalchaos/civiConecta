import { useContext, useRef, useState } from 'react';
import { PlanificationContext } from '../context';
import FileUploaderModal from './FileUploaderModal';

const FileUploader = () => {
  const { states, actions, setters } = useContext(PlanificationContext);
  const [showModal, setShowModal] = useState(false);
  const isModalShown = showModal && <FileUploaderModal states={states} setters={setters} uploadDocument={actions.uploadDocument} setShowModal={setShowModal} />;

  return (
    <div className="file-upload">
      <button onClick={() => setShowModal(true)}>Subir archivo</button>
      { isModalShown }
    </div>
  );
};

export default FileUploader;

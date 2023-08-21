import { useContext, useRef, useState } from 'react';
import { PlanificationContext } from '../context';
import FileUploaderModal from './FileUploaderModal';

const FileUploader = () => {
  const { states } = useContext(PlanificationContext);
  const [showModal, setShowModal] = useState(false);
  const isModalShown = showModal && <FileUploaderModal />;
  console.log('states EAA', states);

  return (
    <div className="file-upload">
      <button onClick={() => setShowModal(true)}>Subir archivo</button>
      { isModalShown }
    </div>
  );
};

export default FileUploader;

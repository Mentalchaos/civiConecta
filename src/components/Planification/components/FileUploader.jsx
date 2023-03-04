import { useContext, useRef } from 'react';
import { PlanificationContext } from '../context';

const FileUploader = () => {
  const { actions } = useContext(PlanificationContext);
  const fileRef = useRef();

  const handleUpload = (evt) => {
    if (!evt.target.files[0]?.name) {
      return;
    }

    actions.uploadFile(evt.target.files[0]);
    fileRef.current.value = '';
  };

  return (
    <div className="file-upload">
      <input
        ref={fileRef}
        onChange={handleUpload}
        type="file"
      />
    </div>
  );
};

export default FileUploader;

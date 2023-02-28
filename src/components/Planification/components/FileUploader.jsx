import { useContext } from 'react';
import { PlanificationContext } from '../context';

const FileUploader = () => {
  const { states, actions } = useContext(PlanificationContext);

  const handleUpload = (evt) => {
    if (!evt.target.files[0]?.name) {
      return;
    }

    actions.uploadFile(evt.target.files[0]);
  };

  return (
    <div className="file-upload">
      {states.files.map(f => {
        return <div key={f.uuid}>{f.name}</div>;
      })}
      <input
        onChange={handleUpload}
        type="file"
      />
    </div>
  );
};

export default FileUploader;

import { useContext, useState } from 'react';
import { PlanificationContext } from './context';
import PlanningFilesTable from './PlanningFilesTable';
import EditModal from './EditModal.jsx';
import * as lessonRequest from 'src/services/admin/lesson.request.js';

const PlanningFiles = () => {
  const { states, actions } = useContext(PlanificationContext);
  const [showEditModal, setShowEditModal] = useState(false);
  const [name, setName] = useState('');
  const [filepath, setFilepath] = useState('');
  const [id, setId] = useState();

  const openDataToEdit = async (lessonId) => {
    const response = await lessonRequest.getLessonById(states.lesson.id);
    const { files } = response.lesson;
    const elementData = files.filter(data => data.id == lessonId)[0];
    const { filename, filepath, id } = elementData;
    setName(filename);
    setFilepath(filepath);
    setId(id);
  }

  const isModalEditShown =
    showEditModal &&
    <EditModal
      states={states}
      showEditModal={showEditModal}
      setShowEditModal={setShowEditModal}
      name={name}
      filepath={filepath}
      setName={setName}
      setFilepath={setFilepath}
      lessonId={states.lesson.id}
      fileId={id}
    />;

  return (
    <div className="table-section">
      <PlanningFilesTable
        tableData={states.files}
        actions={actions}
        setShowEditModal={setShowEditModal}
        openDataToEdit={openDataToEdit}
      />
      {isModalEditShown}
    </div>
  );
};

PlanningFiles.displayName = 'PlanningFiles';

export default PlanningFiles;

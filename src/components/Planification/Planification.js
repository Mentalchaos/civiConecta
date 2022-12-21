import { useRef, useState, useEffect } from 'react';
import useForm from 'src/hooks/useForm';
import Button from '../UI/Button';
import Table from '../UI/Table';
import Modal from '../UI/Modal';
import arrowIcon from 'src/assets/Icons/arrow-down.svg';
import './Planification.css';

const Planification = ({
  classData,
  setIsSelectedClass,
  handleSubmit,
  onHandleAddFile,
  onHandleDeleteFile,
  getClasses,
  isClass,
  fetching,
  grade,
}) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [fileName, setFileName] = useState('');
  const [filesData, setFilesData] = useState([]);
  const [fileSelected, setFileSelected] = useState('');
  const { values, handleInputChange } = useForm({
    topic: classData.planning.topic,
    studentMaterials: classData.planning.materials[0].student,
    teacherMaterials: classData.planning.materials[0].teacher,
    startActivity: classData.planning.startActivity,
    mainActivity: classData.planning.mainActivity,
    endActivity: classData.planning.endActivity,
    description: classData.description,
  });
  const inputFile = useRef();

  useEffect(() => {
    setFilesData(classData.files);
  }, [classData.files]);

  const styleDefaultButton = {
    padding: '5px 40px',
    color: '#fff',
    backgroundColor: 'var(--color-secondary)',
    borderRadius: 20,
  };

  const styleCancelButton = {
    padding: '5px 40px',
    color: 'var(--color-secondary)',
    backgroundColor: '#fff',
    borderRadius: 20,
    border: '1px solid var(--color-secondary)',
  };

  const headerTexts = ['Nombre'];
  const files = classData.files.map(file => {
    return {
      url: file,
    };
  });
  const tableDataDisplayed = files.map(file => {
    const separateNameFile = isClass
      ? file.url.split('=')[4]
      : file.url.split('=')[3];

    return {
      name: separateNameFile,
    };
  });

  const onHandleCheckboxSelected = row => {
    if (row) {
      setIsRowSelected(true);
      setFileSelected(row.url);
    } else {
      setIsRowSelected(false);
      setFileSelected('');
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    handleSubmit(values);
  };

  const handleDeleteFile = () => {
    const file = isClass
      ? fileSelected.split('=')[4]
      : fileSelected.split('=')[3];
    onHandleDeleteFile(file);
  };

  const onSubmitFile = e => {
    e.preventDefault();
    const fileName = inputFile.current?.files[0]?.name;
    setFileName(fileName);

    const form = new FormData();
    form.append('file', e.target.uploadFile.files[0]);
    onHandleAddFile(form);
  };

  const onDownloadFile = () => {
    if (fileSelected.length) window.location.href = fileSelected;
    setShowConfirmDelete(false);
  };

  return (
    <div className="planification-container">
      {showConfirmDelete && (
        <Modal
          style={{ width: 450, padding: '40px 20px', textAlign: 'left' }}
          title="Eliminar Documento"
          subtitle="Deseas eliminar el documento seleccionado?"
        >
          <div className="container__modal-actions">
            <Button
              text="Cancelar"
              customStyles={styleCancelButton}
              onClick={() => setShowConfirmDelete(false)}
            />
            <Button
              onClick={handleDeleteFile}
              text="Continuar"
              customStyles={styleDefaultButton}
            />
          </div>
        </Modal>
      )}
      <div className="data-class">
        <div className="data-info">
          {classData.number && isClass && (
            <h3 className="class-title">Clase {classData.number}</h3>
          )}
          {classData.title && !isClass && (
            <h3 className="class-title-events">{classData.title}</h3>
          )}
          <span className="class-files">
            {classData.files?.length} documentos totales en esta clase.
          </span>
        </div>
        <img
          onClick={() => {
            setIsSelectedClass(false);
            isClass
              ? getClasses(classData.unit.number)
              : getClasses(classData.grade.level);
          }}
          className="icon-back-to"
          src={arrowIcon}
          alt="back to"
        />
      </div>
      <input
        className="planning__oa-detail"
        onChange={handleInputChange}
        name="description"
        value={values.description}
        type="text"
        placeholder="Detalle OA"
      />
      {classData.files.length ? (
        <div className="table-section">
          <Table
            style={{ marginTop: 10 }}
            handleCheckboxSelected={onHandleCheckboxSelected}
            data={files}
            dataDisplayed={tableDataDisplayed}
            dataHeader={headerTexts}
          />
          {isRowSelected && (
            <div className="content__difused planning-section">
              <Button
                onClick={() => setShowConfirmDelete(true)}
                text="Eliminar"
                customStyles={styleCancelButton}
              />
              <Button
                onClick={() => onDownloadFile()}
                text="Descargar"
                customStyles={styleDefaultButton}
              />
            </div>
          )}
        </div>
      ) : (
        <h1>No se registran archivos.</h1>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 5,
        }}
      >
        {fileName.length > 0 && (
          <span style={{ fontSize: 13 }}>{fileName}</span>
        )}
        <form encType="multipart/form-data">
          <div className="add-file-container">
            <input
              onChange={onSubmitFile}
              type="file"
              name="file"
              ref={inputFile}
            />
          </div>
        </form>
      </div>
      <h2
        style={{
          textAlign: 'left',
          marginBottom: 0,
          color: 'var(--gray-dark)',
          paddingLeft: '6rem',
        }}
      >
        Planificaci&oacute;n
      </h2>
      <form className="planning-form" onSubmit={onHandleSubmit}>
        <div className="form-group planning">
          <label>Tema clase:</label>
          <input
            type="text"
            name="topic"
            value={values.topic}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group planning">
          <label>Materiales:</label>
          <div className="group__container-materials">
            <label>Docente:</label>
            <input
              type="text"
              name="teacherMaterials"
              value={values.teacherMaterials}
              onChange={handleInputChange}
              placeholder="Materiales Docente"
            />
            <label>Estudiante:</label>
            <input
              type="text"
              name="studentMaterials"
              value={values.studentMaterials}
              onChange={handleInputChange}
              placeholder="Materiales Estudiante"
            />
          </div>
        </div>
        <div className="form-group planning">
          <label>Actividad de inicio:</label>
          <input
            type="text"
            name="startActivity"
            value={values.startActivity}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group planning">
          <label>Actividad central:</label>
          <input
            type="text"
            name="mainActivity"
            value={values.mainActivity}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group planning">
          <label>Actividad de cierre:</label>
          <input
            type="text"
            name="endActivity"
            value={values.endActivity}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group button">
          <Button
            onClick={onHandleSubmit}
            disabled={fetching}
            customStyles={styleDefaultButton}
            text={fetching ? 'Guardando...' : 'Guardar'}
          />
        </div>
      </form>
    </div>
  );
};

export default Planification;

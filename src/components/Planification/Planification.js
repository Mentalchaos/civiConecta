import { useRef, useState, useEffect } from 'react';
import useForm from 'src/hooks/useForm';
import Button from '../UI/Button';
import Table from '../UI/Table';
import Modal from '../UI/Modal';
import arrowIcon from 'src/assets/Icons/arrow-down.svg';
import { getDownloadFile } from 'src/services/admin/files.request';
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
  type
}) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileSelected, setFileSelected] = useState('');
  const [filesList, setFilesList] = useState([]);
  const [dataDisplayed, setDataDisplayed] = useState([]);
  const { values, handleInputChange } = useForm({
    topic: classData.planning.topic,
    studentMaterials: classData.planning.materials[0].student,
    teacherMaterials: classData.planning.materials[0].teacher,
    startActivity: classData.planning.startActivity,
    mainActivity: classData.planning.mainActivity,
    endActivity: classData.planning.endActivity,
    description: classData.description,
    objetives: classData.objetives,
    date: classData.date
  });
  const inputFile = useRef();

  console.log('values', values);

  useEffect(() => {
    const files = classData.files?.map(file => {
      return file;
    });
    const tableDataDisplayed = files?.map(file => {
      return {
        name: file.fileName || 'Archivo sin nombre',
      };
    });
    setDataDisplayed(tableDataDisplayed);
    setFilesList(files);
  }, []);

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

  const onHandleCheckboxSelected = row => {
    if (row) {
      setIsRowSelected(true);
      setFileSelected(row);
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
    onHandleDeleteFile(fileSelected.fileName);
    setShowConfirmDelete(false);
  };

  const onSubmitFile = e => {
    e.preventDefault();

    if (inputFile.current?.files[0]) {
      const fileName = inputFile.current?.files[0]?.name;

      const nameWithoutAccent = fileName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const setName = nameWithoutAccent.replace(' ', '_');
      const fullNameReplacemente = setName.replace('-', '_');
      setFileName(fullNameReplacemente);

      const form = new FormData();
      const file = inputFile.current?.files[0];
      form.append('file', file);
      form.set('file', file, fullNameReplacemente);
      onHandleAddFile(form);
    }
  };

  const onDownloadFile = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;
    const path = `${fileSelected.getPath}&token=${token}`;
    const link = document.createElement('a');
    const splittedPath = path.split(':');

    link.href = `https://${splittedPath[1]}`;
    link.download = path.substring(path.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <Button text="Cancelar" customStyles={styleCancelButton} onClick={() => setShowConfirmDelete(false)} />
            <Button onClick={handleDeleteFile} text="Continuar" customStyles={styleDefaultButton} />
          </div>
        </Modal>
      )}
      <div className="data-class">
        <div className="data-info">
          {classData.number && isClass && <h3 className="class-title">Clase {classData.number}</h3>}
          {classData.title && !isClass && <h3 className="class-title-events">{classData.title}</h3>}
          <span className="class-files">{classData.files?.length} documentos totales en esta clase.</span>
        </div>
        <img
          onClick={() => {
            setIsSelectedClass(false);
            isClass ? getClasses(classData.unit.number) : getClasses(classData.grade.level);
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
        value={isClass ? values.objetives : values.description}
        type="text"
        placeholder="Detalle Objetivo"
      />
      {classData.files.length ? (
        <div className="table-section">
          <Table
            style={{ marginTop: 10 }}
            handleCheckboxSelected={onHandleCheckboxSelected}
            data={filesList}
            dataDisplayed={dataDisplayed}
            dataHeader={headerTexts}
          />
          {isRowSelected && (
            <div className="content__difused planning-section">
              <Button
                disabled={fetching}
                onClick={() => setShowConfirmDelete(true)}
                text="Eliminar"
                customStyles={styleCancelButton}
              />
              <Button
                disabled={fetching}
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
        {fileName.length > 0 && <span style={{ fontSize: 14 }}>{fileName}</span>}
        {!fetching && (
          <form encType="multipart/form-data">
            <div className="add-file-container">
              <input disabled={fetching} onChange={onSubmitFile} type="file" name="file" ref={inputFile} />
            </div>
          </form>
        )}
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
          <input type="text" name="topic" value={values.topic} onChange={handleInputChange} />
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
          <input type="text" name="startActivity" value={values.startActivity} onChange={handleInputChange} />
        </div>
        <div className="form-group planning">
          <label>Actividad central:</label>
          <input type="text" name="mainActivity" value={values.mainActivity} onChange={handleInputChange} />
        </div>
        <div className="form-group planning">
          <label>Actividad de cierre:</label>
          <input type="text" name="endActivity" value={values.endActivity} onChange={handleInputChange} />
        </div>
        {
        type == 'ephemeris' &&
          <div className="form-group planning">
            <label>Fecha:</label>
            <input placeholder="AÑO-MES-DIA" type="text" name="date" value={values.date} onChange={handleInputChange} />
          </div>
        }
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

import { useState } from 'react';
import useForm from 'src/hooks/useForm';
import Button from '../UI/Button';
import Table from '../UI/Table';
import Modal from '../UI/Modal';
import { updateClass } from 'src/services/admin/classes.request';
import uploadIcon from 'src/assets/Icons/upload.svg';
import arrowIcon from 'src/assets/Icons/arrow-down.svg';
import './Planification.css';

const Planification = ({
  grade,
  classData,
  setIsSelectedClass,
  getClasses,
}) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [onFetching, setOnFetching] = useState(false);
  const { values, handleInputChange } = useForm({
    topic: classData.planning.topic,
    studentMaterials: classData.planning.materials[0].student,
    teacherMaterials: classData.planning.materials[0].teacher,
    startActivity: classData.planning.startActivity,
    mainActivity: classData.planning.mainActivity,
    endActivity: classData.planning.endActivity,
    description: classData.description,
  });

  const styleDefaultButton = {
    padding: '5px 40px',
    color: '#fff',
    backgroundColor: 'var(--color-secondary)',
    borderRadius: 20,
  };

  const styleDefaultWithIcon = {
    padding: '5px 20px 5px 40px',
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

  const headerTexts = ['Nombre', 'Formato', 'Fecha de subida'];
  const data = [
    { name: 'archivo_adjunto_1', formato: 'PDF', addedDate: '01/10/2022' },
    { name: 'archivo_adjunto_1', formato: 'PDF', addedDate: '01/10/2022' },
    { name: 'archivo_adjunto_1', formato: 'PDF', addedDate: '01/10/2022' },
  ];

  const onHandleCheckboxSelected = rowDataSelected => {
    if (rowDataSelected) {
      setIsRowSelected(true);
    } else {
      setIsRowSelected(false);
    }
  };

  const onUpdateClass = (number, unit, grade) => {
    setOnFetching(true);
    const {
      topic,
      studentMaterials,
      description,
      teacherMaterials,
      startActivity,
      mainActivity,
      endActivity,
    } = values;

    const payload = {
      ...classData,
      description,
      planning: {
        startActivity,
        mainActivity,
        endActivity,
        topic,
        materials: {
          teacher: teacherMaterials.toString().trim().split(','),
          student: studentMaterials.toString().trim().split(','),
        },
      },
    };
    updateClass(number, unit, grade, payload).then(resp => {
      if (resp.ok) {
        setOnFetching(false);
      } else {
        setOnFetching(false);
        console.error(resp.error);
      }
    });
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const { number, unit } = classData;
    onUpdateClass(number, unit.number, grade);
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
            <Button text="Continuar" customStyles={styleDefaultButton} />
          </div>
        </Modal>
      )}
      <div className="data-class">
        <div className="data-info">
          {classData.number && (
            <h3 className="class-title">Clase {classData.number}</h3>
          )}
          {classData.name && (
            <h3 className="class-title-events">{classData.name}</h3>
          )}
          <span className="class-files">
            {classData.files?.length} documentos totales en esta clase.
          </span>
        </div>
        <img
          onClick={() => {
            setIsSelectedClass(false);
            getClasses(classData.unit.number, grade);
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
      {data.length ? (
        <div className="table-section">
          <Table
            style={{ marginTop: 10 }}
            handleCheckboxSelected={onHandleCheckboxSelected}
            data={data}
            dataDisplayed={data}
            dataHeader={headerTexts}
          />
          {isRowSelected && (
            <div className="content__difused planning-section">
              <Button
                onClick={() => setShowConfirmDelete(true)}
                text="Eliminar"
                customStyles={styleCancelButton}
              />
            </div>
          )}
        </div>
      ) : (
        <h1>Aún no se suben archivos</h1>
      )}
      <div className="btn-container">
        <Button
          icon={uploadIcon}
          customStyles={styleDefaultWithIcon}
          text="Subir archivo"
        />
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
            disabled={onFetching}
            customStyles={styleDefaultButton}
            text="Guardar"
          />
        </div>
      </form>
    </div>
  );
};

export default Planification;

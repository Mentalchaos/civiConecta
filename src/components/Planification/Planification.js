import { useState } from 'react';
import Button from '../UI/Button';
import Table from '../UI/Table';
import Modal from '../UI/Modal';
import planningIcon from 'src/assets/Icons/planning.svg';
import uploadIcon from 'src/assets/Icons/upload.svg';

import './Planification.css';
import useForm from 'src/hooks/useForm';

const Planification = ({ situation, ephemeris, unityClasses }) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const { values, handleInputChange, reset } = useForm({
    topic: '',
    studentMaterials: '',
    teacherMaterials: '',
    startActivity: '',
    mainActivity: '',
    endActivity: '',
  });

  const headerTexts = ['Nombre', 'Formato', 'Fecha de subida'];
  const data = [
    { name: 'archivo_adjunto_1', formato: 'PDF', addedDate: '01/10/2022' },
    { name: 'archivo_adjunto_1', formato: 'PDF', addedDate: '01/10/2022' },
    { name: 'archivo_adjunto_1', formato: 'PDF', addedDate: '01/10/2022' },
  ];

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

  const onHandleCheckboxSelected = rowDataSelected => {
    if (rowDataSelected) {
      setIsRowSelected(true);
    } else {
      setIsRowSelected(false);
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    console.log(values);
    reset();
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
      <input
        className="planning__oa-detail"
        type="text"
        placeholder="Detalle OA"
      />
      {data.length ? (
        <div className="table-section">
          <Table
            style={{ marginTop: 10 }}
            handleCheckboxSelected={onHandleCheckboxSelected}
            data={data}
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
            <input
              type="text"
              name="teacherMaterials"
              value={values.teacherMaterials}
              onChange={handleInputChange}
              placeholder="Materiales Docente"
            />
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
          <Button customStyles={styleDefaultButton} text="Guardar" />
        </div>
      </form>
    </div>
  );
};

export default Planification;

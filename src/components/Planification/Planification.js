import { useState } from 'react';
import Button from '../UI/Button';
import Table from '../UI/Table';
import Modal from '../UI/Modal';
import planningIcon from 'src/assets/Icons/planning.svg';
import uploadIcon from 'src/assets/Icons/upload.svg';

import './Planification.css';

const Planification = ({ situation, ephemeris, unityClass }) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const headerTexts = ['Nombre', 'Formato', 'Fecha de subida'];
  const data = [
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
      <Button
        text="Planificación"
        icon={planningIcon}
        customStyles={styleDefaultWithIcon}
      />
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
    </div>
  );
};

export default Planification;

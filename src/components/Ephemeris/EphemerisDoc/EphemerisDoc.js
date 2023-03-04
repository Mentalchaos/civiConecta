import { useState } from 'react';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import { deleteEvent } from 'src/services/admin/situations.request';
import '../Ephemeris.css';

const EphemerisDoc = ({ grade, handleEphemerisSelected, handleShowPlanning, ephemerisData, getEphemeris }) => {
  const [ephemerisSelected, setEphemerisSelected] = useState(false);
  const [fetching, setFetching] = useState(false);
  const { title, files, description, number, date } = ephemerisData;

  const styleDefaultButton = {
    padding: '5px 30px',
    color: '#fff',
    backgroundColor: 'var(--color-secondary)',
    borderRadius: 20,
  };

  const styleCancelButton = {
    padding: '5px 30px',
    color: 'var(--color-secondary)',
    backgroundColor: '#fff',
    borderRadius: 20,
    border: '1px solid var(--color-secondary)',
  };

  const onHandleShowPlanning = () => {
    handleShowPlanning(true);
    handleEphemerisSelected(ephemerisData);
  };

  const onHandleDeleteEphemeris = number => {
    setFetching(true);
    deleteEvent(number, grade).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setEphemerisSelected(false);
        getEphemeris(grade);
      } else {
        setFetching(false);
        setEphemerisSelected(false);
        getEphemeris(grade);
      }
    });
  };

  const transformedDate = new Date(date).toLocaleDateString('es-CL');

  return (
    <div className="ephemeris-doc-container">
      {ephemerisSelected && (
        <Modal
          style={{ padding: '30px 60px' }}
          title="Eliminar efeméride"
          subtitle="Deseas eliminar el evento seleccionado?"
        >
          <div className="container__modal-actions">
            <Button
              text="Cancelar"
              customStyles={styleCancelButton}
              onClick={() => setEphemerisSelected(false)}
              disabled={fetching}
            />
            <Button
              onClick={() => onHandleDeleteEphemeris(number)}
              text="Continuar"
              customStyles={styleDefaultButton}
              disabled={fetching}
            />
          </div>
        </Modal>
      )}
      <div className="doc-texts">
        <p className="doc-event-number">{number}</p>
        <button type="button" className="doc-delete-button" onClick={() => setEphemerisSelected(true)}>
          x
        </button>
        <div className="ephemeris-title">
          {transformedDate} {title}
        </div>
        <div className="ephemeris-subtitle">Objetivo: {description}</div>
        <div className="ephemeris-subtitle">{files.length} documentos adjuntados.</div>
      </div>
      <img onClick={onHandleShowPlanning} className="go-planning" src={arrow} alt="Go to planning icon" />
    </div>
  );
};

export default EphemerisDoc;

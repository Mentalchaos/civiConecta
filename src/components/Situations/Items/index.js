import { useState } from 'react';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import Button from 'src/components/UI/Button';
import Modal from 'src/components/UI/Modal';
import { deleteException } from 'src/services/admin/ephemeris.request';

const Items = ({ grade, getEvents, handleSituationSelected, handleShowPlanning, eventData }) => {
  const [situationSelected, setSituationSelected] = useState(false);
  const [fetching, setFetching] = useState(false);

  const { number, title, files, description } = eventData;

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
    handleSituationSelected(eventData);
  };

  const onHandleDeleteSituation = number => {
    setFetching(true);
    deleteException(number, grade).then(resp => {
      if (resp.ok) {
        setFetching(false);
        setSituationSelected(false);
        getEvents(grade);
      } else {
        setFetching(false);
        setSituationSelected(false);
        getEvents(grade);
      }
    });
  };

  return (
    <div className="items">
      {situationSelected && (
        <Modal
          style={{ padding: '30px 60px' }}
          title="Eliminar efeméride"
          subtitle="Deseas eliminar el evento seleccionado?"
        >
          <div className="container__modal-actions">
            <Button
              text="Cancelar"
              customStyles={styleCancelButton}
              onClick={() => setSituationSelected(false)}
              disabled={fetching}
            />
            <Button
              onClick={() => onHandleDeleteSituation(number)}
              text="Continuar"
              customStyles={styleDefaultButton}
              disabled={fetching}
            />
          </div>
        </Modal>
      )}
      <div className="item-info">
        <div className="text-box">
          <button type="button" className="doc-delete-button" onClick={() => setSituationSelected(true)}>
            x
          </button>
          <p className="doc-event-number situations">{number}</p>
          <p className="text-box-p1"> {title} </p>
          <p className="text-box-p2"> {files.length} documentos adjuntados. </p>
          <p className="text-box-p3"> Objetivo: {description} </p>
        </div>
      </div>

      <img onClick={onHandleShowPlanning} src={arrow} className="goto-planning" alt="arrow icon" />
    </div>
  );
};

export default Items;

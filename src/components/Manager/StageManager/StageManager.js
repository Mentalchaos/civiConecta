import { useEffect, useState } from 'react';
import Button from 'src/components/UI/Button';
import Table from 'src/components/UI/Table';
import Modal from 'src/components/UI/Modal';
import Spinner from 'src/components/UI/Spinner';
import useForm from 'src/hooks/useForm';
import {
  getEstablishment,
  inactivateEstablishment,
  reactivateEstablishment,
} from 'src/services/admin/establishment.request';

import './StageManager.css';

const StageManager = ({ title, changeStage, handleInstitutionSelected }) => {
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [confirmAction, setConfirmAction] = useState(false);
  const [formData, setFormData] = useState([]);
  const [formDataDisplayed, setFormDataDisplayed] = useState([]);
  const [institutionSelected, setInstitutionSelected] = useState({});
  const [fetching, setFetching] = useState(false);
  const { values, handleInputChange, reset } = useForm({
    name: '',
  });

  useEffect(() => {
    getEstablishments();
  }, []);

  const headerTable = ['Nombre', 'Estado'];

  const buttonStyles = {
    backgroundColor: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 40px',
    borderRadius: '20px',
  };

  const buttonDeleteStyles = {
    backgroundColor: 'var(--color-secondary)',
    color: '#fff',
    padding: '6px 55px',
    borderRadius: '20px',
  };

  const cancelButtonStyle = {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    padding: '5px 40px',
    borderRadius: '20px',
    border: '1px solid var(--color-secondary)',
  };

  const getEstablishments = () => {
    setFetching(true);
    getEstablishment().then(resp => {
      if (resp.ok) {
        setFetching(false);
        setFormData(resp.establishments);
        const data = resp.establishments;
        const dataDisplayed = data.map(est => {
          const { active, name } = est;
          return {
            name,
            active: active ? 'Activo' : 'Inactivo',
          };
        });
        setFormDataDisplayed(dataDisplayed);
      } else {
        setFetching(false);
        console.error(resp.error);
      }
    });
  };

  const onHandleCheckboxSelected = rowSelected => {
    if (rowSelected) {
      setShowDeleteOption(true);
      setInstitutionSelected(rowSelected);
      handleInstitutionSelected(rowSelected);
    } else {
      setShowDeleteOption(false);
      setInstitutionSelected({});
    }
  };

  const onHandleGotoCreateCourse = () => {
    changeStage('assignment');
  };

  const handleSubmit = e => {
    e.preventDefault();
    setShowDeleteOption(false);
    const { name, type, region, commune } = values;
    if (!name || !type || !region || !commune) return;
    setFormData([...formData, values]);
    reset();
  };

  const handleConfirmAction = () => {
    setFetching(true);
    const { number, active } = institutionSelected;
    active &&
      inactivateEstablishment(number).then(resp => {
        if (resp.ok) {
          setFetching(false);
          getEstablishments();
        } else {
        }
      });
    !active &&
      reactivateEstablishment(number).then(resp => {
        if (resp.ok) {
          setFetching(false);
          getEstablishments();
        } else {
          setFetching(false);
        }
      });
    setConfirmAction(false);
    setShowDeleteOption(false);
  };

  return (
    <section className="manager-section">
      {confirmAction && (
        <Modal
          title={
            institutionSelected.active
              ? 'Deshabilitar institución'
              : 'Habilitar institución'
          }
          subtitle={
            institutionSelected.active
              ? 'Deseas deshabilitar el elemento seleccionado?'
              : 'Deseas habilitar el elemento seleccionado?'
          }
          style={{ padding: '50px 30px' }}
        >
          <div className="container-actions">
            <Button
              text="Cancelar"
              onClick={() => setConfirmAction(false)}
              customStyles={cancelButtonStyle}
              disabled={fetching}
            />
            <Button
              onClick={handleConfirmAction}
              text="Continuar"
              customStyles={buttonStyles}
              disabled={fetching}
            />
          </div>
        </Modal>
      )}
      <h1 className="section__title">{title}</h1>
      <article className="section__content">
        <div className="manager__search-container">
          <form className="manager__form" onSubmit={handleSubmit}>
            <input
              className="form__input-name"
              type="text"
              name="name"
              placeholder="Nombre"
              autoComplete="off"
              autoFocus={true}
              value={values.name}
              onChange={handleInputChange}
              required
            />
          </form>
        </div>
        <div
          style={{ marginTop: 20, paddingRight: '10rem', textAlign: 'right' }}
        >
          <Button
            type="submit"
            text="A&ntilde;adir"
            customStyles={buttonStyles}
            onClick={handleSubmit}
          />
        </div>
      </article>
      <section style={{ textAlign: 'center', marginTop: 50 }}>
        {fetching && <Spinner />}
      </section>
      {formData.length > 0 && !fetching && (
        <article className="section__content table-container">
          <div
            style={{
              opacity: showDeleteOption ? '1' : '0',
              zIndex: showDeleteOption ? 'initial' : '-999',
            }}
            className="content__difused"
          >
            <Button
              text={institutionSelected.active ? 'Deshabilitar' : 'Habilitar'}
              onClick={() => setConfirmAction(true)}
              customStyles={buttonDeleteStyles}
            />
            <Button
              onClick={onHandleGotoCreateCourse}
              text="Crear curso"
              customStyles={buttonDeleteStyles}
            />
          </div>
          <Table
            dataHeader={headerTable}
            data={formData}
            dataDisplayed={formDataDisplayed}
            handleCheckboxSelected={onHandleCheckboxSelected}
          />
        </article>
      )}
      {!formData.length && !fetching && (
        <h1 style={{ textAlign: 'center', marginTop: 80 }}>
          Aún no hay instituciones agregadas
        </h1>
      )}
    </section>
  );
};

export default StageManager;

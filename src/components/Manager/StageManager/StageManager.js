import { useState } from 'react';
import Button from 'src/components/UI/Button';
import Table from 'src/components/UI/Table';
import Modal from 'src/components/UI/Modal';
import useForm from 'src/hooks/useForm';
import deleteIcon from 'src/assets/Icons/delete_icon.svg';
import locationIcon from 'src/assets/Icons/comune_icon.svg';

import './StageManager.css';

const StageManager = ({ title, setStage, handleRowSelected }) => {
  const [showButtonDelete, setShowButtonDelete] = useState(false);
  const [confirmAction, setConfirmAction] = useState(false);
  const [formData, setFormData] = useState([]);
  const [institutionSelected, setInstitutionSelected] = useState({});
  const [checkboxDataSelected, setCheckboxDataSelected] = useState({});
  const { values, handleInputChange, reset } = useForm({
    name: '',
    type: '',
    region: '',
    commune: '',
  });

  const headerTable = [
    {
      Header: 'Nombre',
      accessor: 'name',
    },
    { Header: 'Tipo', accessor: 'type' },
    { Header: 'Región', accessor: 'region' },
    { Header: 'Comuna', accessor: 'commune' },
  ];

  const regiones = [
    { name: 'Región Metropolitana', id: 1 },
    { name: 'Región Metropolitana', id: 2 },
    { name: 'Región Metropolitana', id: 3 },
    { name: 'Región Metropolitana', id: 4 },
    { name: 'Región Metropolitana', id: 5 },
    { name: 'Región Metropolitana', id: 6 },
    { name: 'Región Metropolitana', id: 7 },
  ];

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
    zIndex: 999,
  };

  const cancelButtonStyle = {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    padding: '5px 40px',
    borderRadius: '20px',
    border: '1px solid var(--color-secondary)',
  };

  const onHandleRowSelected = rowSelected => {
    setInstitutionSelected(rowSelected);
    console.log(rowSelected);
  };

  const onHandleCheckboxSelected = checkData => {
    setCheckboxDataSelected(checkData);
    console.log(checkData);
  };

  const onHandleSubmit = e => {
    const { name, type, region, commune } = values;
    if (!name || !type || !region || !commune) return;
    e.preventDefault();
    setFormData([...formData, values]);
    reset();
  };

  return (
    <section className="manager-section">
      {confirmAction && (
        <Modal
          title="Eliminar Instituci&oacute;n"
          subtitle="Deseas eliminar el elemento seleccionado?"
          style={{ padding: '50px 30px' }}
        >
          <div className="container-actions">
            <Button
              text="Cancelar"
              onClick={() => setConfirmAction(false)}
              customStyles={cancelButtonStyle}
            />
            <Button text="Continuar" customStyles={buttonStyles} />
          </div>
        </Modal>
      )}
      <h1 className="section__title">{title}</h1>
      <article className="section__content">
        <div className="manager__search-container">
          <form className="manager__form" onSubmit={onHandleSubmit}>
            <input
              className="form__input-name"
              type="text"
              name="name"
              placeholder="Nombre"
              autoComplete="off"
              autoFocus={true}
              value={values.name}
              onChange={handleInputChange}
            />
            <div className="search-container__selects">
              <select
                className="type-school"
                defaultValue="Tipo"
                name="type"
                onChange={handleInputChange}
              >
                <option disabled={true}>Tipo</option>
                <option value="colegio">Colegio</option>
                <option value="liceo">Liceo</option>
                <option value="escuela">Escuela</option>
              </select>
              <select
                className="type-region"
                defaultValue="Región"
                name="region"
                onChange={handleInputChange}
              >
                <option disabled={true}>Región</option>
                {regiones.map(region => {
                  return (
                    <option value={region.name} key={region.id}>
                      {region.name}
                    </option>
                  );
                })}
              </select>
              <div className="input-group-icon">
                <input
                  onChange={handleInputChange}
                  className="form__commune"
                  name="commune"
                  value={values.commune}
                  placeholder="Comuna"
                  autoComplete="off"
                />
                <img src={locationIcon} alt="commune icon" />
              </div>
            </div>
          </form>
        </div>
        <div
          style={{ marginTop: 20, paddingRight: '10rem', textAlign: 'right' }}
        >
          <Button
            type="submit"
            text="A&ntilde;adir"
            customStyles={buttonStyles}
            onClick={onHandleSubmit}
          />
        </div>
      </article>
      {formData.length ? (
        <article className="section__content table-container">
          {showButtonDelete && (
            <div className="content__difused">
              <Button
                onClick={() => setConfirmAction(true)}
                text="Eliminar"
                icon={deleteIcon}
                customStyles={buttonDeleteStyles}
              />
            </div>
          )}
          <Table
            dataHeader={headerTable}
            data={formData}
            onHandleRowSelected={onHandleRowSelected}
            onHandleCheckboxSelected={onHandleCheckboxSelected}
          />
        </article>
      ) : (
        <h1 style={{ textAlign: 'center', marginTop: 80 }}>
          Aún no hay instituciones agregadas
        </h1>
      )}
    </section>
  );
};

export default StageManager;

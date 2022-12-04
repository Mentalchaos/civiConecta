import { useState } from 'react';
import { createUnit, getUnitsByGrade } from 'src/services/admin/units.request';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Spinner from '../UI/Spinner';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import Unit from './Unit/Unit';
import useForm from 'src/hooks/useForm';
import headerImage from '../../assets/images/background-units.png';
import './UnitsSection.css';

const UnitsSection = () => {
  const [units, setUnits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gradeSelected, setGradeSelected] = useState('');
  const [openModalAddUnit, setOpenModalAddUnit] = useState(false);
  const { values, handleInputChange } = useForm({
    number: 0,
    title: '',
    description: '',
  });

  const levels = ['5º Básico'];

  const buttonStyle = {
    backgroundColor: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 30px',
    borderRadius: '20px',
  };
  const buttonCancelStyle = {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    padding: '5px 30px',
    border: '1px solid var(--color-secondary)',
    borderRadius: '20px',
  };

  const handleAddUnit = e => {
    e.preventDefault();
    const { number, title, description } = values;
    const payload = {
      number,
      title,
      description,
      grade: gradeSelected,
      topic: 1,
    };
    createUnit(payload).then(resp => {
      setIsLoading(true);
      if (resp.ok) {
        setIsLoading(false);
        setOpenModalAddUnit(false);
        getUnitsByGrade(gradeSelected);
      } else {
        console.error(resp.error);
        setIsLoading(false);
      }
    });
  };

  const handleLevelSelected = ({ target }) => {
    setIsLoading(true);
    const value = target.value;
    const grade = value.split(' ')[0];
    setGradeSelected(grade);
    getUnitsByGrade(grade).then(resp => {
      try {
        setUnits(resp.units);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    });
  };

  return (
    <>
      {openModalAddUnit && (
        <Modal
          style={{ padding: '30px 60px', width: '450px' }}
          title={`Agregar unidad a ${levels[0]}`}
        >
          <form className="form_add-units" onSubmit={handleAddUnit}>
            <div className="form-group">
              <label>Número unidad:</label>
              <input
                onChange={handleInputChange}
                value={values.number}
                name="number"
                type="number"
              />
            </div>
            <div className="form-group">
              <label>Título:</label>
              <input
                onChange={handleInputChange}
                value={values.title}
                name="title"
                type="text"
              />
            </div>
            <div className="form-group">
              <label>Descripción:</label>
              <input
                onChange={handleInputChange}
                value={values.description}
                name="description"
                type="text"
              />
            </div>
            <div className="actions-container">
              <Button
                onClick={() => setOpenModalAddUnit(false)}
                customStyles={buttonCancelStyle}
                text="Cancelar"
              />
              <Button
                onClick={handleAddUnit}
                customStyles={buttonStyle}
                text="Continuar"
              />
            </div>
          </form>
        </Modal>
      )}

      <SectionsHeader image={headerImage} subtitle="Unidades" />
      <main className="main-content">
        <header className="content__header">
          <div>
            <p className="header-text">Unidades</p>
            <h2 className="header-title">Lista de unidades</h2>
          </div>
          <select
            className="select__level-units"
            defaultValue={'Nivel'}
            onChange={handleLevelSelected}
          >
            <option disabled>Nivel</option>
            {levels.map(level => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </header>
        {isLoading && (
          <div style={{ textAlign: 'center', marginTop: 50 }}>
            <Spinner />
          </div>
        )}
        {!isLoading && units.length > 0 && gradeSelected && (
          <div className="content-units">
            <Unit unitsData={units} grade={gradeSelected} />
          </div>
        )}
        {gradeSelected && !units.length && !isLoading && (
          <h2
            style={{
              color: 'var(--gray-dark)',
              textAlign: 'center',
              marginTop: 80,
            }}
          >
            No hay unidades creadas para el curso.
          </h2>
        )}
        {!isLoading && gradeSelected && (
          <div style={{ textAlign: 'right', marginTop: 10, width: '85%' }}>
            <Button
              onClick={() => setOpenModalAddUnit(true)}
              customStyles={buttonStyle}
              text="Agregar unidad"
            />
          </div>
        )}
        {!units.length && !isLoading && !gradeSelected && (
          <h2
            style={{
              color: 'var(--gray-dark',
              textAlign: 'center',
              marginTop: '5rem',
            }}
          >
            Selecciona el curso para ver sus unidades.
          </h2>
        )}
      </main>
    </>
  );
};

export default UnitsSection;

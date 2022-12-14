import { useState } from 'react';
import Button from 'src/components/UI/Button';
import arrow from 'src/assets/Icons/arrow-degree.svg';

import './StageDetail.css';
import Modal from 'src/components/UI/Modal';
import useForm from 'src/hooks/useForm';

const StageDetail = ({ title, courseSelected, institutionSelected }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [teacherSelected, setTeacherSelected] = useState(false);
  const [studentSelected, setStudentSelected] = useState(false);
  const [dataStudents, setDataStudents] = useState([]);
  const { values, handleInputChange, reset } = useForm({
    /*  */ name: '',
    rut: '',
  });

  const buttonStyle = {
    color: '#fff',
    backgroundColor: 'var(--color-secondary)',
    borderRadius: 20,
    padding: '5px 40px',
  };

  const buttonCancelStyle = {
    backgroundColor: '#fff',
    color: 'var(--color-secondary)',
    borderRadius: 20,
    border: '1px solid var(--color-secondary)',
    padding: '5px 40px',
  };

  const tableDataHeader = [
    'Nombre',
    'Fecha de asignación',
    'Estado de actividad',
  ];

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  return (
    <section className="manager-section">
      {openEditModal && (
        <Modal
          style={{ padding: '50px 140px' }}
          title={'Modificación de datos'}
          subtitle="Editar letra de módulo y/o número de estudiantes."
        >
          <div className="section__select-actions">
            <div className="select-section edit-section">
              <div className="section__select-letter">
                <p>Letra</p>
                <select className="section__letter-selection edit-letter">
                  <option disabled={true}>Letra</option>
                  {letters.map(letter => {
                    return (
                      <option key={letter} value={letter}>
                        {letter}
                      </option>
                    );
                  })}
                </select>
                <Button
                  onClick={() => setOpenEditModal(false)}
                  customStyles={buttonStyle}
                  text="Cancelar"
                />
              </div>
              <div className="section__select-students">
                <p>N&uacute;mero de estudiantes</p>
                <input
                  style={{
                    width: '165px',
                    borderRadius: '20px',
                    marginBottom: '50px',
                  }}
                  type="number"
                  name="amount"
                  onChange={handleInputChange}
                  defaultValue={0}
                  min={0}
                />
                <Button customStyles={buttonStyle} text="Continuar" />
              </div>
            </div>
          </div>
        </Modal>
      )}
      <h1 className="section__title">{title}</h1>
      <article className="section__content detail-content">
        <header className="detail-content__header">
          <Button text={'Eliminar curso'} customStyles={buttonCancelStyle} />
        </header>
        <main className="detail-content__main">
          <div onClick={() => setOpenEditModal(true)} className="main__info">
            <img className="info__modal-edit" src={arrow} />
            <p>
              Colegio: <span>{institutionSelected.name}</span>
            </p>
            <p>
              Nivel: <span>5º Básico</span>
            </p>
            <p>
              Letra actual: <span>B</span>
            </p>
            <p>
              N&uacute;mero de estudiantes: <span>8</span>
            </p>
          </div>
          <div className="main__table">
            <p>
              <strong>Docentes</strong> asignados a letra:
            </p>
            {teacherSelected && (
              <section className="table-actions">
                <Button customStyles={buttonCancelStyle} text={'Eliminar'} />
                <Button customStyles={buttonStyle} text={'Suspender'} />
              </section>
            )}

            <>
              <div
                style={{
                  display: 'block',
                  textAlign: 'right',
                  marginRight: 100,
                  marginTop: 20,
                }}
              >
                <Button text={'Asignar'} customStyles={buttonStyle} />
              </div>
            </>
          </div>
        </main>
      </article>
    </section>
  );
};

export default StageDetail;

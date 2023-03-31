import { useContext } from 'react';
import Button from 'src/components/UI/Button';
import useForm from 'src/hooks/useForm';
import { ManagerContext } from '../context';

const styles = {
  defaultButton: {
    backgroundColor: 'var(--color-secondary)',
    color: '#fff',
    padding: '5px 40px',
    borderRadius: '20px',
  },
};

const AddEstablishmentForm = () => {
  const { states, actions } = useContext(ManagerContext);
  const { values, handleInputChange, reset, self } = useForm({
    name: '',
  });

  const handleSubmit = () => {
    if (!values.name) return;
    actions.createEstablishment(values.name);
    reset();
  };

  return (
    <article className="section__content">
      <h1 className="section__title">A&ntilde;adir Instituci&oacute;n</h1>
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
      <div style={{ marginTop: 20, paddingRight: '10rem', textAlign: 'right' }}>
        <Button
          type="submit"
          text="A&ntilde;adir"
          onClick={handleSubmit}
          customStyles={styles.defaultButton}
          disabled={states.isFetching || !self.states.isCompletedForm}
        />
      </div>
    </article>
  );
};

export default AddEstablishmentForm;

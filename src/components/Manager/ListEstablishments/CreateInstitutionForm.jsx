import { useRef, useContext } from 'react';
import { ListContext } from './useListEstablishment';

const CreateInstitutionForm = () => {
  const ref = useRef(null);
  const { actions } = useContext(ListContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    actions.createEstablishment(ref.current.value)
      .then(() => {
        ref.current.value = '';
      });
  };

  return (
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
            ref={ref}
            required
          />
        </form>
      </div>
    </article>
  );
};

export default CreateInstitutionForm;

import { useRef, useContext } from 'react';
import { EditCourseContext } from './useEditCourse';

import './EditCourse.css';


const CreateStudentForm = () => {
  const nameRef = useRef(null);
  const runRef = useRef(null);
  const { actions } = useContext(EditCourseContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const name = nameRef.current.value;
    const run = runRef.current.value;

    actions
      .addStudent(name, run)
      .then(() => {
        nameRef.current.value = '';
        runRef.current.value = '';
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <form className='create-student-form' onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input ref={nameRef} id="name" type="text" />

      <label htmlFor="run">RUT</label>
      <input ref={runRef} id="run" type="text" />

      <input className='add-student-input' type="submit" value="Agregar estudiante" />
    </form>
  );
};

export default CreateStudentForm;

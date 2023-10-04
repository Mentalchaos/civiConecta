import { useRef, useContext } from 'react';
import { EditCourseContext } from './useEditCourse';

import './EditCourse.css';

const CreateTeacherForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const { actions } = useContext(EditCourseContext);

  const onSubmit = (evt) => {
    evt.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    actions
      .assignTeacher(name, email)
      .then(() => {
        nameRef.current.value = '';
        emailRef.current.value = '';
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <form className='create-teacher-form' onSubmit={onSubmit}>
      <label htmlFor="teacherName">Nombre Profesor</label>
      <input ref={nameRef} type="text" required />

      <label htmlFor="email">Email</label>
      <input ref={emailRef} type="text" required />

      <input className='add-teacher-input' type="submit" value="Asignar profesor" />
    </form>
  );
};

export default CreateTeacherForm;

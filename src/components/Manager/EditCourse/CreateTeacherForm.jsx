import { useRef, useContext } from 'react';
import { EditCourseContext } from './useEditCourse';

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
    <form onSubmit={onSubmit}>
      <label htmlFor="teacherName">Nombre Profesor</label>
      <input ref={nameRef} type="text" required />

      <label htmlFor="email">Email</label>
      <input ref={emailRef} type="text" required />

      <input type="submit" value="Asignar profesor" />
    </form>
  );
};

export default CreateTeacherForm;

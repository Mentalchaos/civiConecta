const CreateCourseButton = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Crear curso</button>
    </div>
  )
}

CreateCourseButton.displayName = 'CreateCourseButton';

export default CreateCourseButton;

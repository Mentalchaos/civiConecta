const CreateCourseButton = ({ onClick }) => {
  return (
    <div className="create-course-container">
      <button className="create-course-button" onClick={onClick}>Crear curso</button>
    </div>
  )
}

CreateCourseButton.displayName = 'CreateCourseButton';

export default CreateCourseButton;

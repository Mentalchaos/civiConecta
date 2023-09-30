const CreateCourseButton = ({ onClick }) => {
  return (
    <div>
      <button className="create-course-button" onClick={onClick}>Crear curso</button>
    </div>
  )
}

CreateCourseButton.displayName = 'CreateCourseButton';

export default CreateCourseButton;

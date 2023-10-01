import { useParams } from 'react-router-dom';
import EstablishmentLayout from 'src/Layouts/EstablishmentLayout';
import EditCourse from './EditCourse';
import session from 'src/utils/session';

const EditCourseWrapper = () => {
  const { courseId } = useParams();
  const course = session.restore(`course-${courseId}`);
  const subtitle = `Editar curso ${course.level} ${course.character}`;

  return (
    <EstablishmentLayout subtitle={subtitle}>
      <EditCourse />
    </EstablishmentLayout>
  );
};

export default EditCourseWrapper;

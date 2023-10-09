import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditEstablishmentContext } from './useEditEstablishment';
import session from 'src/utils/session';

const GradeList = () => {
  const navigate = useNavigate();
  const { states } = useContext(EditEstablishmentContext);

  const goToCourseEdition = (course) => () => {
    session.save(`course-${course.id}`, course);
    navigate(`/admin/courses/${course.id}`);
  };

  return (
    <div className='gradelist-container'>
      {states.filteredCourses.map(el => (
        <div className="gradelist-element" key={el.id} onClick={goToCourseEdition(el)}>
          {`${el.level} ${el.character}`}
        </div>
      ))}
    </div>
  );
};

GradeList.displayName = 'GradeList';

export default GradeList;

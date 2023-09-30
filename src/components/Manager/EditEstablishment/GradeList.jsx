import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditEstablishmentContext } from './useEditEstablishment';

const GradeList = () => {
  const navigate = useNavigate();
  const { states } = useContext(EditEstablishmentContext);

  const goToCourseEdition = (courseId) => () => {
    navigate(`/admin/courses/${courseId}`);
  };

  return (
    <div className='gradelist-container'>
      {states.filteredCourses.map(el => (
        <div className="gradelist-element" key={el.id} onClick={goToCourseEdition(el.id)}>
          {`${el.level} ${el.character}`}
        </div>
      ))}
    </div>
  );
};

GradeList.displayName = 'GradeList';

export default GradeList;

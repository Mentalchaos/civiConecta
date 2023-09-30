import { useContext } from 'react';
import { EditEstablishmentContext } from './useEditEstablishment';

const GradeList = () => {
  const { states } = useContext(EditEstablishmentContext);

  return (
    <div className='gradelist-container'>
      {states.filteredCourses.map(el => (
        <div className="gradelist-element" key={el.id}>
          {`${el.level} ${el.character}`}
        </div>
      ))}
    </div>
  );
};

GradeList.displayName = 'GradeList';

export default GradeList;

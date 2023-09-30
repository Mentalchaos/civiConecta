import { useParams } from 'react-router-dom';
import { useEditEstablishment, EditEstablishmentContext } from './useEditEstablishment';
import GradeList from './GradeList.jsx';
import CourseSelectors from './CourseSelectors.jsx';
import CreateCourseButton from './CreateCourseButton.jsx';

const EditEstablishment = () => {
  const { establishmentId } = useParams();
  const { states, actions } = useEditEstablishment(establishmentId);

  return (
    <>
      <EditEstablishmentContext.Provider value={{ states, actions }}>
        <div>
          <GradeList />
          <CourseSelectors />
          <CreateCourseButton />
        </div>
      </EditEstablishmentContext.Provider>
    </>
  );
};

export default EditEstablishment;

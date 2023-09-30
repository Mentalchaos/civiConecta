import { useContext, useRef, useState } from 'react';
import { EditEstablishmentContext } from './useEditEstablishment';
import CreateCourseButton from './CreateCourseButton.jsx';
import Visible from 'src/components/UI/Visible';

const CourseSelectors = () => {
  const { states, actions } = useContext(EditEstablishmentContext);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const gradeRef = useRef(null);
  const letterRef = useRef(null);

  const handleChangeGrade = () => {
    setSelectedGrade(gradeRef.current.value);
    actions.selectCoursesByGrade(gradeRef.current.value);
  };

  const handleChangeLetter = (evt) => {
    setSelectedLetter(letterRef.current.value);
  };

  const handleSubmit = () => {
    const gradeId = selectedGrade;
    const letterId = selectedLetter;

    actions
      .createCourse(gradeId, letterId)
      .then(() => {
        gradeRef.current.value = null;
        letterRef.current.value = null;
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <div>
      <select ref={gradeRef} name="grades" onChange={handleChangeGrade}>
        <option value="null" selected>Selecciona un curso</option>
        {states.grades.map(g => <option value={g.id}>{g.level}</option>)}
      </select>

      <select ref={letterRef} name="letters" onChange={handleChangeLetter}>
        <option value="null" selected>Selecciona una letra</option>
        {states.letters.map(l => <option value={l.id}>{l.character}</option>)}
      </select>

      <Visible condition={selectedGrade && selectedLetter}>
        <CreateCourseButton onClick={handleSubmit} />
      </Visible>
    </div>
  )
}

CourseSelectors.displayName = 'CourseSelectors';

export default CourseSelectors;

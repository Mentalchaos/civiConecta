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
        gradeRef.current.value = 'Curso';
        letterRef.current.value = 'Letra';
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <div>
      <Visible condition={!selectedGrade}>
        <div className="no-curse-selected">
          <p>Aun no hay ningun curso seleccionado :(</p>
        </div>
      </Visible>
      <div className="selects-container">
        <select ref={gradeRef} name="grades" onChange={handleChangeGrade}>
          <option defaultValue={null}>Curso</option>
          {states.grades.map(g => <option key={g.id} value={g.id}>{g.level}</option>)}
        </select>

        <select className="letters-select" ref={letterRef} name="letters" onChange={handleChangeLetter}>
          <option defaultValue={null}>Letra</option>
          {states.letters.map(l => <option key={l.id} value={l.id}>{l.character}</option>)}
        </select>
      </div>

      <Visible condition={selectedGrade && selectedLetter}>
        <CreateCourseButton onClick={handleSubmit} />
      </Visible>
    </div>
  )
}

CourseSelectors.displayName = 'CourseSelectors';

export default CourseSelectors;

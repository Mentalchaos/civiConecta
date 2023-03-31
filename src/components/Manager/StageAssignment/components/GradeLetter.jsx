import gotoIcon from 'src/assets/Icons/arrow-degree.svg';

const GradeLetter = ({ grade, letter, onClick }) => {
  const gradeNumber = grade.split(' ')[0];
  return (
    <section key={letter.character} className="content__level-selected" onClick={onClick}>
      <span className="level-selected__degree">{`${gradeNumber} ${letter}`}</span>
      <span className="add-word__go-to">
        <span className="go-to__text">Básico</span>
        <img src={gotoIcon} className="go-to__icon" alt="go to icon" />
      </span>
    </section>
  );
};

export default GradeLetter;

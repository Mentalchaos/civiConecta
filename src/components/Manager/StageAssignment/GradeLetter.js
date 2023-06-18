import gotoIcon from 'src/assets/Icons/arrow-degree.svg';

const GradeLetter = ({ grade, letter, onClick }) => {
  return (
    <section
      key={letter.character}
      className="content__level-selected"
      onClick={onClick}
    >
      <span className="level-selected__degree">{`${grade} ${letter.character}`}</span>
      <span className="add-word__go-to">
      <span className="go-to__text"></span>
        <img src={gotoIcon} className="go-to__icon" alt="go to icon" />
      </span>
    </section>
  );
};

export default GradeLetter;

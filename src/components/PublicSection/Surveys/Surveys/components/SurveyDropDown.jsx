import { useState } from 'react';
import caret from 'src/assets/Icons/dropdown-arrow.svg';

const SurveyDropDown = ({ questions, action }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropStyle = isOpen ? '30px 30px 0 0' : '';
  const bottomStyle = isOpen ? 'grey 1px solid' : '2px solid var(--color-secondary)';

  const padSingleDigit = (number) => {
    return number < 10 ? '0' + number : number.toString();
  }

  const truncateString = (str) => {
    if (str.length > 90) {
      return str.substring(0, 60) + '...';
    }
    return str;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleClick = (index) => {
    action(index);
    scrollToTop();
    setIsOpen(false);
  }

  const closeDropdown = () => {
    setIsOpen(false);
  }

  return (
    <div className='surveys-dropdown-content'>
      <div className="surveys__dropdown"
        style={{
          'borderRadius': dropStyle,
          'borderBottom': bottomStyle
        }} onClick={() => setIsOpen(!isOpen)}>
        <div>Lista de preguntas</div>
        <img src={caret} alt='caret' className='survey-icon'/>
      </div>
      {isOpen && (
        <>
          <div className="survey-dropdown-overlay" onClick={closeDropdown}></div>
          <div className='survey-dropdown-list'>
            {
              questions.map((question, index) => (
                <div
                  key={index}
                  className='survey-dropdown-item'
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  <div className='survey-dropdown-index'>
                    {padSingleDigit(index + 1)} /
                  </div>
                  <div className='survey-dropdown-question'>
                    {truncateString(question.description)}
                  </div>
                </div>
              ))
            }
          </div>
        </>
      )}
    </div>
  );
};

export default SurveyDropDown;

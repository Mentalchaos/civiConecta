import { useContext } from 'react';
import ColorButton from './ColorButton';
import AddQuestionInput from './AddQuestionInput';
import { QuestionContext } from '../context';

const AlternativeEdit = ({ alternative }) => {
  const { actions } = useContext(QuestionContext);

  return (
    <div className="option-component">
      <ColorButton
        changeColor={actions.changeColor}
        label={alternative.label}
        value={alternative.value}
      />
      <AddQuestionInput
        changeDescription={actions.changeDescription}
        label={alternative.label}
        description={alternative.description}
      />
    </div>
  );
};

export default AlternativeEdit;

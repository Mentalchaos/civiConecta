import { useEffect, useState } from 'react';
import { getUserData } from 'src/utils/user';
import * as surveyRequest from 'src/services/admin/surveys.request';

const calculatePreviousAnswers = (questions) => {
  return questions.reduce((answers, question, index) => {
    const something = question.alternatives.find(a => a.isSelected);

    if (something) {
      answers[index] = something.letter;
    }

    return answers;
  }, {});
};

const useSurvey = (userType) => {
  const [survey, setSurvey] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [savedAlternatives, setSavedAlternatives] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [completedSurvey, setCompletedSurvey] = useState(false);
  const [percent, setPercent] = useState(0);
  const [valueOfOneElement, setValueOfOneElement] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fn() {
      const userData = getUserData();
      const uuid = userData.uuid;
      const response = await surveyRequest.getSurveyToAnswer(userType, uuid);
      const valueOfOne = 100 / Object.keys(response.survey).length;
      setValueOfOneElement(valueOfOne);
      setSurvey(response.feedback);
      setQuestions(response.survey);
      setSavedAlternatives(calculatePreviousAnswers(response.survey));
      setPercent(valueOfOne * Object.keys(savedAlternatives).length);
    }
    fn();
  }, [valueOfOneElement]);

  return {
    setters: {
      setPercent
    },
    states: {
      survey,
      questions,
      currentQuestion,
      savedAlternatives,
      showModal,
      completedSurvey,
      percent,
      valueOfOneElement,
      isLoading,
      get isFirstQuestion() {
        return currentQuestion === 0;
      },
      get isLastQuestion() {
        return currentQuestion === questions.length - 1;
      },
      get questionToShow() {
        return questions[currentQuestion];
      },
      get hasQuestions() {
        return questions.length;
      },
      get canContinue() {
        return !!savedAlternatives[currentQuestion];
      }
    },
    actions: {
      goBack() {
        setCurrentQuestion(currentQuestion - 1);
      },
      goToQuestion(index) {
        setCurrentQuestion(index);
      },
      async continue(userType) {
        if (currentQuestion === questions.length - 1) {
          await this.sendData(userType);
          return setShowModal(true);
        }
        setIsLoading(true);
        await this.sendData(userType);
        setIsLoading(false);
        setCurrentQuestion(currentQuestion + 1);
      },
      saveAlternative(letter) {
        console.log('pasandoooo')
        return () => {
          const checkpoint = {
            ...savedAlternatives,
            [currentQuestion]: letter
          };
          setSavedAlternatives(checkpoint);
          const currentQuestionStr = String(currentQuestion);
          if(!(currentQuestionStr in savedAlternatives)){
            setPercent(percent + valueOfOneElement);
          }
        };
      },
      isAlternativeSelected(letter) {

        return savedAlternatives[currentQuestion] === letter;
      },
      closeModal() {
        return setShowModal(false);
      },
      completedSurvey() {
        return setCompletedSurvey(true);
      },
      async sendData(userType) {
        const userData = getUserData();
        const uuid = userData.uuid;

        return surveyRequest.saveAnswer(
          survey.uuid,
          uuid,
          questions[currentQuestion].id,
          savedAlternatives[currentQuestion],
          userType
        );
      }
    }
  };
};

export default useSurvey;

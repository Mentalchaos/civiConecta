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

  useEffect(() => {
    async function fn() {
      const userData = getUserData();
      const uuid = userData.uuid;
      const response = await surveyRequest.getSurveyToAnswer(userType, uuid);
      setSurvey(response.feedback);
      setQuestions(response.survey);
      setSavedAlternatives(calculatePreviousAnswers(response.survey));
    }

    fn();
  }, []);

  return {
    setters: {},
    states: {
      survey,
      questions,
      currentQuestion,
      savedAlternatives,
      showModal,
      completedSurvey,
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
      continue(userType) {
        if (currentQuestion === questions.length - 1) {
          this.sendData(userType);
          return setShowModal(true);
        }

        this.sendData();
        setCurrentQuestion(currentQuestion + 1);
      },
      saveAlternative(letter) {
        return () => {
          const checkpoint = {
            ...savedAlternatives,
            [currentQuestion]: letter
          };
          setSavedAlternatives(checkpoint);
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

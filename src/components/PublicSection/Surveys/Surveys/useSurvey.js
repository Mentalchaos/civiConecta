import { useEffect, useState } from 'react';
import * as surveyRequest from 'src/services/admin/surveys.request';

const toArray = (obj) => {
  return Object.entries(obj).map(e => ({ letter: e[1] }));
};

const calculatePreviousAnswers = (questions) => {
  return questions.reduce((answers, question, index) => {

    const something = question.alternatives.find(a => a.isSelected);

    console.log('answers', answers);

    if(something){
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

  useEffect(() => {
    async function fn() {
      const uuid = '455fd91d-15ac-48b6-8b2a-e75d7891bbab';
      const response = await surveyRequest.getSurveyToAnswer(userType, uuid);
      console.log('response', response);

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
      }
    },
    actions: {
      goBack() {
        setCurrentQuestion(currentQuestion - 1);
      },
      continue() {
        if (currentQuestion === questions.length -1) {
          return alert('sha terminaste la encuesta cheeee');
        }

        surveyRequest.saveAnswer(survey.uuid, "455fd91d-15ac-48b6-8b2a-e75d7891bbab", questions[currentQuestion].id, savedAlternatives[currentQuestion])
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
      async sendData() {
      }
    }
  };
};

export default useSurvey;

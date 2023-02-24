import { useState, useEffect } from 'react';
import * as topicRequest from 'src/services/admin/topics.request';
import * as surveyRequest from 'src/services/admin/surveys.request';
import { addUUID } from 'src/utils/uuid';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const useQuestion = (topicId, surveyType) => {
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState({});
  const [alternatives, setAlternatives] = useState([]);
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const reset = (length) => {
    setAlternatives(createAlternatives(length));
    setTitle('');
  };

  const createAlternatives = (length) => {
    return Array.from({ length })
      .map((_, idx) => ({
        value: 0,
        label: LETTERS.charAt(idx),
        description: ''
      }));
  };

  useEffect(() => {
    async function fn() {
      const response = await topicRequest.getTopic(topicId, surveyType);
      const topic = response.topic;
      const alternatives = createAlternatives(topic.alternatives);

      setTopic(topic);
      setIsLoading(false);
      setAlternatives(alternatives);

      if (topic.questions.length) {
        setQuestions(topic.questions.map(addUUID));
      }
    }

    fn();
  }, [topicId]);

  return {
    states: {
      isLoading,
      topic,
      alternatives,
      title,
      questions
    },
    setters: {
      setTitle
    },
    actions: {
      changeColor(label) {
        const newAlternatives = alternatives.map(a => {
          if (a.label !== label) {
            return a;
          }

          return {
            ...a,
            value: (a.value + 1) % 3
          };
        });

        setAlternatives(newAlternatives);
      },
      changeDescription(label, description) {
        const newAlternatives = alternatives.map(a => {
          if (a.label !== label) {
            return a;
          }

          return {
            ...a,
            description
          };
        });

        setAlternatives(newAlternatives);
      },
      async saveSurvey() {
        const response = await surveyRequest.saveSurvey(
          surveyType,
          topicId,
          title,
          alternatives
        );
        const question = response.question;

        const payload = addUUID({
          id: question.id,
          title,
          alternatives
        });
        const newQuestions = [...questions, payload];
        setQuestions(newQuestions);
        reset(topic.alternatives);
      },
      async deleteQuestion(questionId) {
        await surveyRequest.deleteQuestion(questionId);
        const filteredQuestions = questions.filter(q => q.id !== questionId);
        setQuestions(filteredQuestions);
      }
    }
  };
};

export default useQuestion;

import { useEffect, useState } from 'react';
import * as topicRequest from 'src/services/admin/topics.request';
import * as surveyRequest from 'src/services/admin/surveys.request';

const useStudentSurvey = () => {
  const [isSurveyVisible, setSurveyVisibility] = useState(false);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(false);
  const [title, setTitle] = useState('');
  const [surveys, setSurveys] = useState('');
  const [showModal, setModal] = useState(false);
  const [topic, setTopic] = useState('');
  const [removeTopicModal, setRemoveTopicModal] = useState(false);
  const [selectValue, setSelectValue] = useState('null');
  const [fetching, setFetching] = useState(false);

  const fetchInfo = async () => {
    const [topics, surveys] = await Promise.all([
      topicRequest.getTopics().then(r => r.topics),
      surveyRequest.getSurveys('Student').then(r => r.surveys)
    ]);

    setTopics(topics);
    setSurveys(surveys);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return {
    states: {
      isSurveyVisible,
      topics,
      selectedTopic,
      title,
      surveys,
      showModal,
      topic,
      removeTopicModal,
      selectValue,
      fetching
    },
    setters: {
      setSurveyVisibility,
      setTopics,
      setSelectedTopic,
      setTitle,
      setSurveys,
      setModal,
      setTopic,
      setRemoveTopicModal,
      setSelectValue,
      setFetching
    },
    actions: {
      async createCategory() {
        setFetching(true);

        const topicLength = topics.length ?
          Number.parseInt(topics[topics.length - 1]?.number + 1) :
          1;

        const payload = {
          number: topicLength,
          title: topic,
        };

        const response = await topicRequest.createTopic(payload);

        if (!response.ok) {
          setFetching(false);
          alert(response.error);
          return;
        }

        setFetching(false);
        setModal(false);
        fetchInfo();
      },
      async removeCategory() {
        setFetching(true);
        const response = await topicRequest.deleteTopic(selectValue);

        if (response.ok) {
          setFetching(false);
        } else {
          setFetching(false);
        }
      },
      setTopicAndVisibility(number, title) {
        setSelectedTopic(number);
        setTitle(title);
        setSurveyVisibility(true);
      }
    }
  }
};

export default useStudentSurvey;

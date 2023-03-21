import { useEffect, useState } from 'react';
import * as topicRequest from 'src/services/admin/topics.request';
import { fetchLoading } from 'src/utils/hookUtil';

const useSurvey = surveyType => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(false);
  const [title, setTitle] = useState('');
  const [showModal, setModal] = useState(false);
  const [topic, setTopic] = useState('');
  const [removeTopicModal, setRemoveTopicModal] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [fetching, setFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const wrapRequest = fetchLoading(setFetching);

  const fetchInfo = async () => {
    const response = await topicRequest.getTopics(surveyType);
    setTopics(response.topics);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return {
    states: {
      topics,
      selectedTopic,
      title,
      showModal,
      topic,
      removeTopicModal,
      selectValue,
      fetching,
      errorMessage,
      get isAbleToAddCategories() {
        return topics.length < 4;
      },
    },
    setters: {
      setTopics,
      setSelectedTopic,
      setTitle,
      setModal,
      setTopic,
      setRemoveTopicModal,
      setSelectValue,
    },
    actions: {
      createCategory: wrapRequest(async () => {
        const payload = { title: topic };
        const response = await topicRequest.createTopic(payload, surveyType);

        if (!response.ok) {
          return setErrorMessage(response.error);
        }

        setTopic('');
        setModal(false);
        fetchInfo();
      }),
      removeCategory: wrapRequest(async () => {
        const response = await topicRequest.deleteTopic(selectValue);

        if (!response.ok) {
          return setErrorMessage(response.error);
        }

        const filteredTopics = topics.filter(t => t.id != selectValue);
        setErrorMessage(false);
        setRemoveTopicModal(false);
        setTopics(filteredTopics);
      }),
    },
  };
};

export default useSurvey;

import { useEffect, useState } from 'react';
import * as topicRequest from 'src/services/admin/topics.request';
import * as surveyRequest from 'src/services/admin/surveys.request';
import { fetchLoading } from 'src/utils/hookUtil';

const useStudentSurvey = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(false);
  const [title, setTitle] = useState('');
  const [surveys, setSurveys] = useState('');
  const [showModal, setModal] = useState(false);
  const [topic, setTopic] = useState('');
  const [removeTopicModal, setRemoveTopicModal] = useState(false);
  const [selectValue, setSelectValue] = useState('null');
  const [fetching, setFetching] = useState(false);

  const wrapRequest = fetchLoading(setFetching);

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
      topics,
      selectedTopic,
      title,
      surveys,
      showModal,
      topic,
      removeTopicModal,
      selectValue,
      fetching,
      get isAbleToAddCategories() {
        return topics.length < 4;
      }
    },
    setters: {
      setTopics,
      setSelectedTopic,
      setTitle,
      setSurveys,
      setModal,
      setTopic,
      setRemoveTopicModal,
      setSelectValue
    },
    actions: {
      createCategory: wrapRequest(async () => {
        const topicLength = topics.length ?
          Number.parseInt(topics[topics.length - 1]?.number + 1) :
          1;

        const payload = {
          number: topicLength,
          title: topic,
        };

        const response = await topicRequest.createTopic(payload);

        if (!response.ok) {
          alert(response.error);
          return;
        }

        setModal(false);
        fetchInfo();
      }),
      removeCategory: wrapRequest(async () => {
        await topicRequest.deleteTopic(selectValue);
      })
    }
  }
};

export default useStudentSurvey;

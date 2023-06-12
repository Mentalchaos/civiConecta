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
  const [grades, setGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState('');
  const [description, setDescription] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const wrapRequest = fetchLoading(setFetching);

  // @TODO: Add new request to get topics
  const fetchInfo = async (gradeId) => {
    console.log('gradeId', gradeId);
    const response = await topicRequest.getTopics(gradeId);
    setTopics(response.topics);
  };

  const fetchGrades = async () => {
    const response = await topicRequest.getGrades();
    setGrades(response.grades);
  }

  useEffect(() => {
    fetchGrades();
  }, []);

  return {
    states: {
      topics,
      grades,
      selectedTopic,
      title,
      showModal,
      topic,
      removeTopicModal,
      selectValue,
      fetching,
      errorMessage,
      selectedGrade,
      description,
      unitNumber,
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
      setSelectedGrade,
      setDescription,
      setUnitNumber
    },
    actions: {
      createCategory: wrapRequest(async () => {
        const payload = { title: topic, description: description, gradeId: selectedGrade, number: unitNumber };
        const response = await topicRequest.createTopic(payload, surveyType);

        if (!response.ok) {
          return setErrorMessage(response.error);
        }

        setTopic('');
        setModal(false);
        // fetchInfo();
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
      fetchInfo,
    },
  };
};

export default useSurvey;

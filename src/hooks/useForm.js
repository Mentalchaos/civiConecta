import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reset = () => setValues(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const self = {
    states: {
      get isCompletedForm() {
        const formValues = Object.values(values);
        const formCompleted = formValues.every(value => value !== '');
        return formCompleted;
      },
    },
  };

  return { values, handleInputChange, reset, isSubmitted, self };
};

export default useForm;

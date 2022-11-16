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

  return { values, handleInputChange, reset, isSubmitted };
};

export default useForm;

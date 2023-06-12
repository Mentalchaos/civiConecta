import { useState, useEffect } from 'react';
import * as unitRequest from 'src/services/admin/units.request';
import * as gradeRequest from 'src/services/admin/grades.request';
import * as topicRequest from 'src/services/admin/topics.request';
import { fetchLoading } from 'src/utils/hookUtil';

const useUnitsSection = () => {
  const [error, setError] = useState('');
  const [grades, setGrades] = useState([]);
  const [units, setUnits] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gradeSelected, setGradeSelected] = useState('');
  const [unitSelected, setUnitSelected] = useState(null);
  const [openModalAddUnit, setOpenModalAddUnit] = useState(false);
  const [openModalDeleteUnit, setOpenModalDeleteUnit] = useState(false);

  const wrapRequest = fetchLoading(setIsLoading);

  useEffect(() => {
    async function fn() {
      const [grades] = await Promise.all([
        gradeRequest.getGrades().then(r => r.grades)
      ]);

      setGrades(grades);
    }

    fn();
  }, []);

  const self = {
    states: {
      error,
      grades,
      topics,
      units,
      isLoading,
      gradeSelected,
      openModalAddUnit,
      openModalDeleteUnit,
      get unitsWithinGrade() {
        return !isLoading && units?.length > 0 && gradeSelected;
      },
      get gradeToShow() {
        return grades.find(g => g.id == gradeSelected);
      },

      get hasNoUnitsWithinGrade() {
        return gradeSelected && !units?.length && !isLoading;
      },
      get createUnitReady() {
        return !isLoading && gradeSelected;
      },
      get initialState() {
        return !units?.length && !isLoading && !gradeSelected;
      },
    },
    setters: {
      setError,
      setGrades,
      setUnits,
      setIsLoading,
      setGradeSelected,
      setOpenModalAddUnit,
      setOpenModalDeleteUnit,
      setUnitSelected,
    },
    actions: {
      createUnit: wrapRequest(async payload => {
        const response = await unitRequest.createUnit(payload);

        if (!response.ok) {
          return setError(response.error);
        }

        setOpenModalAddUnit(false);
        setError('');
        setUnits([...units, response.unit]);
      }),
      getUnits: wrapRequest(async grade => {
        const response = await unitRequest.getUnitsByGrade(grade);
        setGradeSelected(grade);
        setUnits(response.units);
      }),
      deleteUnit: wrapRequest(async () => {
        const response = await unitRequest.deleteUnit(unitSelected);

        if (!response.ok) {
          return setError(response.error);
        }

        const filteredUnits = units.filter(u => u.id != unitSelected);
        setUnits(filteredUnits);
        setError('');
        setOpenModalDeleteUnit(false);
      }),
    },
  };

  return self;
};

export default useUnitsSection;

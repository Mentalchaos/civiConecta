import { useState, useEffect } from 'react';
import * as unitRequest from 'src/services/admin/units.request';
import { getGrades } from 'src/services/admin/grades.request';
import { throwOnError } from 'src/utils/httpHandler';
import { getUnits } from 'src/services/public/unit.request';

const useUnitsSection = () => {
  const [error, setError] = useState('');
  const [grades, setGrades] = useState([]);
  const [units, setUnits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gradeSelected, setGradeSelected] = useState('');
  const [openModalAddUnit, setOpenModalAddUnit] = useState(false);

  useEffect(() => {
    getGrades()
      .then(resp => {
        if (resp.ok) {
          setGrades(resp.grades);
        }
      });
  }, []);

  return {
    states: {
      error,
      grades,
      units,
      isLoading,
      gradeSelected,
      openModalAddUnit,
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
        return !units?.length && !isLoading && !gradeSelected
      }
    },
    setters: {
      setError,
      setGrades,
      setUnits,
      setIsLoading,
      setGradeSelected,
      setOpenModalAddUnit
    },
    actions: {
      createUnit(payload) {
        setIsLoading(true);

        unitRequest.createUnit(payload)
          .then(throwOnError)
          .then(() => {
            setOpenModalAddUnit(false);
            getUnits(gradeSelected);
          })
          .catch((error) => {
            console.error(error.message);
            setError(error.message);
          })
          .then(() => {
            setIsLoading(false);
          });
      },
      getUnits(grade) {
        setIsLoading(true);

        unitRequest.getUnitsByGrade(grade)
          .then(response => {
            setUnits(response.units);
            setIsLoading(false);
          });
      }
    }
  };
};

export default useUnitsSection;

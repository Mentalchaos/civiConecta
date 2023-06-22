import { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import Loading from 'src/components/UI/Loading';
import Visible from 'src/components/UI/Visible';
import Categories from '../Categories';
import ModalAddSurvey from './components/ModalAddSurvey';
import ModalDeleteSurvey from './components/ModalDeleteSurvey';
import { SurveyContext } from '../context';

const Survey = ({ onEditCategory, surveyType }) => {
  const { states, setters, actions } = useContext(SurveyContext);
  const grades = states.grades.map(data => <option key={data.id} value={data.id}>{data.level}</option>);

  const getInfo = (gradeId) => {
    setters.setSelectedGrade(gradeId);
    actions.fetchInfo(gradeId);
  }

  return (
    <Fragment>
      <div className="default-select" style={{width: '170px', height: '24px', marginLeft: 'auto'}}>
        <select onChange={e => getInfo(e.target.value)} style={{margin: '0', padding: '0'}} >
          <option value={0}>Selecciona un nivel</option>
          {grades}
        </select>
      </div>
      <div className="categories-container">
        <Loading isLoading={states.fetching}>
          {states.topics.map(item => (
            <Categories
              type={surveyType}
              title={item.title}
              detail={item.detail}
              key={`topic-${item.id}`}
              onClick={onEditCategory(item.id)}
            />
          ))}
        </Loading>
      </div>
      <div className="buttons-container-fetch">
        <Visible condition={states.selectedGrade > 0}>
          <div className="button-container teacher-survey category-button">
            <button className="add-button" onClick={() => setters.setModal(true)}>
              <p className="add-button-icon">+</p>
              <p className="add-button-text">Añadir Categoría</p>
            </button>
          </div>
        </Visible>

        <Visible condition={!states.isAbleToAddCategories}>
          <div className="button-container teacher-survey category-button">
            <button className="add-button" onClick={() => setters.setRemoveTopicModal(true)}>
              <p className="add-button-icon">-</p>
              <p className="add-button-text">Eliminar categoría</p>
            </button>
          </div>
        </Visible>
      </div>
      <Visible condition={states.showModal}>
        <ModalAddSurvey />
      </Visible>

      <Visible condition={states.removeTopicModal}>
        <ModalDeleteSurvey />
      </Visible>
    </Fragment>
  );
};

Survey.propTypes = {
  onEditCategory: PropTypes.func.isRequired
};

export default Survey;

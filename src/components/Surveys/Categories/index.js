import PropTypes from 'prop-types';
import relationships from 'src/assets/images/relationships-icon.png';
import editArrow from 'src/assets/images/edit-arrow.png';
import './Categories.css';

const Categories = ({ title, detail, type, onClick }) => {
  const css = { color: type == 'student' ? '#D9687C' : '' };

  return (
    <div className="category-container" onClick={onClick}>
      <div className='category-icon'>
        <img src={relationships} alt="relationships-con" />
      </div>
      <div className='category-description'>
        <p style={css} className='category-title'>{title}</p>
        <p className='category-details'>{detail}</p>
      </div>
      <div className='edit-arrow'>
        <p style={css} className='edit-hover'>Editar categoría</p>
        <img src={editArrow} alt="arrow-icon" />
      </div>
    </div>
  );
};

Categories.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Categories.defaultProps = {
  detail: ''
};

export default Categories;

import relationships from '../../../assets/images/relationships-icon.png';
import editArrow from '../../../assets/images/edit-arrow.png';
// import studentsIcon from '../../../assets/images/relationships-red.png';
import './Categories.css';

const Categories = ({ title, detail, type, onclick}) => {
    const css = {color: type == 'student' ? '#D9687C'  : ''};

    return (
        <div className="category-container" onClick={onclick}>
            <div className='category-icon'>
                <img src={relationships} alt="relationships-con"/>
            </div>
            <div className='category-description'>
                <p style={css} className='category-title'>{title}</p>
                <p className='category-details'>{detail}</p>
            </div>
            <div className='edit-arrow'>
                <p style={css} className='edit-hover'>Editar categoría</p>
                <img src={editArrow} alt="arrow-icon"/>
            </div>
        </div>
    )
}

export default Categories;
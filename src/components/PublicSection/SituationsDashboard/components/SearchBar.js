import book from 'src/assets/Icons/books-icon.svg';
import searchIcon from 'src/assets/Icons/search-icon.png';
import '../SituationsDashboard.css';

const SearchBar = () => {
    return (
        <div className='search-container'>
            <div className='search-info'>
                <img src={book} alt='book-icon' />
                <p>Buscador</p>
            </div>
            <div className='search-input'>
                <input type='text' placeholder='Escribe aquí lo que buscas'></input>
                <img src={searchIcon} alt='search-icon' />
            </div>
        </div>
    )
}

export default SearchBar;
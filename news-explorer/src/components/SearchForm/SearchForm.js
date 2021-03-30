import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <form className='search__form'>
            <input className='search__input' type='text' name='searchInput' placeholder='Enter topic' />
            <button className='search__button' type='submit'>Search</button>
        </form>
    )
}

export default SearchForm;

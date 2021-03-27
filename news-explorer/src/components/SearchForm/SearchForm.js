import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <form className='form'>
            <input className='form__input' type='text' name='searchInput' placeholder='Enter topic' />
            <button className='form__button' type='submit'>Search</button>
        </form>
    )
}

export default SearchForm;

import React from 'react';
import './SearchForm.css';

function SearchForm({ handleSearchFormSubmit, handleSearchChange, search }) {
  return (
    <form className='search-form' onSubmit={handleSearchFormSubmit}>
      <input
        className='search-form__input'
        type='text'
        value={search}
        onChange={handleSearchChange}
        name='searchInput'
        placeholder='Enter topic'
      />
      <button className='search-form__button' type='submit'>
        Search
      </button>
    </form>
  );
}

export default SearchForm;

import React from 'react';
import './SearchForm.css';

function SearchForm({ handleSearchFormSubmit, handleSearchChange, search }) {
  return (
    <form className='search__form' onSubmit={handleSearchFormSubmit}>
      <input
        className='search__input'
        type='text'
        value={search}
        onChange={handleSearchChange}
        name='searchInput'
        placeholder='Enter topic'
      />
      <button className='search__button' type='submit'>
        Search
      </button>
    </form>
  );
}

export default SearchForm;

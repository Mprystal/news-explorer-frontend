import React from 'react';
import './CloseButton.css';

function CloseButton({ closeAllPopups, isMobileNavOpen }) {
  return (
    <button
      type='button'
      className={`close-button ${isMobileNavOpen && 'close-button_mobile'}`}
      onClick={closeAllPopups}
    >
      <img className='close-button__img' alt='close' />
    </button>
  );
}

export default CloseButton;

import React from 'react';
import './CloseButton.css';

function CloseButton({ closeAllPopups, isMobileNavOpen }) {
  return (
    <button
      type='button'
      className={`button__close ${isMobileNavOpen && 'button__close_mobile'}`}
      onClick={closeAllPopups}
    >
      <img className='button__close-img' alt='close' />
    </button>
  );
}

export default CloseButton;

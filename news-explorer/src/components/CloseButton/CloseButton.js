import React from 'react';
import './CloseButton.css';
import { ReactComponent as Close } from '../../images/close.svg';

function CloseButton({ closeAllPopups, isMobileNavOpen }) {
  return (
    <button
      type='button'
      className={`close-button ${isMobileNavOpen && 'close-button_mobile'}`}
      onClick={closeAllPopups}
    >
      <Close />
    </button>
  );
}

export default CloseButton;

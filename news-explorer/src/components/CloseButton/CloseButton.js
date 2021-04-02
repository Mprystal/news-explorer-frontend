import React from 'react';
import './CloseButton.css';
import close from '../../images/close.svg';

function CloseButton({closeAllPopups, isMobileNavOpen}) {
    return (
        <button className={`button__close ${isMobileNavOpen && 'button__close_mobile'}`} onClick={closeAllPopups}>
            <img className='button__close-img 'src={close} alt='close'/>
        </button>
    )
}

export default CloseButton

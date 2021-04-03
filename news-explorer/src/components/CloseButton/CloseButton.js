import React from 'react';
import './CloseButton.css';
// import Close from '../../images/close.svg';
// import  CloseSmall from '../../images/closesmall.png';

function CloseButton({closeAllPopups, isMobileNavOpen}) {
    return (
        <button className={`button__close ${isMobileNavOpen && 'button__close_mobile'}`} onClick={closeAllPopups}>
            <img className='button__close-img' alt='close'/>
        </button>
    )
}

export default CloseButton

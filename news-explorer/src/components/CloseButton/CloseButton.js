import React from 'react';
import './CloseButton.css';
import close from '../../images/close.svg';

function CloseButton({closeAllPopups}) {
    return (
        <button className='button__close' onClick={closeAllPopups}>
            <img className='button__close-img 'src={close} alt='close'/>
        </button>
    )
}

export default CloseButton

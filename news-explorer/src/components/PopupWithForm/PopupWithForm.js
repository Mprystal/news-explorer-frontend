import React from 'react';
import './PopupWithForm.css';
import close from '../../images/close.svg';
import SigninForm from '../SigninForm/SigninForm';

function PopupWithForm({isSignInPopupOpen, closeSignInPopup}) {
    // console.log(isSignInPopupOpen);
    return (
        <div className={`popup ${isSignInPopupOpen && 'popup__open'}`}>
            <div className='popup__container'>
                <button className='popup__close-button' onClick={closeSignInPopup}>
                    <img className='popup__close-img 'src={close} alt='close'/>
                </button>
                <SigninForm />
            </div>
        </div>
    )
}

export default PopupWithForm

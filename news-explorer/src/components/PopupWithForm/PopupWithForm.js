import React,{ useEffect } from 'react';
import './PopupWithForm.css';
import SigninForm from '../SigninForm/SigninForm';
import SignupForm from '../SignupForm/SignupForm';
import CloseButton from '../CloseButton/CloseButton';


function PopupWithForm({isSigninPopupOpen, closeAllPopups,handleFormSwitchClick, isSignupPopupOpen,handleLoginSubmit}) {

    useEffect(()=>{
        document.addEventListener('keydown', escapeClose);
        return () => document.removeEventListener('keydown', escapeClose);
     })

     function escapeClose(e){
        if(e.which === 27){
            closeAllPopups();
        }
     }
    
    function formSwap() {
        if(isSignupPopupOpen){
            return (<>
                        <CloseButton closeAllPopups={closeAllPopups} />
                        <SignupForm handleFormSwitchClick={handleFormSwitchClick} />
                    </>)
        } else if(isSigninPopupOpen){
            return (<>
                        <CloseButton closeAllPopups={closeAllPopups} />
                        <SigninForm handleFormSwitchClick={handleFormSwitchClick} handleLoginSubmit={handleLoginSubmit} />
                    </>)
        }
    }

    return (
        <div className={`popup ${isSigninPopupOpen && 'popup__open'} ${isSignupPopupOpen && 'popup__open'} `}>
            <div className='popup__container'>
               {formSwap()}
            </div>
        </div>
    )
}

export default PopupWithForm

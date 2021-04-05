import React,{ useEffect } from 'react';
import './PopupWithForm.css';
import SigninForm from '../SigninForm/SigninForm';
import SignupForm from '../SignupForm/SignupForm';
import CloseButton from '../CloseButton/CloseButton';


function PopupWithForm({isSigninPopupOpen, closeAllPopups,handleFormSwitchClick, isSignupPopupOpen,handleLoginSubmit, handleFormChange, values, isValid,errors, resetForm, handleInputChange}) {
    useEffect(()=>{
        document.addEventListener('keydown', escapeClose);
        return () => document.removeEventListener('keydown', escapeClose);
     })

     function escapeClose(e){
        if(e.which === 27){
            closeAllPopups();
        }
     }
    

    return (
        <div className={`popup ${isSigninPopupOpen && 'popup__open'} ${isSignupPopupOpen && 'popup__open'} `}>
            <div className='popup__container'>
               {isSignupPopupOpen && 
                    <>             
                        <CloseButton closeAllPopups={closeAllPopups} />     
                        <SignupForm handleFormSwitchClick={handleFormSwitchClick} />
                    </>
                }
                {isSigninPopupOpen && 
                    <>
                        <CloseButton closeAllPopups={closeAllPopups} />                      
                        <SigninForm handleFormSwitchClick={handleFormSwitchClick} handleLoginSubmit={handleLoginSubmit} handleFormChange={handleFormChange} values={values} isValid={isValid} errors={errors} resetForm={resetForm} />
                    </>
                }
            </div>
        </div>
    )
}

export default PopupWithForm

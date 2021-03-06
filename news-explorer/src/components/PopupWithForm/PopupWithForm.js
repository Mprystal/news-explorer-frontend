import React, { useEffect } from 'react';
import './PopupWithForm.css';
import SigninForm from '../SigninForm/SigninForm';
import SignupForm from '../SignupForm/SignupForm';
import CloseButton from '../CloseButton/CloseButton';

function PopupWithForm({
  isSigninPopupOpen,
  closeAllPopups,
  handleFormSwitchClick,
  isSignupPopupOpen,
  handleLoginSubmit,
  handleFormChange,
  values,
  isValid,
  errors,
  resetForm,
  handleSignupSubmit,
  isSignupSuccessOpen,
  isMobileNavOpen,
  sameUserError,
  wrongEmailOrPasswordError,
}) {
  useEffect(() => {
    document.addEventListener('keydown', escapeClose);
    return () => document.removeEventListener('keydown', escapeClose);
  });

  function escapeClose(e) {
    if (e.which === 27) {
      closeAllPopups();
    }
  }

  return (
    <div
      className={`popup ${
        (isSigninPopupOpen || isSignupPopupOpen || isSignupSuccessOpen) &&
        'popup_open'
      }`}
    >
      <div className='popup__container'>
        {isSignupPopupOpen && (
          <>
            <CloseButton
              closeAllPopups={closeAllPopups}
              isMobileNavOpen={isMobileNavOpen}
            />
            <SignupForm
              handleFormSwitchClick={handleFormSwitchClick}
              handleFormChange={handleFormChange}
              values={values}
              isValid={isValid}
              errors={errors}
              resetForm={resetForm}
              handleSignupSubmit={handleSignupSubmit}
              sameUserError={sameUserError}
            />
          </>
        )}
        {isSigninPopupOpen && (
          <>
            <CloseButton
              closeAllPopups={closeAllPopups}
              isMobileNavOpen={isMobileNavOpen}
            />
            <SigninForm
              handleFormSwitchClick={handleFormSwitchClick}
              handleLoginSubmit={handleLoginSubmit}
              handleFormChange={handleFormChange}
              values={values}
              isValid={isValid}
              errors={errors}
              resetForm={resetForm}
              wrongEmailOrPasswordError={wrongEmailOrPasswordError}
            />
          </>
        )}
        {isSignupSuccessOpen && (
          <>
            <CloseButton
              closeAllPopups={closeAllPopups}
              isMobileNavOpen={isMobileNavOpen}
            />
            <div className='popup__success-container'>
              <h3 className='popup__success-title'>
                Registration successfully completed!{' '}
              </h3>
              <button
                className='popup__success-button'
                onClick={handleFormSwitchClick}
              >
                Sign in
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;

import React, { useContext } from 'react';
import './SignInButton.css';
import LogoutIcon from '../../images/logoutlogoutWhiteV.svg';
import LogoutIconBlack from '../../images/logoutlogoutBlackV.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SignInButton({
  loggedin,
  handleLogoutClick,
  handleSigninPopupClick,
  isMobileNavOpen,
  isNewsPage,
}) {
  const mobileButtonChange = isMobileNavOpen
    ? 'signin-button_mobile'
    : 'signin-button';

  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      {!loggedin ? (
        <button className={mobileButtonChange} onClick={handleSigninPopupClick}>
          Sign in
        </button>
      ) : (
        <button
          className={mobileButtonChange}
          onClick={handleLogoutClick}
          style={{
            width: 'fit-content',
            color: isNewsPage ? 'black' : null,
            borderColor: isNewsPage ? 'black' : null,
          }}
        >
          <div className='signin-button__container'>
            {currentUser && currentUser.name}
            <img
              className='signin-button__img'
              src={isNewsPage ? LogoutIconBlack : LogoutIcon}
              alt='Logout'
            />
          </div>
        </button>
      )}
    </>
  );
}

export default SignInButton;

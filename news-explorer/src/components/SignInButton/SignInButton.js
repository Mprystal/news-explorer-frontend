import React, { useContext } from 'react';
import './SignInButton.css';
import { ReactComponent as LogoutIcon } from '../../images/logoutlogoutWhiteV.svg';

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
          <div
            className={`signin-button__container ${
              isNewsPage && 'signin-button__container_black'
            }`}
          >
            {currentUser && currentUser.name}
            <LogoutIcon style={{ marginLeft: '17px' }} />
          </div>
        </button>
      )}
    </>
  );
}

export default SignInButton;

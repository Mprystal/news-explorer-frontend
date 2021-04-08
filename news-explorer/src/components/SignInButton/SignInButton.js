import React from 'react';
import './SignInButton.css';
import LogoutIcon from '../../images/Unionloggout_white.png';
import LogoutIconBlack from '../../images/logoutlogoutblack.png';

function SignInButton({
  loggedin,
  handleLogoutClick,
  handleSigninPopupClick,
  isMobileNavOpen,
  isNewsPage,
}) {
  const mobileButtonChange = isMobileNavOpen
    ? 'button__signin-mobile'
    : 'button__signin';

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
          <div className='button__signin-container'>
            Name{' '}
            <img
              className='button__signin-img'
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

import React from 'react';
import './SignInButton.css';
import LogoutIcon from '../../images/Unionloggout_white.png';

function SignInButton({loggedin, handleLogoutClick, handleSigninPopupClick, isMobileNavOpen}) {

    const mobileButtonChange = isMobileNavOpen ? 'button__signin-mobile' : 'button__signin';

    return (
        <>
        { !loggedin ? 
            <button className={mobileButtonChange} onClick={handleSigninPopupClick}>           
                    Sign in                       
            </button> : 
            <button className={mobileButtonChange} onClick={handleLogoutClick} style={{width:'fit-content'}} >
                <div className='button__signin-container'>
                    Name <img className='button__signin-img' src={LogoutIcon} alt='Logout' /> 
                </div> 
            </button>}   
        </>
    )
}

export default SignInButton

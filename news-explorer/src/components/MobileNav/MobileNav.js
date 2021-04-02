import React from 'react';
import './MobileNav.css';
import Navigation from '../Navigation/Navigation';
import SignInButton from '../SignInButton/SignInButton';

function MobileNav({isMobileNavOpen, loggedin, handleLogoutClick, handleSigninPopupClick}) {

    return (
        <div className='mobilenav'>
            <div className='mobilenav__container'>
                <div className='mobilenav__nav-container'>
                    <Navigation isMobileNavOpen={isMobileNavOpen} loggedin={loggedin} />
                    <SignInButton 
                    loggedin={loggedin} 
                    handleLogoutClick={handleLogoutClick} 
                    handleSigninPopupClick={handleSigninPopupClick}  
                    isMobileNavOpen={isMobileNavOpen}
                    />
                </div>
            </div>
        </div>
        
    )
}

export default MobileNav;

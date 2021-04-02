import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import DropDownMenu from '../../images/menuburger.png';
import CloseButton from '../CloseButton/CloseButton';
import SignInButton from '../SignInButton/SignInButton';

function Header({handleSigninPopupClick, loggedin, handleLogoutClick,handleMobileNav, isMobileNavOpen, closeAllPopups}) {  

    return (
        <header className="header">
           
                <h4 className="header__title">NewsExplorer</h4>
                <div className="header__container">
                    {isMobileNavOpen ? null : 
                    <Navigation loggedin={loggedin} />}
                    
                    <SignInButton handleSigninPopupClick={handleSigninPopupClick} handleLogoutClick={handleLogoutClick} loggedin={loggedin}/>                  
                </div>
                {isMobileNavOpen ? 
                    <CloseButton isMobileNavOpen={isMobileNavOpen} closeAllPopups={closeAllPopups} />
                :
                    <button className='header__button-mobile' onClick={handleMobileNav}><img src={DropDownMenu} alt='Click to open nav' /></button>
                }
         
        </header>
    )
}

export default Header

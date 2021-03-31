import React from 'react';
import './Header.css';
import LogoutIcon from '../../images/Unionloggout_white.png';
import Navigation from '../Navigation/Navigation';

function Header({handleSigninPopupClick, loggedin, handleLogoutClick}) {
    return (
        <header className="header">
           
                <h4 className="header__title">NewsExplorer</h4>
                <nav className="header__container">
                    <Navigation loggedin={loggedin} />

                    { !loggedin ? <button className="header__button" onClick={handleSigninPopupClick}>Sign in</button> : <button className="header__button" onClick={handleLogoutClick}>Name <img className='header__logout-img' src={LogoutIcon} alt='Logout' /> </button>}            
                    
                </nav>
        
        </header>
    )
}

export default Header

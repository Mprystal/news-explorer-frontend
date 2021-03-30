import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import LogoutIcon from '../../images/Unionloggout_white.png';

function Header({handleSigninPopupClick, loggedin, handleLogoutClick}) {
    return (
        <header className="header">
           
                <h4 className="header__title">NewsExplorer</h4>
                <nav className="header__nav">
                    <NavLink 
                    className="header__nav-link" activeClassName='header__nav-link_active' 
                    exact to='/'>Home</NavLink>

                    { loggedin ? <NavLink 
                    className="header__nav-link" activeClassName='header__nav-link_active' 
                    exact to='/saved-news'>Saved articles</NavLink> : null }

                    { !loggedin ? <button className="header__nav-button" onClick={handleSigninPopupClick}>Sign in</button> : <button className="header__nav-button" onClick={handleLogoutClick}>Name <img className='header__logout-img' src={LogoutIcon} alt='Logout' /> </button>}

                    
                    
                </nav>
        
        </header>
    )
}

export default Header

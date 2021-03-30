import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({handleSignInPopupClick}) {
    return (
        <header className="header">
           
                <h4 className="header__title">NewsExplorer</h4>
                <nav className="header__nav">
                    <NavLink className="header__nav-link" exact to='/'>Home</NavLink>
                    <button className="header__nav-button" onClick={handleSignInPopupClick}>Sign in</button>
                </nav>
        
        </header>
    )
}

export default Header

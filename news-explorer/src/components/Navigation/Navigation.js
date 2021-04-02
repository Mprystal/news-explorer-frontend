import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({loggedin, isMobileNavOpen}) {
    const mobileNavChange = isMobileNavOpen ? 'navigation_mobil' : 'navigation';


    return (
        <nav className={mobileNavChange}>
            <NavLink 
            className="navigation__link navigation__link_home" activeClassName='navigation__link_active' 
            exact to='/'>
                <span>Home</span>
            </NavLink>

            { loggedin ? 
            <NavLink 
            className="navigation__link navigation__link_saved-news" activeClassName='navigation__link_active' 
            exact to='/saved-news'>
                <span>Saved articles</span>
            </NavLink> : null }
        </nav>
    )
}

export default Navigation

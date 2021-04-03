import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({loggedin, isMobileNavOpen, isNewsPage}) {

    return (
        <nav className={isMobileNavOpen ? null : 'navigation'}>
            <NavLink 
            style={{color: isNewsPage ? 'black' : null}}
            className="navigation__link navigation__link_home" 
            activeClassName='navigation__link_active'
            exact to='/'>
                <span>Home</span>
            </NavLink>

            { loggedin ? 
            <NavLink 
            style={{color: isNewsPage ? 'black' : null}}
            className="navigation__link navigation__link_saved-news" 
            activeClassName='navigation__link_active_news' 
            exact to='/saved-news'>
                <span>Saved articles</span>
            </NavLink> : null }
        </nav>
    )
}

export default Navigation

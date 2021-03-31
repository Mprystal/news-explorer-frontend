import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({loggedin}) {
    return (
        <>
            <NavLink 
            className="navigation__link" activeClassName='navigation__link_active' 
            exact to='/'>
                Home
            </NavLink>

            { loggedin ? 
            <NavLink 
            className="navigation__link" activeClassName='navigation__link_active' 
            exact to='/saved-news'>
                Saved articles
            </NavLink> : null }
        </>
    )
}

export default Navigation

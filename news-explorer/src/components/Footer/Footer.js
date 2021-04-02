import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import git from '../../images/Vectorgit.svg';
import facebook from '../../images/Vectorfacebook.svg';

function Footer() {
    return (
        <footer className='footer'>
            <p className="footer__paragraph">&copy; 2020 Supersite, Powered by News API</p>
         <div className='footer__container'>
             <div className='footer__link-container'>
                <Link className='footer__link' to='/'>Home</Link>
                <a className='footer__link' href='https://practicum.yandex.com/web/' >Practicum by Yandex</a>
             </div>
             <div className='footer__social-container'>
                <a className='footer__social' href="https://github.com/Mprystal"><img src={git} alt='github account' /></a>
                <a className='footer__social' href="https://www.facebook.com/"><img src={facebook} alt='facebook account' /></a>
             </div>
         </div>
        </footer>
    )
}

export default Footer

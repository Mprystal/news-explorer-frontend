import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import phone from '../../images/georgia-de-lotz--UsJoNxLaNo-unsplashphone.png';

function Main() {
    return (
        <div className='main' style={{backgroundImage:`url(${phone})`}}>
            <div className='main__container'>
                <h1 className='main__title'>What's going on in the world?</h1>
                <p className='main__paragraph'>Find the latest news on any topic and save them in your personal account.</p>
                <SearchForm />
            </div> 
        </div>
    )
}

export default Main

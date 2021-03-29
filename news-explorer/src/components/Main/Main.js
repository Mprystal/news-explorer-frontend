import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import phone from '../../images/georgia-de-lotz--UsJoNxLaNo-unsplashphone.png';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main() {
    return (
        <main className="main">
            <section className='main__search-section' style={{backgroundImage:`url(${phone})`}}>
                <div className='main__container'>
                    <h1 className='main__title'>What's going on in the world?</h1>
                    <p className='main__paragraph'>Find the latest news on any topic and save them in your personal account.</p>
                    <SearchForm />
                </div> 
            </section>
            <section className='main__search-results' >
                <h2 className='main__header'>Search results</h2>
                <NewsCardList />
                <button className='main__button'>Show more</button>
            </section>   
        </main>
    )
}

export default Main

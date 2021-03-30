import React,{useState} from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import phone from '../../images/georgia-de-lotz--UsJoNxLaNo-unsplashphone.png';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function Main() {
    const [search, setSearch] = useState('');
    const [natureOption, setNatureOption] = useState(false);
    const [preloadOption, setPreloadOption] = useState(false);
    const [notFoundOption, setNotFoundOption] = useState(false);

    function handleSearchChange(e){
        setSearch(e.target.value)
    }

    function searchKeyword(text){
        if(text === 'nature'){
            setNatureOption(true)
        } else if(text === 'searchingNews'){
            setNatureOption(false)
            setPreloadOption(true)
        } 
        setNotFoundOption(true)
    }

    function handleSearchFormSubmit(e){
        e.preventDefault();
        searchKeyword(search)
        return
    }

    function searchOptionResults(){
        if(natureOption){
           return ( <>
                <h2 className='main__header'>Search results</h2>
                <NewsCardList />
                <button className='main__button'>Show more</button> 
            </>)
        } else if(preloadOption){
            return ( <div className='main__preload-container'>
                <Preloader /> 
                <p className='main__preload-paragraph'>Searching for news...</p>
            </div>)
        } else if(notFoundOption){
            return ( <div className='main__notfound-container'>
                <NotFound />
                <p className='main__notfound-paragraph'>
                    Sorry, but nothing matched 
                    <br/>
                    your search terms.
                </p>
            </div>)
        } return null;
        
    }

    return (
        <main className="main">
            <section className='main__search-section' style={{backgroundImage:`url(${phone})`}}>
                <div className='main__container'>
                    <h1 className='main__title'>What's going on in the world?</h1>
                    <p className='main__paragraph'>Find the latest news on any topic and save them in your personal account.</p>
                    <SearchForm 
                    handleSearchChange={handleSearchChange} handleSearchFormSubmit={handleSearchFormSubmit}
                    search={search} />
                </div> 
            </section>

             
            <section className='main__search-results' >
                {searchOptionResults()}
            </section>               
        </main>
    )
}

export default Main

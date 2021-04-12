import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function Main({
  loggedin,
  handleSigninPopupClick,
  savedNewsLocation,
  handleSearchChange,
  showMoreCards,
  handleSearchFormSubmit,
  searchRequest,
  isLoading,
  cards,
  numCardsShown,
  notFound,
}) {
  return (
    <main className='main'>
      <section className='main__search-section'>
        <div className='main__container'>
          <h1 className='main__title'>What's going on in the world?</h1>
          <p className='main__paragraph'>
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm
            handleSearchChange={handleSearchChange}
            handleSearchFormSubmit={handleSearchFormSubmit}
            searchRequest={searchRequest}
          />
        </div>
      </section>

      {/* The preloader will not go here for stage 3, so for stage-2 I put it here so we can see it functions properly. I would normaly make this section a componet and have early returns instead of nesting like this.But I dont know how stage 3 works yet, so I think this will do */}

      <section className='main__search-results'>
        {cards && cards.length > 0 ? (
          <>
            <h2 className='main__header'>Search results</h2>
            <NewsCardList
              handleSigninPopupClick={handleSigninPopupClick}
              loggedin={loggedin}
              numCardsShown={numCardsShown}
              savedNewsLocation={savedNewsLocation}
              cards={cards}
            />
            <button className='main__button' onClick={showMoreCards}>
              Show more
            </button>
          </>
        ) : isLoading ? (
          <div className='main__preload-container'>
            <Preloader />
            <p className='main__preload-paragraph'>Searching for news...</p>
          </div>
        ) : notFound ? (
          <div className='main__notfound-container'>
            <NotFound />
            <p className='main__notfound-paragraph'>
              Sorry, but nothing matched
              <br />
              your search terms.
            </p>
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default Main;

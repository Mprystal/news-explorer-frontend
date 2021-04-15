import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function Main({
  loggedin,
  savedNewsLocation,
  handleSearchChange,
  showMoreCards,
  handleSearchFormSubmit,
  searchRequest,
  isLoading,
  cards,
  numCardsShown,
  notFound,
  isServerError,
  bookmarkArticleClick,
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

      <section className='main__search-results'>
        {cards?.length > 0 ? (
          <>
            <h2 className='main__header'>Search results</h2>
            <NewsCardList
              loggedin={loggedin}
              numCardsShown={numCardsShown}
              savedNewsLocation={savedNewsLocation}
              cards={cards}
              bookmarkArticleClick={bookmarkArticleClick}
            />
            <div className='main__button-container'>
              {numCardsShown < cards.length && (
                <button className='main__button' onClick={showMoreCards}>
                  Show more
                </button>
              )}
            </div>
          </>
        ) : isLoading ? (
          <div className='main__preload-container'>
            <Preloader />
            <p className='main__preload-paragraph'>Searching for news...</p>
          </div>
        ) : notFound || cards?.length < 0 ? (
          <div className='main__notfound-container'>
            <NotFound />
            {isServerError ? (
              <p className='main__notfound-paragraph'>
                Sorry, something went wrong during the request.
                <br />
                There may be a connection issue or the server may be down.
                <br />
                Please try again later.
              </p>
            ) : (
              <p className='main__notfound-paragraph'>
                Sorry, but nothing matched
                <br />
                your search terms.
              </p>
            )}
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default Main;

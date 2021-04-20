import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({
  loggedin,
  savedNewsLocation,
  cards,
  numCardsShown,
  bookmarkArticleClick,
}) {
  return (
    <main className='savednews'>
      <SavedNewsHeader />
      <section className='savednews__results'>
        <NewsCardList
          loggedin={loggedin}
          savedNewsLocation={savedNewsLocation}
          cards={cards}
          numCardsShown={numCardsShown}
          bookmarkArticleClick={bookmarkArticleClick}
        />
      </section>
    </main>
  );
}

export default SavedNews;

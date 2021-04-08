import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({ loggedin, savedNewsLocation }) {
  return (
    <main className='savednews'>
      <SavedNewsHeader />
      <section className='savednews__results'>
        <NewsCardList
          loggedin={loggedin}
          savedNewsLocation={savedNewsLocation}
        />
      </section>
    </main>
  );
}

export default SavedNews;

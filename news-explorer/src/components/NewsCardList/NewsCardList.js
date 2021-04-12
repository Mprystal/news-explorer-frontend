import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  numCardsShown,
  loggedin,
  handleSigninPopupClick,
  savedNewsLocation,
  cards,
}) {
  return (
    <ul className='newscardlist'>
      {cards
        .slice(0, savedNewsLocation ? cards.length : numCardsShown)
        .map(card => (
          <NewsCard
            loggedin={loggedin}
            key={card._id ? card._id : cards.indexOf(card)}
            card={card}
            handleSigninPopupClick={handleSigninPopupClick}
            savedNewsLocation={savedNewsLocation}
          />
        ))}
    </ul>
  );
}

export default NewsCardList;

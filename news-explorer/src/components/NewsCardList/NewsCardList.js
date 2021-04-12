import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { initialCards } from '../DeleteStage3/initcards';

function NewsCardList({
  numCardsShown,
  loggedin,
  handleSigninPopupClick,
  savedNewsLocation,
}) {
  return (
    <ul className='newscardlist'>
      {initialCards
        .slice(0, savedNewsLocation ? initialCards.length : numCardsShown)
        .map((card) => (
          <NewsCard
            loggedin={loggedin}
            key={card.id}
            img={card.img}
            date={card.date}
            header={card.header}
            paragraph={card.paragraph}
            source={card.source}
            url={card.url}
            keyword={card.keyword}
            handleSigninPopupClick={handleSigninPopupClick}
            savedNewsLocation={savedNewsLocation}
          />
        ))}
    </ul>
  );
}

export default NewsCardList;

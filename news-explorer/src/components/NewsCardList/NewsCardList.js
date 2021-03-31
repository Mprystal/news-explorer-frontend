import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { initialCards } from '../DeleteStage3/initcards';



function NewsCardList({showAllCards, numCardsShown, loggedin}) {
    return (
        <ul className='newscardlist'>
            {initialCards.slice(0, showAllCards ? initialCards.length : numCardsShown).map(card => (
                <NewsCard
                    loggedin={loggedin}
                    key={card.id}
                    img={card.img}
                    date={card.date}
                    header={card.header}
                    paragraph={card.paragraph}
                    source={card.source}
                    url={card.url}
                />
                ))}
        </ul>
    )
}

export default NewsCardList

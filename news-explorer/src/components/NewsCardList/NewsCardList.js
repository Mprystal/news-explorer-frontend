import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { initialCards } from '../DeleteStage3/initcards';



function NewsCardList() {
    return (
        <ul className='newscardlist'>
            {initialCards.map(card => (
                <NewsCard
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

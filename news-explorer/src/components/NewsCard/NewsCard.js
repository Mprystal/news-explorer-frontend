import React from 'react';
import './NewsCard.css';
import bookmark from '../../images/Rectangle 8bookmark.png';

function NewsCard({img, date, header, paragraph, source, url}) {
    return (
        <li className='newscard'>
            <button className='newscard__button'> <img className='newscard__button-img' src={bookmark} alt={bookmark} /></button>
            <img className='newscard__img' src={img} alt='Article' />
            <p className='newscard__date'>{date}</p>
            <div className='newscard__container'>
                <h3 className='newscard__title'>{header}</h3>
                <p className='newscard__paragraph'>{paragraph}</p>
                <a className='newscard__link' href={url}>{source}</a>
            </div>
        </li>
    )
}

export default NewsCard

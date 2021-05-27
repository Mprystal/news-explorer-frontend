import React, { useState } from 'react';
import './NewsCard.css';
import { ReactComponent as Bookmark } from '../../images/bookmark.svg';
import { ReactComponent as Trash } from '../../images/trash.svg';
import { converText } from '../../utils/Helpers';

function NewsCard({ card, loggedin, savedNewsLocation, bookmarkArticleClick }) {
  const [showReminderDiv, setShowReminderDiv] = useState(false);
  return (
    <li className='newscard'>
      <>
        <button
          className={`newscard__button ${
            !savedNewsLocation &&
            card.isSaved &&
            loggedin &&
            'newscard__button_active'
          } ${savedNewsLocation && loggedin && 'newscard__button_fill'} `}
          onMouseEnter={() => setShowReminderDiv(true)}
          onMouseLeave={() => setShowReminderDiv(false)}
          onClick={() => bookmarkArticleClick(card)}
          aria-label={savedNewsLocation ? 'Remove article' : 'Save article'}
        >
          {savedNewsLocation ? <Trash /> : <Bookmark />}
        </button>
        {savedNewsLocation && (
          <button className='newscard__button_news'>
            <span className='newscard__button-span'>{card.keyword}</span>
          </button>
        )}
      </>

      {((!loggedin && showReminderDiv) ||
        (loggedin && showReminderDiv && savedNewsLocation)) && (
        <div className='newscard__reminder'>
          <p className='newscard__reminder-text'>
            {savedNewsLocation
              ? 'Remove from saved'
              : 'Sign in to save articles'}
          </p>
        </div>
      )}

      <a
        target='_blank'
        rel='noreferrer'
        className='newscard__link'
        href={card.link}
      >
        <img className='newscard__img' src={card.image} alt={card.title} />
        <p className='newscard__date'>{card.date}</p>
        <div className='newscard__container'>
          <h3 className='newscard__title'>{card.title}</h3>
          <p className='newscard__paragraph'>{converText(card.text)}</p>
          <p className='newscard__source'>{card.source}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;

import React, { useState } from 'react';
import './NewsCard.css';
import { ReactComponent as Bookmark } from '../../images/bookmark.svg';
import { ReactComponent as Trash } from '../../images/trash.svg';
import { convertDate } from '../../utils/Helpers';

function NewsCard({ card, loggedin, savedNewsLocation, bookmarkArticleClick }) {
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [isActicleBookmarked, SetIsActicleBookmarked] = useState(false);

  function changeBookmarkColor() {
    SetIsActicleBookmarked(!isActicleBookmarked);
  }

  return (
    <li className='newscard'>
      <>
        <button
          className={`newscard__button ${
            isActicleBookmarked && loggedin && 'newscard__button_active'
          }`}
          onMouseEnter={() => setShowSaveButton(true)}
          onMouseLeave={() => setShowSaveButton(false)}
          onClick={() => {
            bookmarkArticleClick(card);
            changeBookmarkColor();
          }}
        >
          {savedNewsLocation ? <Trash /> : <Bookmark />}
        </button>
        {savedNewsLocation && (
          <button className='newscard__button_news'>
            <span className='newscard__button-span'>{card.keyword}</span>
          </button>
        )}
      </>

      {!loggedin && showSaveButton && (
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
        href={card.url}
      >
        <img className='newscard__img' src={card.urlToImage} alt={card.title} />
        <p className='newscard__date'>{convertDate(card.publishedAt)}</p>
        <div className='newscard__container'>
          <h3 className='newscard__title'>{card.title}</h3>
          <p className='newscard__paragraph'>{card.description}</p>
          <p className='newscard__source'>{card.source}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;

import React,{useContext} from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {tooManyKeywords} from '../../utils/Helpers'

function SavedNewsHeader(cards) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className='savednewsheader'>
      <div className='savednewsheader__container'>
        <p className='savednewsheader__text_1'>Saved articles</p>
        <h2 className='savednewsheader__title'>
          {currentUser.name}, you have {cards.cards.length} saved articles
        </h2>
        <p className='savednewsheader__text_2'>
          By keywords: <b>{tooManyKeywords(cards)}</b>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;

import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader() {
    return (
        <section className='savednewsheader'>
            <div className='savednewsheader__container'>
                <p className='savednewsheader__text_1'>Saved articles</p>
                <h2 className='savednewsheader__title'>Name, you have 5 saved articles</h2>
                <p className='savednewsheader__text_2'>By keywords: <b>Nature, Yellowstone, and 2 other</b></p>
            </div>        
        </section>
    )
}

export default SavedNewsHeader

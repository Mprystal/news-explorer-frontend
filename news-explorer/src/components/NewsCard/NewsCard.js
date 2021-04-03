import React,{useState} from 'react';
import './NewsCard.css';
import BookmarkBlack from '../../images/bookmarkblack.png';
import Bookmark from '../../images/bookmarknormal.png';
import BookMarkActive from '../../images/bookmarkbluefill.png';
import Trash from '../../images/trashtrash.png';
import TrashBlack from '../../images/trashBlack.png';


function NewsCard({img, date, header, paragraph, source, url, keyword, loggedin,handleSigninPopupClick, savedNewsLocation}) {
    const [showSaveButton, setShowSaveButton] = useState(false)
    const [isActicleBookmarked, SetIsActicleBookmarked] = useState(false)

    function bookmarkArticle(){
        if(!loggedin){
            handleSigninPopupClick()
        }
        SetIsActicleBookmarked(!isActicleBookmarked)
    }

    function changeBookmarkStatus() {
        if(isActicleBookmarked && loggedin){
            return BookMarkActive
        } else if(showSaveButton){
            return BookmarkBlack
        } return Bookmark
    }


    return (
        <li className='newscard'>
            {/* **************** Main Page Logic ******************** */}
            {savedNewsLocation ?  null :
                <button 
                className='newscard__button'
                onMouseEnter={()=> setShowSaveButton(true)}
                onMouseLeave={()=> setShowSaveButton(false)}
                onClick={bookmarkArticle}
                >
                    <img className='newscard__button-img' src={changeBookmarkStatus()} alt='bookmark article' />
                </button>
            } 

            {loggedin ? null : (showSaveButton && (
                <div className='newscard__reminder'>
                    <p className='newscard__reminder-text'>Sign in to save articles</p>
                </div>
            ))}
            {/* ***************************************************** */}
            {/* **************** News Page Logic ******************** */}
            {savedNewsLocation ?<> 
                <button className='newscard__button'
                onMouseEnter={()=> setShowSaveButton(true)}
                onMouseLeave={()=> setShowSaveButton(false)}
                >
                    <img className='newscard__button-img' src={showSaveButton ? TrashBlack : Trash} alt='bookmark article' />
                </button>
                <button className='newscard__button_news'><span className='newscard__button-span'>{keyword}</span></button>
                
            </> : null}

            {(showSaveButton && savedNewsLocation) && (
                <div className='newscard__reminder'>
                    <p className='newscard__reminder-text'>Remove from saved</p>
                </div>)}

            
            {/* ***************************************************** */}

            <a className='newscard__link' href={url}>
                <img className='newscard__img' src={img} alt='Article' />
                <p className='newscard__date'>{date}</p>
                <div className='newscard__container'>
                    <h3 className='newscard__title'>{header}</h3>
                    <p className='newscard__paragraph'>{paragraph}</p>
                    <p className='newscard__source'>{source}</p>
                </div>
            </a>  
        </li>
    )
}

export default NewsCard

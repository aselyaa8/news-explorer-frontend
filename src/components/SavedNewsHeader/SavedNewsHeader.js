import React from 'react';
import './SavedNewsHeader.css'
import Navigation from '../Navigation/Navigation';

function SavedNewsHeader() {
    return (
         <header className="saved-news-header">
            <Navigation />
            <div className="saved-news-header__container">
            <p className="saved-news-header__paragraph"> Saved articles</p>
            <h2 className="saved-news-header__title">Elise, you have 5 saved articles</h2>
             <p className="saved-news-header__subtitle"> By keywords: <span className="saved-news-header__subtitle-span"> Nature, Yellowstone, and 2 other</span></p>
            </div>
            
         {/* <img src={img} alt="Around U.S." className="header__img" /> */}
         
       </header>
    );
}

export default SavedNewsHeader;
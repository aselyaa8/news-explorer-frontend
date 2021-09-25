import React from 'react';
import '../NewsCardList/NewsCardList.css';
import '../Main/Main.css';
import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';


function SavedNews() {
    return (
     <>
        <section className="saved-news">
             <NewsCardList>
                <li className="news-card-list__item">
                <NewsCard>
                     <p className="news-card__group">Nature</p>
                </NewsCard>
                </li>
                <li className="news-card-list__item">
                <NewsCard>
                     <p className="news-card__group">Nature</p>
                </NewsCard>
                </li>
                <li className="news-card-list__item">
                <NewsCard>
                     <p className="news-card__group">Nature</p>
                </NewsCard>
                </li>
                 
             </NewsCardList>
         </section>
    </>
    );
}

export default SavedNews;
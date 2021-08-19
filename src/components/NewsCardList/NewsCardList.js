import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';


function NewsCardList() {
    return (
    <section className="news-card-list">
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
    </section>
    );
}

export default NewsCardList;
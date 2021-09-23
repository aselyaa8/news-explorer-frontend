import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';


function NewsCardList(props) {
    return (
    <section className="news-card-list">
        {props.children}
    </section>
    );
}

export default NewsCardList;
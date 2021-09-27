import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';


function NewsCardList(props) {
    return (
    <ul className="news-card-list">
        {props.children}
    </ul>
    );
}

export default NewsCardList;
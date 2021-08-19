import React from 'react';
import './NewsCard.css';
import img from '../../images/img.jpg'

function NewsCard() {
    return (
    <section className="news-card">
         <img src={img} alt="blblb" className="news-card__img" />
         <p className="news-card__date">November 4, 2020</p>
         <h2 className="news-card__title">Everyone Needs a Special 'Sit Spot' in Nature</h2>
         <p className="news-card__text">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
         <p className="news-card__source">treehugger</p>
         <button className="news-card__button-save"></button>
    </section>
    );
}

export default NewsCard;
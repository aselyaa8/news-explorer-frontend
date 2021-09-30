import React, { useState } from 'react';
import './NewsCard.css';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

NewsCard.propTypes = {
  card: PropTypes.object.isRequired,
  children: PropTypes.any
};

function NewsCard(props) {
  const { card } = props;
  const location = useLocation();
  const mainPath = location.pathname === '/';
  const [isHovered, setIsHovered] = useState(false);
  const date = new Date(card.publishedAt);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="news-card">
      <img src={card.urlToImage} alt={card.title} className="news-card__img" />
      <p className="news-card__date">{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</p>
      <h2 className="news-card__title">{card.title}</h2>
      <p className="news-card__text">{card.description}</p>
      <p className="news-card__source">{card.source.name}</p>
      {props.children}
      {isHovered && <p className="news-card__hover-text">{mainPath ? 'Sign in to save articles' : 'Remove from saved'}</p>}
      <button type="button" onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }} className={mainPath ? "news-card__button-save" : "news-card__button-delete"}></button>
    </div>
  );
}

export default NewsCard;

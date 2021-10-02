import React, { useState } from 'react';
import './NewsCard.css';
import PropTypes from 'prop-types';
import { LoggedInContext } from '../../context/LoggedInContext';

NewsCard.propTypes = {
  card: PropTypes.object.isRequired,
  children: PropTypes.any
};

function NewsCard(props) {

  const { card } = props;
  const date = new Date(card.date);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="news-card">
      <img src={card.image} alt={card.title} className="news-card__img" />
      <p className="news-card__date">{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</p>
      <h2 className="news-card__title">{card.title}</h2>
      <p className="news-card__text">{card.text}</p>
      <p className="news-card__source">{card.source}</p>
      {props.children}
    </div>
  );
}

MainNewsCard.propTypes = {
  handleSaveCard: PropTypes.func.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
  handleSignInOpen: PropTypes.func.isRequired
};

export function MainNewsCard(props) {
  const loggedIn = React.useContext(LoggedInContext);
  const [isHovered, setIsHovered] = useState(false);

  function onClick() {
    if (props.card._id) {
      props.handleDeleteCard(props.card);
    } else {
      props.handleSaveCard(props.card);
    }
    if (!loggedIn) {
      props.handleSignInOpen(true);
    }
  }
  return (
    <NewsCard {...props}>
      {(isHovered && !loggedIn) && <p className="news-card__hover-text">Sign in to save articles</p>}
      <button type="button"
        className={props.card._id ? "news-card__button-save_blue" : "news-card__button-save"}
        onMouseEnter={() => { setIsHovered(true) }}
        onMouseLeave={() => { setIsHovered(false) }}
        onClick={onClick}
      />
    </NewsCard>
  );
}

SavedNewsCard.propTypes = {
  handleDeleteSavedCard: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
};

export function SavedNewsCard(props) {
  const loggedIn = React.useContext(LoggedInContext);
  const [isHovered, setIsHovered] = useState(false);

  function onClick() {
    props.handleDeleteSavedCard(props.card);
  }

  return (
    <NewsCard {...props}>
      {isHovered && <p className="news-card__hover-text">Remove from saved</p>}
      <p className="news-card__group">{props.card.keyword}</p>
      <button type="button"
        className="news-card__button-delete"
        onMouseEnter={() => { setIsHovered(true) }}
        onMouseLeave={() => { setIsHovered(false) }}
        onClick={onClick}
      />
    </NewsCard>
  );
}


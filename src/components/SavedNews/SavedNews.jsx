import React, { useState } from 'react';
import '../NewsCardList/NewsCardList.css';
import '../Main/Main.css';
import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { SavedNewsCard } from '../NewsCard/NewsCard';
import PropTypes from 'prop-types';

SavedNews.propTypes = {
  savedCards: PropTypes.array.isRequired,
  handleDeleteSavedCard: PropTypes.func.isRequired
}

function SavedNews(props) {
  const [numberOfCards, setNumberOfCards] = useState(3);
  const SHOW_MORE_INCREASE = 3;

  function handleShowMore() {
    setNumberOfCards(numberOfCards + SHOW_MORE_INCREASE);
  }
  return (
    <>
      <section className="saved-news">
        <NewsCardList>
          {props.savedCards.slice(0, numberOfCards).map((card, i) => {
            return <li key={i} className="news-card-list__item">
              <SavedNewsCard card={card} handleDeleteSavedCard={props.handleDeleteSavedCard} />
            </li>
          })}
        </NewsCardList>
        <button type="button" className="search-results__button" onClick={handleShowMore}>Show more </button>
      </section>
    </>
  );
}

export default SavedNews;

import React, { useState } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './Main.css';
import About from '../About/About'
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import PropTypes from 'prop-types';
import { MainNewsCard } from '../NewsCard/NewsCard';

Main.propTypes = {
  cards: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  handleSaveCard: PropTypes.func.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
  handleSignInOpen: PropTypes.func.isRequired
};

function Main(props) {
  const { cards } = props;
  const [numberOfCards, setNumberOfCards] = useState(3);
  const SHOW_MORE_INCREASE = 3;

  function handleShowMore() {
    setNumberOfCards(numberOfCards + SHOW_MORE_INCREASE);
  }

  const showNotFound = cards && cards.length === 0;
  const showResults = cards && cards.length > 0;
  return (
    <main className="main">
      {props.isLoading && <Preloader />}
      {showNotFound && <NotFound />}
      {showResults && (props.cards) && <section className="search-results">
        <h2 className="search-results__title">Search results</h2>
        <NewsCardList>
          {props.cards.slice(0, numberOfCards).map((card, i) => {
            return <li key={i} className="news-card-list__item">
              <MainNewsCard card={card} handleSaveCard={props.handleSaveCard} handleDeleteCard={props.handleDeleteCard} handleSignInOpen={props.handleSignInOpen} />
            </li>
          })}
        </NewsCardList>
        <button type="button" className="search-results__button" onClick={handleShowMore}>Show more </button>
      </section>}
      <About />
    </main>
  );
}

export default Main;

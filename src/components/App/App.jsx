import React, { useEffect, useState } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';

import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SuccessfullRegistrationPopup from '../SuccessfullRegistrationPopup/SuccessfullRegistrationPopup';

import newsApi from '../../utils/NewsApi';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState(null);
  useEffect(() => {
    const articles = localStorage.getItem('articles');
    if (articles) {
      setCards(JSON.parse(articles));
    }
  }, []);
  function handleSearchSubmit(query) {
    setIsLoading(true);
    newsApi.getSearchResults(query).then((res) => {
      setCards(res.articles);
      localStorage.setItem('articles', JSON.stringify(res.articles));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setIsLoading(false);
    });
  }
  return (

    <div className="page">
      <Switch>
        <Route path="/signup">
          <SignUpPopup />
        </Route>
        <Route path="/signin/success">
          {/* for presentation purpose */}
          <SuccessfullRegistrationPopup />
        </Route>
        <Route path="/signin">
          <SignInPopup />
        </Route>
        <Route path="/saved-news">
          <SavedNewsHeader />
          <SavedNews />
        </Route>
        <Route path="/">
          <Header onSearchSubmit={handleSearchSubmit} />
          <Main isLoading={isLoading} cards={cards} />
        </Route>
      </Switch>
      <Footer />
    </div>

  );
}

export default withRouter(App);

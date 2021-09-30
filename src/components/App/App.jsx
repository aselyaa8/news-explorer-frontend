import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { withRouter, Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import SuccessfullRegistrationPopup from '../SuccessfullRegistrationPopup/SuccessfullRegistrationPopup';

import newsApi from '../../utils/NewsApi';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('jwt'));
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(loggedIn);

  useEffect(() => {
    const articles = localStorage.getItem('articles');
    if (articles) {
      setCards(JSON.parse(articles));
    }
  }, []);

  useEffect(() => {
    mainApi.getUserInfo(token).then((res) => {
      setCurrentUser(res.user);
      setLoggedIn(true);
    });
  }, [token]);

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

  function handleRegister(email, password, name) {
    mainApi.register(email, password, name).then((res) => {
      console.log(res);
    })
  }

  function handleAuthorize(email, password) {
    mainApi.authorize(email, password).then((res) => {
      console.log(res);
    })
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <ProtectedRoute path="/saved-news" loggedIn={loggedIn} component={SavedNewsPage} />
          <Route path="/">
            <Header handleRegister={handleRegister} handleAuthorize={handleAuthorize} onSearchSubmit={handleSearchSubmit} />
            <Main isLoading={isLoading} cards={cards} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider >

  );
}

export default withRouter(App);

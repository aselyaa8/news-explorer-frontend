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
import { LoggedInContext } from '../../context/LoggedInContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('jwt'));
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const articles = localStorage.getItem('articles');
    if (articles) {
      setCards(JSON.parse(articles));
    }
  }, []);

  useEffect(() => {
    if (token) {
      mainApi.getUserInfo(token).then((res) => {
        setCurrentUser(res.user);
        setLoggedIn(true);
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [token]);

  useEffect(() => {
    mainApi.getArticles(token).then((res) => {
      setSavedCards(res);
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  function parseArticles(data, query) {
    return data.map((article) => {
      return {
        keyword: query,
        title: article.title,
        text: article.description,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
        image: article.urlToImage,
      }
    });
  }

  function handleSearchSubmit(query) {
    setIsLoading(true);
    newsApi.getSearchResults(query).then((res) => {
      const articles = parseArticles(res.articles, query);
      setCards(articles);
      localStorage.setItem('articles', JSON.stringify(articles));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  function handleRegister(email, password, name) {
    mainApi.register(email, password, name).then((res) => {
      setShowSignUpPopup(false);
      setShowSuccessPopup(true);
    }).catch((err) => {
      console.log(err)
    })
  }

  function handleAuthorize(email, password) {
    mainApi.authorize(email, password).then((res) => {
      if (res.token) {
        setLoggedIn(true);
        setToken(res.token);
        setShowSignInPopup(false);
        localStorage.setItem('jwt', res.token);
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleSignOut() {
    setLoggedIn(false);
    setCards(null);
    localStorage.removeItem('jwt');
    localStorage.removeItem('articles');
    setToken('');
    history.push('/');
  }

  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  function handleSignInClick(showPopup) {
    if (showPopup) {
      setShowSignInPopup(true)
    }
  }
  function handlePopupOnClose() {
    setShowSignInPopup(false);
    setShowSignUpPopup(false);
    setShowSuccessPopup(false);
  }
  function handleSignUpOpen() {
    setShowSignInPopup(false);
    setShowSuccessPopup(false)
    setShowSignUpPopup(true);
  }
  function handleSignInOpen(showPopup) {
    if (showPopup) {
      setShowSignInPopup(true);
      setShowSignUpPopup(false);
      setShowSuccessPopup(false);
    }
  }
  function handleSaveCard(card) {
    mainApi.postArticle(token, card).then((resCard) => {
      const newCards = cards.map((c) => (c === card ? resCard : c));
      setSavedCards(prevArray => [...prevArray, resCard]);
      setCards(newCards);
      localStorage.setItem('articles', JSON.stringify(newCards));

    }).catch((err) => {
      console.log(err);
    })
  }

  function handleDeleteCard(card) {
    mainApi.deleteArticle(token, card._id).then((resCard) => {
      const newSavedCards = savedCards.filter((savedCard) => (savedCard._id !== resCard._id));
      delete resCard._id;
      const newCards = cards.map((c) => (c === card ? resCard : c));
      setSavedCards(newSavedCards);
      setCards(newCards);
      localStorage.setItem('articles', JSON.stringify(newCards));
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleDeleteSavedCard(card) {
    mainApi.deleteArticle(token, card._id).then((resCard) => {
      const newSavedCards = savedCards.filter((savedCard) => (savedCard._id !== resCard._id));
      setSavedCards(newSavedCards);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoggedInContext.Provider value={loggedIn}>
        <div className="page">
          <Switch>
            <ProtectedRoute path="/saved-news" component={SavedNewsPage} handleSignOut={handleSignOut} handleSignInClick={handleSignInClick} savedCards={savedCards} handleDeleteSavedCard={handleDeleteSavedCard} />
            <Route path="/">
              <Header handleSignInClick={handleSignInClick}
                onSearchSubmit={handleSearchSubmit}
                loggedIn={loggedIn}
                handleSignOut={handleSignOut}
              />
              <Main isLoading={isLoading} cards={cards} handleSaveCard={handleSaveCard} handleDeleteCard={handleDeleteCard} handleSignInOpen={handleSignInOpen} />
              {showSignInPopup && <SignInPopup handleAuthorize={handleAuthorize} onClose={handlePopupOnClose} onSignUpOpen={handleSignUpOpen} />}
              {showSignUpPopup && <SignUpPopup handleRegister={handleRegister} onClose={handlePopupOnClose} onSignInOpen={handleSignInOpen} />}
              {showSuccessPopup && <SuccessfullRegistrationPopup onClose={handlePopupOnClose} onSignInOpen={handleSignInOpen} />}
            </Route>
          </Switch>
          <Footer />
        </div>
      </LoggedInContext.Provider>
    </CurrentUserContext.Provider >

  );
}

export default withRouter(App);

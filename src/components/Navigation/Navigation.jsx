import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import logout from '../../images/logout.svg';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import PropTypes from 'prop-types';

Navigation.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  handleAuthorize: PropTypes.func.isRequired,
}

function Navigation(props) {
  const [isBurgerButtonActive, setIsBurgerButtonActive] = useState(true);
  const [burgerClick, setBurgerClick] = useState(false);
  const location = useLocation();
  const [isSignInPopupOpen, setSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setSignUpPopupOpen] = useState(false);
  const handleBurgerClick = () => setBurgerClick(!burgerClick);
  const showBurgerButton = () => {
    if (window.innerWidth > 720) {
      setIsBurgerButtonActive(false);
    } else {
      setIsBurgerButtonActive(true);
    }
  };

  useEffect(() => {
    showBurgerButton();
  }, []);
  function handleSignIn() {
    setSignInPopupOpen(true);
  }
  function handlePopupOnClose() {
    setSignInPopupOpen(false);
    setSignUpPopupOpen(false);
  }
  function handleSignUpOpen() {
    setSignUpPopupOpen(true);
    setSignInPopupOpen(false);
  }
  function handleSignIpOpen() {
    setSignInPopupOpen(true);
    setSignUpPopupOpen(false);
  }
  const isSavedNewsPath = location.pathname === '/saved-news';

  let navigationButton = <button type="button" className="navigation__button" onClick={handleSignIn}>Sign in</button>;
  let burgerButton = <button type="button" aria-label="Menu" className={burgerClick ? "navigation__close-button" : "navigation__burger-button"} onClick={handleBurgerClick}></button>
  if (isSavedNewsPath) {
    navigationButton = <button type="button" className="navigation__logout-button">Elise </button>;
    burgerButton = <button type="button" aria-label="Menu" className={burgerClick ? " navigation__close-button_black" : "navigation__burger-button navigation__burger-button_black"} onClick={handleBurgerClick}></button>
  }


  {/* <img src={logout} alt="logout" className="navigation__logout-image"/> */ }

  window.addEventListener('resize', showBurgerButton);
  return (
    <nav className={(isBurgerButtonActive && burgerClick) ? `navigation navigation_open ${isSavedNewsPath ? 'white navigation_line' : null}` : "navigation"}>
      <div className="navigation__column-logo">
        <Link className="navigation__logo" to='/' >NewsExplorer</Link>
      </div>
      {!isBurgerButtonActive &&
        <div className="navigation__column-links">
          <Link className={!isSavedNewsPath ? "navigation__link underlined" : "navigation__link"} to='/' >Home </Link>
          {isSavedNewsPath &&
            <Link className="navigation__link underlined" to="/saved-news" >Saved articles </Link>}
          {navigationButton}
        </div>
      }

      {(isBurgerButtonActive && burgerClick) &&
        <div className={`navigation__column-links_mobile ${isSavedNewsPath ? 'white' : null}`}>
          <Link className="navigation__link navigation__link_mobile" to='/' >Home </Link>
          <button type="button" className="navigation__button navigation__button_mobile" onClick={handleSignIn}>Sign in</button>
        </div>}
      {isSignInPopupOpen && <SignInPopup handleAuthorize={props.handleAuthorize} onClose={handlePopupOnClose} onSignUpOpen={handleSignUpOpen} />}
      {isSignUpPopupOpen && <SignUpPopup handleRegister={props.handleRegister} onClose={handlePopupOnClose} onSignInOpen={handleSignIpOpen} />}
      {isBurgerButtonActive && burgerButton}
    </nav>
  );
}

export default Navigation;

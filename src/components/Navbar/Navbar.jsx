import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import PropTypes from 'prop-types';
import { LoggedInContext } from '../../context/LoggedInContext';


DesktopNavbar.propTypes = {
  handleSignInClick: PropTypes.func,
  handleSignOut: PropTypes.func,
}

export function DesktopNavbar(props) {
  const loggedIn = React.useContext(LoggedInContext);
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();
  const isSavedNewsPath = location.pathname === '/saved-news';
  const isMainPath = !isSavedNewsPath;
  return (
    <nav className="navigation">
      <div className="navigation__column-logo">
        <Link className="navigation__logo" to='/'>NewsExplorer</Link>
      </div>
      <div className="navigation__column-links">
        <Link className={isMainPath ? "navigation__link underlined" : "navigation__link"} to='/' >Home </Link>
        {loggedIn &&
          <Link className={isMainPath ? "navigation__link" : "navigation__link underlined"} to="/saved-news" >Saved articles </Link>}
        {loggedIn ?
          (<button type="button"
            className={isMainPath ? "navigation__logout-button" : "navigation__logout-button navigation__logout-button_black"}
            onClick={props.handleSignOut} > {currentUser.name}
          </button>)
          :
          (<button type="button"
            className="navigation__button"
            onClick={props.handleSignInClick}
          > Sign in
          </button>)}
      </div>
    </nav>
  )
}

MobileNavbar.propTypes = {
  handleRegister: PropTypes.func,
  handleAuthorize: PropTypes.func,
  handleSignInClick: PropTypes.func,
  handleSignOut: PropTypes.func,
}
export function MobileNavbar(props) {
  const loggedIn = React.useContext(LoggedInContext);
  const currentUser = React.useContext(CurrentUserContext);
  const [burgerClick, setBurgerClick] = useState(false);
  const location = useLocation();
  const handleBurgerClick = () => setBurgerClick(!burgerClick);
  const isSavedNewsPath = location.pathname === '/saved-news';
  const isMainPath = !isSavedNewsPath;
  return (

    <nav className={!burgerClick ? "navigation" : `navigation navigation_open ${isSavedNewsPath ? 'white navigation_line' : null}`}>

      <div className="navigation__column-logo">
        <Link className="navigation__logo" to='/'>NewsExplorer</Link>
      </div>

      {(burgerClick) &&
        <div className={`navigation__column-links_mobile ${isSavedNewsPath ? 'white' : null}`}>
          <Link className="navigation__link navigation__link_mobile" to='/' >Home </Link>

          {loggedIn && <Link className="navigation__link navigation__link_mobile" to='/saved-news' >Saved articles</Link>}

          {loggedIn ? <button type="button"
            className={`navigation__logout-button navigation__button_mobile ${isSavedNewsPath ? 'navigation__logout-button_black' : null}`}
            onClick={props.handleSignOut} > {currentUser.name}
          </button>
            :
            <button type="button"
              className="navigation__button navigation__button_mobile"
              onClick={props.handleSignInClick}>Sign in
            </button>
          }

        </div>}

      {isMainPath ?
        <button type="button"
          aria-label="Menu"
          className={burgerClick ?
            "navigation__close-button"
            : "navigation__burger-button"}
          onClick={handleBurgerClick} />
        :
        <button type="button"
          aria-label="Menu"
          className={burgerClick ?
            " navigation__close-button_black"
            : "navigation__burger-button navigation__burger-button_black"}
          onClick={handleBurgerClick} />
      }
    </nav>

  )
}







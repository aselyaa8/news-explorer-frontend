import React, {useState, useEffect} from 'react';
import './Navigation.css';
import { Link, useLocation} from 'react-router-dom';
import logout from '../../images/logout.svg';

function Navigation() {
  const [isBurgerButtonActive, setIsBurgerButtonActive] = useState(true);
  const [burgerClick, setBurgerClick] = useState(false);
  const location = useLocation();

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
  let isSavedNewsPath = location.pathname === '/saved-news';

  let navigationButton = <button className="navigation__button">Sign in</button>;
  let burgerButton = <button aria-label="Menu" type="button" className={burgerClick ? "navigation__close-button" : "navigation__burger-button"} onClick={handleBurgerClick}></button>
  if (isSavedNewsPath) {
    navigationButton =  <button className="navigation__logout-button">Elise </button>;
    burgerButton = <button aria-label="Menu" type="button" className={burgerClick ? " navigation__close-button_black" : "navigation__burger-button navigation__burger-button_black"} onClick={handleBurgerClick}></button>
  }
  
 
{/* <img src={logout} alt="logout" className="navigation__logout-image"/> */}

  window.addEventListener('resize', showBurgerButton);
    return (
      <nav className={(isBurgerButtonActive && burgerClick) ? `navigation navigation_open ${isSavedNewsPath ? 'white navigation_line' : null}` : "navigation"}>
          <div className="navigation__column-1"> 
              <Link className="navigation__logo" to='/' >NewsExplorer</Link>
          </div>
          {!isBurgerButtonActive  &&<div className="navigation__column-2">
             <Link className={!isSavedNewsPath ? "navigation__link underlined" : "navigation__link"} to='/' >Home </Link>
             {isSavedNewsPath && <Link className="navigation__link underlined" to='/saved-news' >Saved articles </Link>}
             {navigationButton}
          </div> }

          {(isBurgerButtonActive && burgerClick) && 
            <div className={`navigation__column-2_mobile ${isSavedNewsPath ? 'white' : null}`}>
              <Link className="navigation__link navigation__link_mobile" to='/' >Home </Link>
              <button className="navigation__button navigation__button_mobile">Sign in</button>
            </div>}
          
          {isBurgerButtonActive && burgerButton}
      </nav>
    );
          }
  
  export default Navigation;
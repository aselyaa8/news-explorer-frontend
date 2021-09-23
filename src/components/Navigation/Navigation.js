import React, {useState, useEffect} from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
function Navigation() {
  const [burgerButton, setBurgerButton] = useState(true);
  const [burgerClick, setBurgerClick] = useState(false);

  const handleBurgerClick = () => setBurgerClick(!burgerClick);
  const showBurgerButton = () => {
    if (window.innerWidth > 720) {
      setBurgerButton(false);
    } else {
      setBurgerButton(true);
    }
  };

  useEffect(() => {
    showBurgerButton();
  }, []);

  window.addEventListener('resize', showBurgerButton);
    return (
      <nav className={(burgerButton && burgerClick) ? "navigation navigation_open" : "navigation"}>
          <div className="navigation__column-1"> 
              <Link className="navigation__logo" to='/' >NewsExplorer</Link>
          </div>
          {!burgerButton &&<div className="navigation__column-2">
             <Link className="navigation__link" to='/' >Home </Link>
             <button className="navigation__button">Sign in</button>
          </div> }

          {(burgerButton && burgerClick) && 
            <div className="navigation__column-2_mobile">
              <Link className="navigation__link navigation__link_mobile" to='/' >Home </Link>
              <button className="navigation__button navigation__button_mobile">Sign in</button>
            </div>}
          
          {burgerButton && <button aria-label="Menu" type="button" className={burgerClick ? "navigation__close-button" : "navigation__burger-button"} onClick={handleBurgerClick}></button>}
      </nav>
    );
  }
  
  export default Navigation;
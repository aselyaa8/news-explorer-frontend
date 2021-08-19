import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
function Navigation() {
  
    return (
      <nav className="navigation">
          <div className="navigation__column-1"> 
          <Link className="navigation__logo" to='/' >NewsExplorer</Link>
          </div>
          <div className="navigation__column-2">
          <Link className="navigation__link" to='/' >Home </Link>
             <button className="navigation__button">Sign in</button>
          </div>
          
      </nav>
    );
  }
  
  export default Navigation;
import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import img from '../../images/img.jpg';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
    return (
         <header className="header">
             
             <Navigation />
             <SearchForm/>
         {/* <img src={img} alt="Around U.S." className="header__img" /> */}
         
       </header>
    );
}

export default Header;
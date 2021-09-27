import React from 'react';
import './SearchForm.css';


function SearchForm() {
  
    return (
      <div className="search">
          <h2 className="search__title">What's going on in the world?</h2>
          <p className="search__subtitle">Find the latest news on any topic and save them in your personal account.</p>
          <form className="search-form">
              <input className="search-form__input" placeholder="Yellowstone"></input>
              <button className="search-form__button" type="submit">Search</button>
          </form>
      </div>
    );
  }
  
  export default SearchForm;
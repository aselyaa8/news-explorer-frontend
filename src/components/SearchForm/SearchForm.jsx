import React, { useRef } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';

SearchForm.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
}

function SearchForm(props) {
  const searchFormInput = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchSubmit(searchFormInput.current.value);
    searchFormInput.current.value = '';
  }

  return (
    <div className="search">
      <h2 className="search__title">What&apos;s going on in the world?</h2>
      <p className="search__subtitle">Find the latest news on any topic and save them in your personal account.</p>
      <form className="search-form" onSubmit={handleSubmit}>
        <input ref={searchFormInput} className="search-form__input" placeholder="Yellowstone" />
        <button className="search-form__button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;

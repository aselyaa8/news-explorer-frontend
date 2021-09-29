import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';

import SearchForm from '../SearchForm/SearchForm';

function Header({ onSearchSubmit }) {
  return (
    <header className="header">
      <Navigation />
      <SearchForm onSearchSubmit={onSearchSubmit} />
    </header>
  );
}

Header.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};

export default Header;

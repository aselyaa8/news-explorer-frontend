import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';

import SearchForm from '../SearchForm/SearchForm';

Header.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  handleAuthorize: PropTypes.func.isRequired,
};

function Header({ onSearchSubmit, handleRegister, handleAuthorize }) {
  return (
    <header className="header">
      <Navigation handleRegister={handleRegister} handleAuthorize={handleAuthorize} />
      <SearchForm onSearchSubmit={onSearchSubmit} />
    </header>
  );
}

export default Header;

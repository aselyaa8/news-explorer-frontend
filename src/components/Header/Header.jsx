import React, { useState } from 'react';
import './Header.css';
import PropTypes from 'prop-types';


import SearchForm from '../SearchForm/SearchForm';
import { DesktopNavbar, MobileNavbar } from '../Navbar/Navbar';

Header.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  handleSignInClick: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  handleSignOut: PropTypes.func.isRequired,
};

function Header({ onSearchSubmit, handleSignInClick, handleSignOut }) {
  const [desktop, setDesktop] = useState(window.innerWidth > 720);

  const showDesktop = () => {
    if (window.innerWidth > 720) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  };
  window.addEventListener('resize', showDesktop);
  return (
    <header className="header">
      {desktop ? <DesktopNavbar
        handleSignOut={handleSignOut}
        handleSignInClick={handleSignInClick} />
        :
        <MobileNavbar handleSignOut={handleSignOut}
        />}
      <SearchForm onSearchSubmit={onSearchSubmit} />
    </header>
  );
}

export default Header;

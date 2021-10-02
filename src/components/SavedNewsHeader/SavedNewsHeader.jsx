import React, { useState } from 'react';
import './SavedNewsHeader.css'
import { CurrentUserContext } from "../../context/CurrentUserContext";
import PropTypes from 'prop-types';
import { DesktopNavbar, MobileNavbar } from "../Navbar/Navbar";

SavedNewsHeader.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
  handleSignInClick: PropTypes.func,
  savedCards: PropTypes.array.isRequired,
}

function SavedNewsHeader(props) {
  const { savedCards } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const [desktop, setDesktop] = useState(window.innerWidth > 720);

  const showDesktop = () => {
    if (window.innerWidth > 720) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  };

  window.addEventListener('resize', showDesktop);

  function getPopularKeywords() {
    const keywords = savedCards.map((card) => {
      return card.keyword;
    });

    const keywordCountsObject = {};
    for (let i = 0; i < keywords.length; i++) {

      if (keywords[i] in keywordCountsObject) {
        keywordCountsObject[keywords[i]] += 1;
      } else {
        keywordCountsObject[keywords[i]] = 1;
      }
    }

    const keywordCountsArray = [];
    for (let keyword in keywordCountsObject) {
      keywordCountsArray.push([keyword, keywordCountsObject[keyword]])
    }

    keywordCountsArray.sort(function (a, b) {
      return b[1] - a[1]
    })

    switch (keywordCountsArray.length) {
      case 0:
        return ``;
      case 1:
        return `${keywordCountsArray[0][0]}`;
      case 2:
        return `${keywordCountsArray[0][0]} and ${keywordCountsArray[1][0]}`;
      case 3:
        return `${keywordCountsArray[0][0]}, ${keywordCountsArray[1][0]}, and ${keywordCountsArray[2][0]}`;
      default:
        return `${keywordCountsArray[0][0]}, ${keywordCountsArray[1][0]}, and ${keywordCountsArray.length - 2} others`;
    }

  }

  return (
    <header className="saved-news-header">
      {desktop ? <DesktopNavbar
        handleSignOut={props.handleSignOut}
        handleSignInClick={props.handleSignInClick} />
        :
        <MobileNavbar handleSignOut={props.handleSignOut}
        />}
      <div className="saved-news-header__container">
        <p className="saved-news-header__paragraph"> Saved articles</p>
        <h2 className="saved-news-header__title">{`${currentUser.name}, you have ${savedCards.length} saved articles`}</h2>
        <p className="saved-news-header__subtitle"> By keywords: <span className="saved-news-header__subtitle-span"> {getPopularKeywords()}</span></p>
      </div>

    </header>
  );
}

export default SavedNewsHeader;

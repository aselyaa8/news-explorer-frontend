import React from 'react'
import SavedNews from '../SavedNews/SavedNews'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import PropTypes from 'prop-types';

SavedNewsPage.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
  savedCards: PropTypes.array.isRequired,
  handleDeleteSavedCard: PropTypes.func.isRequired
}

function SavedNewsPage(props) {
  return (
    <>
      <SavedNewsHeader handleSignOut={props.handleSignOut} savedCards={props.savedCards} />
      <SavedNews savedCards={props.savedCards} handleDeleteSavedCard={props.handleDeleteSavedCard} />
    </>
  )
}

export default SavedNewsPage

import React from 'react';
import './SuccessfullRegistrationPopup.css';
import '../PopupWothForm/PopupWithForm.css';
import PropTypes from 'prop-types';

SuccessfullRegistrationPopup.propTypes = {
  onSignInOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

function SuccessfullRegistrationPopup(props) {
  function onClick() {
    props.onSignInOpen(true);
  }
  return (
    <div className="popup ">
      <div className="popup__container">
        <form className="form">
          <h2 className="form__heading success-popup__heading">Registration successfully completed!</h2>
          <button type="button" className="form__text-link success-popup__button" onClick={onClick}>Sign in</button>
        </form>
        <button aria-label="Close" type="button" className="popup__close-button" onClick={props.onClose} />
      </div>
    </div>
  );
}

export default SuccessfullRegistrationPopup;

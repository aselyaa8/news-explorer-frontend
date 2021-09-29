import React from 'react';
import './SuccessfullRegistrationPopup.css';
import '../PopupWothForm/PopupWithForm.css';

function SuccessfullRegistrationPopup() {
  return (
    <div className="popup ">
      <div className="popup__container">
        <form className="form">
          <h2 className="form__heading success-popup__heading">Registration successfully completed!</h2>
          <a className="form__text-link" href="/signin">Sign in</a>
        </form>
        <button aria-label="Close" type="button" className="popup__close-button" />
      </div>
    </div>
  );
}

export default SuccessfullRegistrationPopup;

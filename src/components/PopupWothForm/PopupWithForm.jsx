import React from 'react';
import './PopupWithForm.css'
import PropTypes from 'prop-types';

PopupWithForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  footer: PropTypes.element,
  noErrors: PropTypes.bool.isRequired,
}
function PopupWithForm(props) {
  return (
    <div className="popup">
      <div className="popup__container">
        <form className="form" onSubmit={props.onSubmit}>
          <h2 className="form__heading">{props.title}</h2>
          {props.children}
          <button aria-label="Submit" type="submit" className={`form__save-button ${props.noErrors ? 'form__save-button_blue' : null}`}>{props.title}</button>
          {props.footer}
        </form>
        <button aria-label="Close" type="button" className="popup__close-button" onClick={props.onClose}></button>

      </div>
    </div>
  );
}

export default PopupWithForm;

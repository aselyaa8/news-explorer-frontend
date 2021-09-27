import React from 'react';
import './PopupWithForm.css'

function PopupWithForm(props) { 
  return (
    <div className="popup">
      <div className="popup__container">
        <form className="form" onSubmit={props.onSubmit}>
          <h2 className="form__heading">{props.title}</h2>
          {props.children}
          <button aria-label="Submit" type="submit" className="form__save-button">{props.title}</button>
          {props.footer}
        </form>
        <button aria-label="Close" type="button" className="popup__close-button" onClick={props.onClose}></button>
        
      </div>
    </div>
  );
}

export default PopupWithForm;
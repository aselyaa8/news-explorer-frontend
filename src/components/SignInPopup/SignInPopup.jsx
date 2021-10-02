import React from 'react';
import PopupWithForm from '../PopupWothForm/PopupWithForm';
import PropTypes from 'prop-types';
import { useForm, signInValidate } from '../../utils/useForm';

SignInPopup.propTypes = {
  onSignUpOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  handleAuthorize: PropTypes.func.isRequired,
}

function SignInPopup(props) {

  function callback() {
    props.handleAuthorize(values.email, values.password);
  }

  const { handleChange, handleSubmit, errors, values } = useForm(callback, signInValidate);

  const footer = (
    <p className="form__text">
      or
      <button type="button" className="form__text-link" onClick={props.onSignUpOpen}>Sign up</button>
    </p>
  );
  const noErrors = Object.keys(errors).length === 0;

  return (
    <PopupWithForm noErrors={noErrors} title="Sign In" footer={footer} onClose={props.onClose} onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="email">Email</label>
      <input className="form__input" required id="email" name="email" type="email" placeholder="Enter email" value={values.email || ''} onChange={handleChange} />
      {errors.email && <span className="form__input-error" >{errors.email}</span>}
      <label className="form__label" htmlFor="password">Password</label>
      <input className="form__input" required id="password" name="password" type="password" placeholder="Enter password" value={values.password || ''} onChange={handleChange} />
      {errors.password && <span className="form__input-error" >{errors.password}</span>}
    </PopupWithForm>
  );
}

export default SignInPopup;

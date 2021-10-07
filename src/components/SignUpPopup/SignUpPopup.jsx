import React from 'react';
import PopupWithForm from '../PopupWothForm/PopupWithForm';
import PropTypes from 'prop-types';
import { useForm, signUpValidate } from '../../utils/useForm';

SignUpPopup.propTypes = {
  onSignInOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired
}

function SignUpPopup(props) {

  function callback() {
    props.handleRegister(values.email, values.password, values.username);
  }

  const { handleChange, handleSubmit, errors, values } = useForm(callback, signUpValidate);

  function onClick() {
    props.onSignInOpen(true);
  }
  const footer = <p className="form__text"> or
    <button type="button" className="form__text-link" onClick={onClick}>Sign in</button></p>;

  const noErrors = Object.keys(errors).length === 0;
  return (
    <PopupWithForm noErrors={noErrors} title="Sign Up" footer={footer} onClose={props.onClose} onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="email">Email</label>
      <input className="form__input" required id="email" name="email" type="text" placeholder="Enter email" value={values.email} onChange={handleChange} />
      {errors.email && <span className="form__input-error" >{errors.email}</span>}
      <label className="form__label" htmlFor="password">Password</label>
      <input className="form__input" required id="password" name="password" type="password" placeholder="Enter password" value={values.password} onChange={handleChange} />
      {errors.password && <span className="form__input-error" >{errors.password}</span>}
      <label className="form__label" htmlFor="username">Username</label>
      <input className="form__input" required id="username" name="username" type="text" placeholder="Enter your username" value={values.username} onChange={handleChange} />
      {errors.username && <span className="form__input-error" >{errors.username}</span>}
    </PopupWithForm>
  );
}

export default SignUpPopup;

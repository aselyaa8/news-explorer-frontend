import React, {useState} from 'react';
import PopupWithForm from '../PopupWothForm/PopupWithForm';

function SignInPopup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e){
    setEmail(e.target.value)
  }
  function handlePasswordChange(e){
    setPassword(e.target.value)
  }
  const footer = <p className="form__text"> or <button className="form__text-link" onClick={props.onSignUpOpen}>Sign up</button></p>;
  return (
    <PopupWithForm title="Sign In" footer={footer} onClose={props.onClose}>
       <label className="form__label" for="email">Email</label>
       <input className="form__input" required id="email" name="email" type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
       <span id="name-input-error" className="form__input-error"></span>
       <label className="form__label" for="password">Password</label>
       <input className="form__input" required id="password" name="password" type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
    </PopupWithForm>
  );
}

export default SignInPopup;
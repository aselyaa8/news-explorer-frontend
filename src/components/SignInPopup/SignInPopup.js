import React, {useState} from 'react';
import PopupWithForm from '../PopupWothForm/PopupWithForm';

function SignInPopup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e){
    setEmail(e.target.value)
  }
  function handlePasswordChange(e){
    setPassword(e.target.value)
  }
  return (
    <PopupWithForm title="Sign In">
        <label className="form__label" for="email">Email</label>
       <input className="form__input" required id="email" name="email" type="text" placeholder="Enter email" value={email} onChange={handleEmailChange} />
       <label className="form__label" for="password">Password</label>
       <input className="form__input" required id="password" name="password" type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
    </PopupWithForm>

  );
}

export default SignInPopup;
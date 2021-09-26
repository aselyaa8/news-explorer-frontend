import React, {useState} from 'react';
import PopupWithForm from '../PopupWothForm/PopupWithForm';

function SignUpPopup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }
    function handleUsernameChange(e){
        setUsername(e.target.value);
    }
    const footer = <p className="form__text"> or <button className="form__text-link" onClick={props.onSignInOpen}>Sign in</button></p>;
  return (
    <PopupWithForm title="Sign Up" footer={footer} onClose={props.onClose}>
        <label className="form__label" for="email">Email</label>
        <input className="form__input" required id="email" name="email" type="text" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        <label className="form__label" for="password">Password</label>
        <input className="form__input" required id="password" name="password" type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
        <label className="form__label" for="username">Username</label>
        <input className="form__input" required id="username" name="username" type="text" placeholder="Enter your username" value={username} onChange={handleUsernameChange} />
    </PopupWithForm>);
}

export default SignUpPopup;
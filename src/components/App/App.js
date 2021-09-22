import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWothForm/PopupWithForm';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';

import {withRouter, Switch, Route} from "react-router-dom";
// import Footer from '../Footer/Footer';
// import About from '../About/About';
// import Main from '../Main/Main';
// import Navigation from '../Navigation/Navigation';
// import NewsCard from '../NewsCard/NewsCard';
// import NewsCardList from '../NewsCardList/NewsCardList';
// import PopupWithForm from '../PopupWothForm/PopupWithForm';


function App() {
  
  return (
    
      <div className='page'>
        <Header/>
        <Switch>
          
          <Route path="/signup">
            <SignUpPopup />
          </Route>
          <Route path="/signin">
            <SignInPopup />
          </Route>
          <Route path="/saved-news">
          {/* TODO: Add Saved News component. */}
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    
  );
}

export default withRouter(App);

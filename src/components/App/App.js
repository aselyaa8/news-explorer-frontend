import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWothForm/PopupWithForm';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';

import {withRouter, Switch, Route} from "react-router-dom";
import SavedNews from '../SavedNews/SavedNews';
import Navigation from '../Navigation/Navigation';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SuccessfullRegistrationPopup from '../SuccessfullRegistrationPopup/SuccessfullRegistrationPopup';
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
        <Switch>
          <Route path="/signup">
            <SignUpPopup />
          </Route>
          <Route path="/signin/success">
            {/* for presentation purpose */}
            <SuccessfullRegistrationPopup/>
          </Route>
          <Route path="/signin">
            <SignInPopup />
          </Route>
          <Route path="/saved-news">
            <SavedNewsHeader/>
            <SavedNews/>
          </Route>
          <Route path="/">
            <Header/>
            <Main/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    
  );
}

export default withRouter(App);

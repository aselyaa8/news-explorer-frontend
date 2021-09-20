import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWothForm/PopupWithForm';
import SignInPopup from '../SignInPopup/SignInPopup';
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
      <Main/>
     <Footer/>
     <SignInPopup/>
    </div>
  );
}

export default App;

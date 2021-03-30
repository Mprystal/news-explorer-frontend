import React,{ useState } from 'react';
import {Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false)
  
  function handleSignInPopupClick(e) {
    setIsSignInPopupOpen(true);
  }

  function closeSignInPopup(){
    setIsSignInPopupOpen(false);
  }

  return (
   <div className='app'> 
    <Header
     handleSignInPopupClick={handleSignInPopupClick}
    />
        <Switch>
          <Route exact path='/'>
            <Main/>
            <About />
          </Route>
          <Route exact path='/saved-news'>
            {/* Saved news component + */}
          </Route>
          <Route path='*'>
            <Redirect to='./' />
          </Route>
        </Switch>
        <Footer />
        <PopupWithForm isSignInPopupOpen={isSignInPopupOpen} closeSignInPopup={closeSignInPopup}/>
   </div>
  );
}

export default App;
